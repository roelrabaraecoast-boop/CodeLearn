# CodeLearn Backend

## Local Run
1. Open Command Prompt or PowerShell in this folder.
2. Install dependencies:
   pip install -r requirements.txt
3. Start the server:
   python app.py
4. Open:
   http://127.0.0.1:5000

## Default Admin Login
Username: admin
Password: 12345

## Features
- Admin/user login
- Incorrect username and incorrect password messages
- User registration with username, email, password, and confirmation
- Back buttons
- SQLite database
- Lesson progress
- Exercise results
- Quiz results
- Progress API
- Health check at /api/health

## Deployment
The project includes a Procfile and render.yaml for deployment on services that support Gunicorn.
Set a SECRET_KEY environment variable in production. The database is SQLite, so production hosting with ephemeral storage may reset the database after redeploy/restart; use persistent storage or a production database if permanent user data is required.
