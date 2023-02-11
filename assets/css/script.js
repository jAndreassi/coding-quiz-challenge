// startQuiz.addEventListener("click",function())

// console.log(quizbox)
// console.log(startQuiz)
// console.log(TimeRanges)
// var timeEl = document.querySelector(".time");

// // Selects element by id
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

var quizbox=document.querySelector('#quiz')
var quizbox=document.querySelector('#count')
var quizbox=document.querySelector('#startclock')
var timeEl = document.querySelector(".time");
var secondsLeft = 30

function takeQuiz() {
  timer.textContent = "";
  
  var timerInterval = setInterval(function(){
    timer.content= "Time: "+timeLeft + "s";
secondsLeft--;




  
  if(secondsLeft === 0) {clearInterval(timerInterval)
  
  alert("Thanks for playing")
  
  
  );1000);


startQuiz.addEventListener("click",function())


}
