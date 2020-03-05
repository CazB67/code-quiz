//Naming the variables with HTML IDs
var timeEl = document.getElementById("time");
var questionEl = document.getElementById("question");
var explanationEl = document.getElementById("explanation");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var scoreDisplayEL = document.getElementById("score-display");
var scoreTextEL = document.getElementById("score-text");
var submitEl = document.getElementById("submit");
var result = document.getElementById("result");
var scoreInitialsEl = document.getElementById("scoreInitials");
var initialsList =document.getElementById("initials-list");
document.getElementById("hide").style.display="none";
document.getElementById("hide2").style.display="none";
var currentQuestionIndex = 0;
var score = 0;
var initials = [];
var preventMultipleClicks=0;

//Adding event listener to button
document.getElementById("btnStart").addEventListener("click", onButtonStart);

//Function for what happens when the button starts. Calls setTime function.
function onButtonStart(){
  document.getElementById("hide").style.display="none";
  setTime();
}

//Define variable for setTime and skipTime functions
var secondsLeft = 60;
var timerInterval;
//Function to decrement time by 1 second
function setTime() {
  //Call renderQuestions function
  renderQuestions();

  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft <= 0)  {
      clearInterval(timerInterval);
      gameOver();
      timeEl.textContent=0;     
    }
  }, 1000);
}

//Quiz questions, choices and answers array
var questions = [
{
  question: "What does HTML stand for?",
  choiceA : "Hyper Text Markup Language",
  choiceB : "Hi Typing Markup Language",
  choiceC : "His Terrible Madeup Language",
  choiceD : "Displayed in a Web Browser",
  answer : "A",
},
{
  question :"How do we show a value is in a string?",
  choiceA : "Brackets()",
  choiceB : "Curly brackets{}",
  choiceC : 'Quotation marks""',
  choiceD : "Colons::",
  answer : "C",
},
{
  question :"In the array <br>var zooAnimals = [\"Zebra\", \"Rhino\", \"Giraffe\", \"Owl\"]; <br>Which animal is in index 2?",
  choiceA : "Owl",
  choiceB : "Giraffe",
  choiceC : "Zebra",
  choiceD : "Rhino",
  answer : "B",
},
{
  question :"Which would return a boolean?",
  choiceA : "Prompt",
  choiceB : "Confirm",
  choiceC : "Alert",
  choiceD : "prompt",
  answer : "B",
},
{
  question :"What will console.log(3 ===\"3\"); return in the console?",
  choiceA : "True",
  choiceB : "6",
  choiceC : "False",
  choiceD : "3",
  answer : "C"
},
{
  question :"What is Javascript used for?",
  choiceA : "Write content and define the structure of a web page",
  choiceB : "Style and layout content on a web page",
  choiceC : "To implement complex features on web pages such as interactive content",
  choiceD : "Clear a web page",
  answer : "C"
},
{
  question :"What does CSS stand for?",
  choiceA : "Creating Several Styles",
  choiceB : "Creating Silly Styles",
  choiceC : "Connecting Style Servers",
  choiceD : "Cascading Style Sheets",
  answer : "D"
},
{
  question :"Inside which HTML element do we link the Javascript code?",
  choiceA : "&lt;script&gt;",
  choiceB : "&lt;javascript&gt;",
  choiceC : "&lt;js&gt;",
  choiceD : "&lt;body&gt;",
  answer : "A"
},
{
  question :"Who invented Javascript?",
  choiceA : "Bjarne Stroustrup",
  choiceB : "Bill Gates",
  choiceC : "Brendan Eich",
  choiceD : "James Gosling",
  answer : "C"
},
{
  question :"A for loop needs an iterator, increment and?",
  choiceA : "condition",
  choiceB : "name",
  choiceC : "value",
  choiceD : "number",
  answer : "A"
}
];

