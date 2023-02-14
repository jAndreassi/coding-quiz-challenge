// dependencies=========================================
// time element to start timer
var timeEl = document.querySelector(".time");
// quizbox where the questions and answers will go
var quizBox = document.querySelector("#quiz");
//  where the score will go
var quizScore = document.querySelector("#count");
// clock timer
var startClock = document.querySelector("#startclock");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
// clock starts with 10 seconds
var secondsLeft = 10;
// score starts at zero
var score = 0;
// bank of quetsions and answers
// var questons = {};
var index = 0;

// data====================================================
// need questions and answers
const questions = [
  {
    id: 0,
    q: "What does a boolean value return?",
    a: [
      { text: "true/false", isCorrect: true },
      { text: "hi/low", isCorrect: false },
      { text: "in/out", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "Which tag is used for underline?",
    a: [
      { text: "<p>", isCorrect: false },
      { text: "<u>", isCorrect: true },
      { text: "<a>", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: "Inside which element do you put JavaScript",
    a: [
      { text: "<body>", isCorrect: false },
      { text: "<div>", isCorrect: false },
      { text: "<script>", isCorrect: true },
    ],
  },
  {
    id: 3,
    q: "What does CSS stand for?",
    a: [
      { text: "Cascading Style Sheets", isCorrect: true },
      { text: "Computer Style Sheets", isCorrect: false },
      { text: "Creative Style Sheets", isCorrect: false },
    ],
  },
  {
    id: 4,
    q: "Which identifies a class?",
    a: [
      { text: "&", isCorrect: false },
      { text: "#", isCorrect: false },
      { text: ".", isCorrect: true },
    ],
  },
];
// functions============================================
// quiz started
function getQuestions() {
  startClock.setAttribute("style", "display:none");
  let questionText = document.createElement("h4");
  quizBox.appendChild(questionText);

  let problem = questions[index].q;
  let answers = questions[index].a;
  console.log(problem);

  var answers1 = answers[0].text;
  button1.textContent = answers1;
  value1 = answers[0].isCorrect;
  // console.log(value1);

  var answers2 = answers[1].text;
  button2.textContent = answers2;
  value2 = answers[1].isCorrect;
  // console.log(answers2);

  var answers3 = answers[2].text;
  button3.textContent = answers3;
  value3 = answers[2].isCorrect;
  // console.log(anything);
  // set eventlistener for each button. return value 1(true or false) for button 1 and then the same for 2 and 3.
  questionText.textContent = problem;
  // console.log(questions[index].q);
  button1.addEventListener("click", function () {
    if (answers1 === true) {
      quizBox.appendChild(questionText);
      questionText.textContent = problem.q[2];
    }
  });
}

// let whatever = questions[1].a;
// console.log(whatever);

function takeQuiz() {
  secondsLeft = 4;
  // timeEl.textContent = secondsLeft + "Seconds Remaining";
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Seconds Remaining: " + secondsLeft;
    if (secondsLeft === 0) {
      alert("Thanks for playing");
      clearInterval(timerInterval);
    }
  }, 1000);

  getQuestions();
}

// user interactions====================================
// start game
startClock.addEventListener("click", function () {
  takeQuiz();
});

console.log(startClock);

// initialazation==================================
