const courses = {
  htmlcss: {name:'HTML & CSS', level:'Beginner', icon:'&lt;/&gt;', image:'assets/html-course.svg', lessons:[
    ['Introduction to HTML','Learn what HTML is and how it structures webpage content.','<h1>Welcome</h1>\n<p>Hello, CodeLearn!</p>'],
    ['HTML Elements','Understand headings, paragraphs, lists, divs, and common HTML elements.','<h1>Title</h1>\n<p>Paragraph</p>\n<ul><li>Item</li></ul>'],
    ['Links and Images','Add links and images to make webpages useful and informative.','<a href="https://example.com">Visit</a>\n<img src="image.jpg" alt="Example">'],
    ['Forms and Inputs','Create basic forms using labels, text fields, buttons, and other inputs.','<form>\n  <label>Name</label>\n  <input type="text">\n  <button>Submit</button>\n</form>'],
    ['Semantic HTML','Use semantic elements such as header, nav, main, section, article, and footer.','<header>Header</header>\n<main>Content</main>\n<footer>Footer</footer>'],
    ['Introduction to CSS','Learn how CSS controls the appearance of HTML elements.','body {\n  font-family: Arial;\n}'],
    ['Selectors and Properties','Use element, class, and ID selectors with common CSS properties.','.card {\n  padding: 20px;\n  border: 1px solid #ddd;\n}'],
    ['Box Model and Layout','Understand margin, border, padding, width, flexbox, and basic layout.','.container {\n  display: flex;\n  gap: 20px;\n}'],
    ['Responsive Design','Make webpages adapt to phones, tablets, and desktop screens.','@media (max-width: 600px) {\n  .card { width: 100%; }\n}'],
    ['Mini Webpage Project','Combine HTML and CSS skills to create a simple responsive webpage.','<section class="card">\n  <h2>My Profile</h2>\n  <p>Welcome!</p>\n</section>']
  ]},
  javascript:{name:'JavaScript',level:'Beginner',icon:'JS',image:'assets/javascript-course.svg',lessons:[
    ['Introduction to JavaScript','Learn how JavaScript adds behavior and interactivity to webpages.','console.log("Hello, CodeLearn!");'],
    ['Variables and Data Types','Use let, const, strings, numbers, booleans, and basic values.','let name = "Roel";\nconst age = 20;'],
    ['Operators','Perform arithmetic, comparison, and logical operations.','let total = 10 + 5;\nlet passed = total >= 15;'],
    ['Conditional Statements','Use if, else if, and else to make decisions.','if (score >= 75) {\n  console.log("Passed");\n}'],
    ['Loops','Repeat tasks with for and while loops.','for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}'],
    ['Functions','Create reusable blocks of code with parameters and return values.','function add(a, b) {\n  return a + b;\n}'],
    ['Arrays','Store and work with multiple values in an ordered collection.','const fruits = ["Apple", "Banana", "Mango"];'],
    ['Objects','Represent related information using key-value pairs.','const student = { name: "Alex", age: 20 };'],
    ['DOM and Events','Select HTML elements and respond to user actions.','document.querySelector("button")\n  .addEventListener("click", () => alert("Hello!"));'],
    ['Mini JavaScript Project','Combine JavaScript concepts to create a small interactive webpage feature.','let count = 0;\nfunction increase() { count++; }']
  ]},
  python:{name:'Python',level:'Beginner',icon:'Py',image:'assets/python-course.svg',lessons:[
    ['Introduction to Python','Learn Python syntax and why it is popular for beginners and developers.','print("Hello, CodeLearn!")'],
    ['Variables and Data Types','Create variables and work with strings, integers, floats, and booleans.','name = "Roel"\nage = 20\nactive = True'],
    ['Input and Output','Receive user input and display information using print.','name = input("Enter your name: ")\nprint("Hello", name)'],
    ['Operators','Use arithmetic, comparison, and logical operators in Python.','total = 10 + 5\nprint(total)'],
    ['Conditional Statements','Control program decisions using if, elif, and else.','if score >= 75:\n    print("Passed")\nelse:\n    print("Try again")'],
    ['Loops','Repeat operations using for and while loops.','for number in range(1, 6):\n    print(number)'],
    ['Functions','Define reusable functions with parameters and return values.','def add(a, b):\n    return a + b'],
    ['Lists and Dictionaries','Store collections of values using lists and dictionaries.','students = ["Ana", "Ben"]\nstudent = {"name": "Ana", "age": 20}'],
    ['Files and Exceptions','Learn basic file handling and safe error handling.','try:\n    with open("data.txt") as file:\n        print(file.read())\nexcept FileNotFoundError:\n    print("File not found")'],
    ['Mini Python Project','Combine beginner Python concepts into a small console application.','name = input("Name: ")\nprint(f"Welcome, {name}!")']
  ]},
  cpp:{name:'C++',level:'Beginner',icon:'C++',image:'assets/cpp-course.svg',lessons:[
    ['Introduction to C++','Understand the basic structure of a C++ program.','#include <iostream>\nint main() {\n std::cout << "Hello";\n}'],
    ['Variables and Data Types','Work with int, double, char, string, and bool values.','int age = 20;\ndouble price = 10.5;'],
    ['Input and Output','Use cin and cout for console input and output.','std::string name;\nstd::cin >> name;\nstd::cout << name;'],
    ['Operators','Use arithmetic, comparison, and logical operators.','int total = 10 + 5;'],
    ['Conditions','Control decisions with if, else if, and else.','if (score >= 75) {\n std::cout << "Passed";\n}'],
    ['Loops','Repeat code with for and while loops.','for (int i = 1; i <= 5; i++) {\n std::cout << i;\n}'],
    ['Functions','Create reusable functions with parameters and return values.','int add(int a, int b) { return a + b; }'],
    ['Arrays','Store multiple values in an array.','int scores[3] = {90, 85, 88};'],
    ['Classes and Objects','Understand the basics of object-oriented programming.','class Student {\npublic:\n string name;\n};'],
    ['Mini C++ Project','Combine basic C++ skills into a simple console program.','int main() {\n int a, b;\n std::cin >> a >> b;\n std::cout << a + b;\n}']
  ]},
  csharp:{name:'C#',level:'Beginner',icon:'C#',image:'assets/csharp-course.svg',lessons:[
    ['Introduction to C#','Learn the structure of a simple C# program.','Console.WriteLine("Hello, CodeLearn!");'],
    ['Variables and Data Types','Use common C# data types and variables.','string name = "Roel";\nint age = 20;'],
    ['Input and Output','Read console input and display output.','string name = Console.ReadLine();\nConsole.WriteLine(name);'],
    ['Operators','Perform arithmetic and comparisons in C#.','int total = 10 + 5;'],
    ['Conditions','Use if, else if, and else statements.','if (score >= 75)\n    Console.WriteLine("Passed");'],
    ['Loops','Repeat code with for and while loops.','for (int i = 1; i <= 5; i++)\n    Console.WriteLine(i);'],
    ['Methods','Create reusable methods in C#.','static int Add(int a, int b) { return a + b; }'],
    ['Arrays and Lists','Store multiple values with arrays and List<T>.','int[] scores = {90, 85, 88};'],
    ['Classes and Objects','Build simple classes and create objects.','class Student { public string Name; }'],
    ['Mini C# Project','Combine beginner concepts into a small console application.','Console.Write("Name: ");\nstring name = Console.ReadLine();\nConsole.WriteLine($"Welcome, {name}!");']
  ]}
};