function renderQuestions(){
  preventMultipleClicks = 0;
  //Removes explanation that was on start page.
  explanation.innerHTML="";
  // Hide the  start button when questions appear
  btnStart.style.display="none";
  //CurrentQuestionIndex is a global variable that is incremented each time a question is answered (correctly or incorrectly)
  var currentQuestion = questions[currentQuestionIndex];
  //the variable question is a reference to the html element for displaying the question. 
  questionEl.innerHTML = currentQuestion.question;
  // Setting the question answer options. 
  choiceA.innerHTML = currentQuestion.choiceA;
  choiceB.innerHTML = currentQuestion.choiceB;
  choiceC.innerHTML = currentQuestion.choiceC;
  choiceD.innerHTML = currentQuestion.choiceD;

    // Increment the question index for the next question.
    currentQuestionIndex++;

}

function checkAnswer(answer) {
  
  if (preventMultipleClicks === 0) {
    var theAnswerToTheQuestion = questions[currentQuestionIndex - 1].answer;

      if(theAnswerToTheQuestion === answer) 
      {
          result.innerHTML = "Correct!";
          score++;
          scoreDisplayEL.textContent = score;
          scoreTextEL.textContent = " " + score + "!";
      } 
      else 
      {
          result.innerHTML = "Wrong!";
          skipTime();
      }
      if (currentQuestionIndex < questions.length) {
        var resultTextInterval = setInterval(function() {
          result.innerHTML="";
          renderQuestions();
          clearInterval(resultTextInterval);
        }, 1000);
      }
      else {
        var resultTextInterval = setInterval(function() {
          result.innerHTML="";
          clearInterval(timerInterval);
          gameOver();
          clearInterval(resultTextInterval);
        }, 1000);
      }
    }
    preventMultipleClicks = 1;
  }

//Function to subtract 5 seconds when a question is answered incorrectly
function skipTime() {
  secondsLeft= secondsLeft - 5;
}

//So that text GAME OVER displays and goes to highest score entry
function gameOver() {
  result.innerHTML="GAME OVER";
  currentQuestionIndex = questions.length + 1;
  document.getElementById("hide").style.display="block";
  document.getElementById("hide2").style.display="block";
  init();
  var resultTextInterval = setInterval(function() {
    clearInterval(resultTextInterval);
  }, 2000);
}

scoreInitialsEl.addEventListener("input", textInput);
function textInput() {
  if (scoreInitialsEl.value !== ""){
    submitEl.disabled = false;
  }
}

function getHighestScores() {
  document.getElementById("highest-scores-list").style.color ="blue";
  document.getElementById("hide").style.display="block";
  
  init();

}

document.getElementById("start-again").addEventListener("click", startagain);
function startagain() {
  window.location.href = "index.html";
}

document.getElementById("clear-scores").addEventListener("click", clear);
function clear() {
  initials.length=0;
  storeInitials();
  renderInitials();

}

submitEl.addEventListener("click", submit);

function submit() {
  event.preventDefault();

  var userInput ="Initials: " + scoreInitialsEl.value.trim()  + "  -  " +" Score: " + score;

  initials.push(userInput);
  scoreInitialsEl.value= "";
  storeInitials();
  renderInitials();
  document.getElementById("hide-submit").style.display="none";
}

function storeInitials() {
  localStorage.setItem("initials", JSON.stringify(initials));
}

function renderInitials () {
  initialsList.innerHTML ="";
   
  for(i=0; i< initials.length; i++) {
    var initial = initials[i];
    var liElement = document.createElement("li");
    liElement.textContent = initial;
    liElement.setAttribute("data-index", i);
    liElement.setAttribute("class","list");
    initialsList.appendChild(liElement);
}
}

function init() {
  // Get stored initials from localStorage
  // Parsing the JSON string to an object
  var storedInitials = JSON.parse(localStorage.getItem("initials"));

  // If initials were retrieved from localStorage, update the initials array to it
  if (storedInitials !== null) {
    initials = storedInitials;
  }

  // Render initialss to the DOM
  renderInitials();
}

//Set attributes of choice elements
choiceA.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff; font-size:24px;");
choiceB.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff; font-size:24px;");
choiceC.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff; font-size:24px;");
choiceD.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff; font-size:24px;");







