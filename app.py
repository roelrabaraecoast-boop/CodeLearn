from flask import Flask, jsonify, request, session, send_from_directory
from pathlib import Path
import sqlite3
import os
import re
import hashlib
from functools import wraps

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "codelearn.db"

app = Flask(__name__, static_folder=".", static_url_path="")
app.secret_key = os.environ.get("SECRET_KEY", "codelearn-local-secret-key-change-this")
app.config.update(
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax",
)

COURSES = {
    "htmlcss": 10,
    "javascript": 10,
    "python": 10,
    "cpp": 10,
    "csharp": 10,
}


def db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def hash_password(password):
    return hashlib.sha256(password.encode("utf-8")).hexdigest()


def get_user_id():
    return session.get("user_id")


def login_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if "user_id" not in session:
            return jsonify({
                "error": "unauthorized",
                "message": "Login required."
            }), 401
        return fn(*args, **kwargs)
    return wrapper


def init_db():
    conn = db()
    conn.executescript("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT UNIQUE,
        password_hash TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS lesson_progress (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        course TEXT NOT NULL,
        lesson_index INTEGER NOT NULL,
        completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, course, lesson_index)
    );

    CREATE TABLE IF NOT EXISTS exercise_results (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        exercise_id TEXT NOT NULL,
        correct INTEGER NOT NULL,
        answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, exercise_id)
    );

    CREATE TABLE IF NOT EXISTS quiz_results (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        score INTEGER NOT NULL,
        total INTEGER NOT NULL,
        percentage REAL NOT NULL,
        taken_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """)

    # Default admin account: admin / 12345
    admin = conn.execute(
        "SELECT id FROM users WHERE username=?",
        ("admin",)
    ).fetchone()

    if not admin:
        conn.execute(
            "INSERT INTO users(username,email,password_hash) VALUES(?,?,?)",
            ("admin", "admin@codelearn.local", hash_password("12345"))
        )

    conn.commit()
    conn.close()


@app.get("/")
def index():
    return send_from_directory(BASE_DIR, "login.html")


@app.get("/api/health")
def health():
    return jsonify({
        "status": "ok",
        "message": "CodeLearn backend is running."
    })


@app.get("/api/auth/me")
def auth_me():
    if "user_id" not in session:
        return jsonify({"authenticated": False}), 401

    conn = db()
    row = conn.execute(
        "SELECT id, username, email FROM users WHERE id=?",
        (session["user_id"],)
    ).fetchone()
    conn.close()

    if not row:
        session.clear()
        return jsonify({"authenticated": False}), 401

    return jsonify({
        "authenticated": True,
        "username": row["username"],
        "email": row["email"]
    })


@app.post("/api/auth/register")
def register():
    data = request.get_json(silent=True) or {}

    username = str(data.get("username", "")).strip().lower()
    email = str(data.get("email", "")).strip().lower()
    password = str(data.get("password", ""))

    if not re.fullmatch(r"[a-zA-Z0-9_]{3,30}", username):
        return jsonify({
            "error": "invalid_username",
            "message": "Username must be 3-30 characters and use only letters, numbers, or underscore."
        }), 400

    if not re.fullmatch(r"[^\s@]+@[^\s@]+\.[^\s@]+", email):
        return jsonify({
            "error": "invalid_email",
            "message": "Please enter a valid email address."
        }), 400

    if len(password) < 6:
        return jsonify({
            "error": "weak_password",
            "message": "Password must be at least 6 characters."
        }), 400

    conn = db()

    if conn.execute(
        "SELECT id FROM users WHERE username=?",
        (username,)
    ).fetchone():
        conn.close()
        return jsonify({
            "error": "username_exists",
            "message": "Username is already registered."
        }), 409

    if conn.execute(
        "SELECT id FROM users WHERE email=?",
        (email,)
    ).fetchone():
        conn.close()
        return jsonify({
            "error": "email_exists",
            "message": "Email is already registered."
        }), 409

    cur = conn.execute(
        "INSERT INTO users(username,email,password_hash) VALUES(?,?,?)",
        (username, email, hash_password(password))
    )
    conn.commit()
    user_id = cur.lastrowid
    conn.close()

    return jsonify({
        "success": True,
        "message": "Account created successfully.",
        "user_id": user_id
    }), 201


@app.post("/api/auth/login")
def login():
    data = request.get_json(silent=True) or {}

    username = str(data.get("username", "")).strip().lower()
    password = str(data.get("password", ""))

    if not username:
        return jsonify({
            "error": "incorrect_username",
            "message": "Incorrect username."
        }), 401

    conn = db()
    row = conn.execute(
        "SELECT id, username, password_hash FROM users WHERE username=?",
        (username,)
    ).fetchone()
    conn.close()

    if not row:
        return jsonify({
            "error": "incorrect_username",
            "message": "Incorrect username."
        }), 401

    if row["password_hash"] != hash_password(password):
        return jsonify({
            "error": "incorrect_password",
            "message": "Incorrect password."
        }), 401

    session.clear()
    session["user_id"] = row["id"]

    return jsonify({
        "success": True,
        "username": row["username"]
    })


@app.post("/api/auth/logout")
def logout():
    session.clear()
    return jsonify({"success": True})


@app.get("/api/progress")
@login_required
def progress():
    user = get_user_id()
    conn = db()

    rows = conn.execute(
        "SELECT course, lesson_index FROM lesson_progress "
        "WHERE user_id=? ORDER BY course, lesson_index",
        (user,)
    ).fetchall()

    quiz = conn.execute(
        "SELECT score,total,percentage,taken_at FROM quiz_results "
        "WHERE user_id=? ORDER BY id DESC LIMIT 1",
        (user,)
    ).fetchone()

    conn.close()

    completed = {course: [] for course in COURSES}
    for row in rows:
        completed.setdefault(row["course"], []).append(row["lesson_index"])

    return jsonify({
        "courses": completed,
        "quiz": dict(quiz) if quiz else None
    })


@app.post("/api/lessons/complete")
@login_required
def complete_lesson():
    data = request.get_json(silent=True) or {}
    course = str(data.get("course", ""))
    lesson = data.get("lesson")

    if course not in COURSES:
        return jsonify({"error": "Invalid course."}), 400

    if not isinstance(lesson, int) or not 0 <= lesson < COURSES[course]:
        return jsonify({"error": "Invalid lesson index."}), 400

    user = get_user_id()
    conn = db()
    conn.execute(
        "INSERT OR IGNORE INTO lesson_progress "
        "(user_id,course,lesson_index) VALUES(?,?,?)",
        (user, course, lesson)
    )
    conn.commit()
    conn.close()

    return jsonify({
        "success": True,
        "course": course,
        "lesson": lesson
    })


@app.post("/api/exercises/result")
@login_required
def exercise_result():
    data = request.get_json(silent=True) or {}
    exercise_id = str(data.get("exercise_id", ""))
    correct = bool(data.get("correct", False))

    if not re.fullmatch(r"ex\d+", exercise_id):
        return jsonify({"error": "Invalid exercise ID."}), 400

    user = get_user_id()
    conn = db()
    conn.execute("""
        INSERT INTO exercise_results (user_id,exercise_id,correct)
        VALUES (?,?,?)
        ON CONFLICT(user_id,exercise_id)
        DO UPDATE SET
            correct=excluded.correct,
            answered_at=CURRENT_TIMESTAMP
    """, (user, exercise_id, int(correct)))
    conn.commit()
    conn.close()

    return jsonify({"success": True})


@app.get("/api/exercises/results")
@login_required
def exercise_results():
    user = get_user_id()
    conn = db()
    rows = conn.execute(
        "SELECT exercise_id,correct FROM exercise_results WHERE user_id=?",
        (user,)
    ).fetchall()
    conn.close()

    return jsonify({
        row["exercise_id"]: bool(row["correct"])
        for row in rows
    })


@app.post("/api/quiz/result")
@login_required
def quiz_result():
    data = request.get_json(silent=True) or {}
    score = data.get("score")
    total = data.get("total", 10)

    if (
        not isinstance(score, int)
        or not isinstance(total, int)
        or total <= 0
        or score < 0
        or score > total
    ):
        return jsonify({"error": "Invalid quiz score."}), 400

    percentage = round(score / total * 100, 2)
    user = get_user_id()

    conn = db()
    conn.execute(
        "INSERT INTO quiz_results "
        "(user_id,score,total,percentage) VALUES(?,?,?,?,?)",
        (user, score, total, percentage)
    )
    conn.commit()
    conn.close()

    return jsonify({
        "success": True,
        "score": score,
        "total": total,
        "percentage": percentage
    })


@app.get("/api/quiz/latest")
@login_required
def latest_quiz():
    user = get_user_id()
    conn = db()
    row = conn.execute(
        "SELECT score,total,percentage,taken_at FROM quiz_results "
        "WHERE user_id=? ORDER BY id DESC LIMIT 1",
        (user,)
    ).fetchone()
    conn.close()

    return jsonify(dict(row) if row else None)


if __name__ == "__main__":
    init_db()
    print("CodeLearn backend: http://127.0.0.1:5000")
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)), debug=False)
else:
    init_db()
