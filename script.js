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
var result = document.getElementById("result");

document.getElementById("btnStart").addEventListener("click", onButtonStart);
function onButtonStart(){
  setTime();
}

var secondsLeft = 120;

//Function to decrement time
function setTime() {
  renderQuestions();
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
     
    }

  }, 1000);
}


//Function to subtract 5 seconds when a question is answered incorrectly
function skipTime() {
    secondsLeft= secondsLeft - 5;
    
}

//Quiz questions array
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
  question :"In the array var zooAnimals = [\"Zebra\", \"Rhino\", \"Giraffe\", \"Owl\"]; Which animal is in index 2?",
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
  question :"A for loop needs an iterator, increament and?",
  choiceA : "condition",
  choiceB : "name",
  choiceC : "value",
  choiceD : "number",
  answer : "C"
}
];

var currentQuestionIndex = 0;


function renderQuestions(){
  //Removes explanation that was on start page.
  explanation.innerHTML="";
  // Hide the button
  btnStart.style.display="none";

  // CurrentQuestionIndex is a global variable that is incremented each time
  // a question is answered (correctly or incorrectly)
  var currentQuestion = questions[currentQuestionIndex];
  
  //the variable question is a reference to the html element for displaying the question. 
  question.innerHTML = currentQuestion.question;

  // Setting the question answer options. 
  choiceA.innerHTML = currentQuestion.choiceA;
  choiceB.innerHTML = currentQuestion.choiceB;
  choiceC.innerHTML = currentQuestion.choiceC;
  choiceD.innerHTML = currentQuestion.choiceD;

  // Increment the question index for the next question.
  currentQuestionIndex++;
}

choiceA.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff; font-size:24px;");
choiceB.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff; font-size:24px;");
choiceC.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff;font-size:24px;");
choiceD.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff; font-size:24px;");


function checkAnswer(answer) {
  var questionThatWasAsked = questions[currentQuestionIndex - 1].question;
  var theAnswerToTheQuestion = questions[currentQuestionIndex - 1].answer;
  
  if(theAnswerToTheQuestion === answer) {
      result.innerHTML = "Correct!";
    }else {
      result.innerHTML = "Wrong!";
      skipTime();
    }
    var resultTextInterval = setInterval(function() {
      result.innerHTML="";
      renderQuestions();
      clearInterval(resultTextInterval);
    }, 2000);

  
}


