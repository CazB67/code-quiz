//Naming time variable to write time to the page
var timeEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var quizEl = document.getElementById("quiz");
var question = document.getElementById("question");
var explanation = document.getElementById("explanation");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

document.getElementById("btnStart").addEventListener("click", onButtonStart);
function onButtonStart(){
  setTime();
}

var secondsLeft = 120;

//Function to decrement time
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

document.getElementById("fiveSecondDecrement").addEventListener("click", skipTime);

//Function to subtract 5 seconds when a question is answered incorrectly
function skipTime() {
    secondsLeft= secondsLeft - 5;
    renderQuestions();
    
}

//Quiz questions array
var questions = [
{
  question: "What does HTML stand for?",
  choiceA : "Hyper Text Markup Language",
  choiceB : "Hi Typing Markup Language",
  choiceC : "His Terrible Madeup Language",
  choiceD : "Displayed in a Web Browser",
},
{
  question :"How do we show a value is in a string?",
  choiceA : "Brackets()",
  choiceB : "Curly brackets{}",
  choiceC : 'Quotation marks""',
  choiceD : "Colons::",
},
{
  question :"In the array var zooAnimals = [\"Zebra\", \"Rhino\", \"Giraffe\", \"Owl\"]; Which animal is in index 2?",
  choiceA : "Owl",
  choiceB : "Giraffe",
  choiceC : "Zebra",
  choiceD : "Rhino",
},
{
  question :"Which would return a boolean?",
  choiceA : "Prompt",
  choiceB : "Confirm",
  choiceC : "Alert",
  choiceD : "prompt",
},
{
  question :"What will console.log(3 ===\"3\"); return in the console?",
  choiceA : "True",
  choiceB : "6",
  choiceC : "False",
  choiceD : "3",
},
{
  question :"What is Javascript used for?",
  choiceA : "Write content and define the structure of a web page",
  choiceB : "Style and layout content on a web page",
  choiceC : "To implement complex features on web pages such as interactive content",
  choiceD : "Clear a web page",
},
{
  question :"What does CSS stand for?",
  choiceA : "Creating Several Styles",
  choiceB : "Creating Silly Styles",
  choiceC : "Connecting Style Servers",
  choiceD : "Cascading Style Sheets",
},
{
  question :"Inside which HTML element do we link the Javascript code?",
  choiceA : "&lt;script&gt;",
  choiceB : "&lt;javascript&gt;",
  choiceC : "&lt;js&gt;",
  choiceD : "&lt;body&gt;",
},
{
  question :"Who invented Javascript?",
  choiceA : "Bjarne Stroustrup",
  choiceB : "Bill Gates",
  choiceC : "Brendan Eich",
  choiceD : "James Gosling",
},
{
  question :"A for loop needs an iterator, increament and?",
  choiceA : "condition",
  choiceB : "name",
  choiceC : "value",
  choiceD : "number",
}
];

var lastQuestionIndex = questions.length -1;
var runningQuestionIndex = 0;


function renderQuestions(){

//Removes explanation that was on start page.
explanation.innerHTML="";
 var q = questions[runningQuestionIndex];
 question.innerHTML = q.question;
 choiceA.innerHTML = q.choiceA;
 choiceB.innerHTML = q.choiceB;
 choiceC.innerHTML = q.choiceC;
 choiceD.innerHTML = q.choiceD;
 runningQuestionIndex++;
}

choiceA.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff; font-size:24px;");
choiceB.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff; font-size:24px;");
choiceC.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff;font-size:24px;");
choiceD.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff; font-size:24px;");