function selectedCourse(){ return new URLSearchParams(location.search).get('course') || localStorage.getItem('selectedCourse') || 'htmlcss'; }
function courseData(){ return courses[selectedCourse()] || courses.htmlcss; }
function selectCourse(key){ localStorage.setItem('selectedCourse', key); location.href = 'lessons.html?course=' + encodeURIComponent(key); }
function progressKey(course=selectedCourse()){ return 'completedLessons_' + course; }
let backendProgress = {courses:{}, quiz:null};
let backendExercises = {};

async function loadBackendData(){
  try {
    const [p,e] = await Promise.all([
      fetch('/api/progress'),
      fetch('/api/exercises/results')
    ]);
    if(p.ok) backendProgress = await p.json();
    if(e.ok) backendExercises = await e.json();
  } catch(err) {
    console.warn('Backend unavailable:', err);
  }
}
function getCompleted(course=selectedCourse()){
  return backendProgress.courses?.[course] || [];
}
async function markComplete(index){
  const course=selectedCourse();
  try {
    const r=await fetch('/api/lessons/complete',{
      method:'POST', headers:{'Content-Type':'application/json'},
      body:JSON.stringify({course,lesson:index})
    });
    if(r.ok){
      backendProgress.courses[course]=[...new Set([...(backendProgress.courses[course]||[]),index])];
    }
  } catch(err){ console.warn(err); }
  renderLesson();
}
function renderLesson(){
  const c=courseData(), lessonCount=c.lessons.length; let index=parseInt(new URLSearchParams(location.search).get('lesson')||'0',10); if(isNaN(index)||index<0||index>=lessonCount) index=0;
  document.title='CodeLearn | '+c.name+' Lessons';
  const title=document.getElementById('courseTitle'); if(title) title.textContent=c.name+' Lessons';
  const label=document.getElementById('courseLabel'); if(label) label.textContent='Course: '+c.name+' · '+c.level;
  const list=document.getElementById('lessonList'); if(list){ list.innerHTML=c.lessons.map((l,i)=>`<button class="lesson-link ${i===index?'selected':''} ${getCompleted().includes(i)?'completed':''}" onclick="openLesson(${i})">${i+1}. ${l[0]} ${getCompleted().includes(i)?'✓':''}</button>`).join(''); }
  const l=c.lessons[index];
  if(document.getElementById('lessonNumber')) document.getElementById('lessonNumber').textContent='Lesson '+String(index+1).padStart(2,'0')+' · '+c.name;
  if(document.getElementById('lessonTitle')) document.getElementById('lessonTitle').textContent=l[0];
  if(document.getElementById('lessonContent')) document.getElementById('lessonContent').innerHTML=`<p>${lessonDescription(l[0],c.name)}</p><h3>Example</h3><div class="code-box"><pre>${escapeHtml(l[2])}</pre></div><h3>Learning Objective</h3><p>After this lesson, you should be able to explain the concept, recognize its syntax, and apply it in a simple programming task.</p><div class="note"><strong>Practice:</strong> Recreate the example yourself and change one part of it to see how the result changes.</div>`;
  const complete=document.getElementById('completeBtn'); if(complete){ complete.textContent=getCompleted().includes(index)?'Lesson Completed ✓':'Mark Lesson as Complete'; complete.disabled=getCompleted().includes(index); }
  const prev=document.getElementById('prevLesson'), next=document.getElementById('nextLesson'); if(prev){prev.disabled=index===0;prev.onclick=()=>openLesson(index-1);} if(next){next.disabled=index===lessonCount-1;next.onclick=()=>openLesson(index+1);}
  const counter=document.getElementById('lessonCounter'); if(counter) counter.textContent=`Lesson ${index+1} of ${lessonCount}`;
}
function lessonDescription(topic, name){ return `${topic} introduces an important ${name} concept. Study the explanation, examine the example, and practice the idea before moving to the next lesson.`; }
function escapeHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function openLesson(i){ const c=selectedCourse(); localStorage.setItem('selectedCourse',c); location.href=`lessons.html?course=${encodeURIComponent(c)}&lesson=${i}`; }
function renderCourses(){
 const grid=document.getElementById('courseGrid'); if(!grid)return;
 grid.innerHTML=Object.entries(courses).map(([key,c])=>`<article class="course-card"><div class="course-image-wrap"><img class="course-image" src="${c.image || ''}" alt="${c.name} course illustration" onerror="this.style.display='none'"><span class="course-badge">${c.level}</span></div><div class="course-card-body"><div class="icon">${c.icon}</div><h2>${c.name}</h2><p>Build foundational ${c.name} skills through structured explanations, examples, and practical activities.</p><div class="course-meta"><span>📚 10 Lessons</span><span>⚡ Beginner</span></div><div class="course-actions"><button class="button" onclick="selectCourse('${key}')">Begin Course →</button><a class="view-lesson" href="lessons.html?course=${encodeURIComponent(key)}&lesson=0">View Lessons</a></div></div></article>`).join('');
}
async function checkExercise(button, correct){
  const box=button.closest('.exercise'); const ans=box.querySelector('.answer');
  box.querySelectorAll('button').forEach(b=>b.disabled=true);
  ans.textContent=correct?'Correct. Well done!':'Incorrect. Review the concept and try again.';
  ans.className='answer '+(correct?'correct':'wrong');
  const id=box.dataset.id; backendExercises[id]=correct;
  try {
    await fetch('/api/exercises/result',{
      method:'POST', headers:{'Content-Type':'application/json'},
      body:JSON.stringify({exercise_id:id,correct})
    });
  } catch(err){ console.warn(err); }
}
const exercises=[
 ['HTML','Identify the main heading element','Which HTML element is conventionally used for the primary heading?',['<h1>','<p>','<div>'],0],
 ['CSS','Choose a text color property','Which CSS property changes the text color?',['color','background','display'],0],
 ['JavaScript','Choose a changeable variable','Which keyword declares a variable that can be reassigned?',['const','let','class'],1],
 ['Python','Display output','Which function displays output in Python?',['echo()','print()','show()'],1],
 ['C++','Console output','Which object is commonly used for console output in C++?',['std::cout','std::input','Console.WriteLine'],0],
 ['C#','Console output','Which method writes text to the C# console?',['print()','Console.WriteLine()','cout'],1],
 ['HTML','Create a link','Which HTML element creates a hyperlink?',['<a>','<link>','<href>'],0],
 ['JavaScript','Single-line comment','Which symbol starts a single-line JavaScript comment?',['##','//','<!--'],1],
 ['Python','Conditional keyword','Which keyword starts a condition in Python?',['if','when','check'],0],
 ['CSS','Flexible layout','Which CSS value enables Flexbox on an element?',['display: flex','position: flex','layout: flex'],0]
];
function renderExercises(){const root=document.getElementById('exerciseList');if(!root)return;root.innerHTML=exercises.map((e,i)=>`<div class="exercise" data-id="ex${i}"><p class="small-title">${e[0]} · Exercise ${i+1}</p><h2>${e[1]}</h2><p>${e[2]}</p>${e[3].map((o,j)=>`<button onclick="checkExercise(this,${j===e[4]})">${escapeHtml(o)}</button>`).join('')}<p class="answer" aria-live="polite"></p></div>`).join('');}
const quizQuestions=[
 ['What does HTML stand for?',['HyperText Markup Language','HighText Machine Language','Hyper Tool Multi Language'],0],
 ['Which language is primarily used to add interactivity to webpages?',['HTML','JavaScript','CSS'],1],
 ['Which CSS property changes text color?',['color','font','text-style'],0],
 ['Which JavaScript keyword creates a constant?',['let','var','const'],2],
 ['Which Python function displays output?',['print()','display()','output()'],0],
 ['Which symbol starts a JavaScript single-line comment?',['##','//','<!--'],1],
 ['Which C++ stream is used for output?',['std::cout','std::cin','System.out'],0],
 ['Which C# method writes a line to the console?',['Console.Read()','Console.WriteLine()','printLine()'],1],
 ['Which HTML element creates a hyperlink?',['<a>','<url>','<linkto>'],0],
 ['Which Python keyword is used for a condition?',['if','when','case'],0]
];
function renderQuiz(){const root=document.getElementById('quizQuestions');if(!root)return;root.innerHTML=quizQuestions.map((q,i)=>`<div class="question"><h3>${i+1}. ${q[0]}</h3>${q[1].map((a,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${escapeHtml(a)}</label>`).join('')}</div>`).join('');}
async function submitQuiz(e){
  e.preventDefault(); let score=0, unanswered=0;
  quizQuestions.forEach((q,i)=>{
    const a=document.querySelector(`input[name="q${i}"]:checked`);
    if(!a) unanswered++; else if(Number(a.value)===q[2]) score++;
  });
  if(unanswered){
    document.getElementById('quizResult').textContent=`Please answer all 10 questions. ${unanswered} question(s) remain.`;
    return;
  }
  try{
    const r=await fetch('/api/quiz/result',{
      method:'POST', headers:{'Content-Type':'application/json'},
      body:JSON.stringify({score,total:10})
    });
    if(r.ok) backendProgress.quiz=await r.json();
  }catch(err){console.warn(err);}
  document.getElementById('quizResult').textContent=`Assessment result: ${score} out of 10 (${score*10}%).`;
}
function renderProgress(){
  const root=document.getElementById('progressCourses'); if(!root)return;
  root.innerHTML=Object.entries(courses).map(([key,c])=>{
    const n=getCompleted(key).length,p=Math.round(n/c.lessons.length*100);
    return `<div class="progress-card"><h2>${c.name}</h2><p>${n} of ${c.lessons.length} lessons completed</p><div class="bar"><div style="width:${p}%"></div></div><p>${p}% complete</p><button class="button small-button" onclick="selectCourse('${key}')">Continue Learning</button></div>`;
  }).join('');
  const s=document.getElementById('score');
  if(s){
    const q=backendProgress.quiz;
    s.textContent=!q?'No assessment has been completed yet.':`Latest assessment result: ${q.score} out of ${q.total} (${q.percentage}%).`;
  }
}
document.addEventListener('DOMContentLoaded',async()=>{
  await loadBackendData();
  renderCourses(); renderLesson(); renderExercises(); renderQuiz(); renderProgress();
  const form=document.getElementById('quizForm'); if(form)form.addEventListener('submit',submitQuiz);
  const complete=document.getElementById('completeBtn');
  if(complete)complete.onclick=()=>{const i=parseInt(new URLSearchParams(location.search).get('lesson')||'0',10);markComplete(i);};
});
