//Naming the variables with HTML IDs
var timeEl = document.getElementById("time");
var questionEl = document.getElementById("question");
var explanationEl = document.getElementById("explanation");
var choiceAEl = document.getElementById("A");
var choiceBEL = document.getElementById("B");
var choiceCEL = document.getElementById("C");
var choiceDEL = document.getElementById("D");
var scoreDisplayEL = document.getElementById("score-display");
var scoreTextEL = document.getElementById("score-text");
var submitEl = document.getElementById("submit");
var resultEl = document.getElementById("result");
var formInitialsInputEl = document.getElementById("form-initials-input");
var initialsList =document.getElementById("initials-list");

//Hide highest scores, your score is and form elements
document.getElementById("hide-highest-scores").style.display="none";
document.getElementById("hide-form").style.display="none";

//Setting variables for questions array index, score, initials entrylist
var currentQuestionIndex = 0;
var score = 0;
var initials = [];
var preventMultipleClicks=0;
var theGameIsOver=false;

//Adding event listener to start button
document.getElementById("btnStart").addEventListener("click", onButtonStart);

//Function for what happens when the button starts. Calls setTime function.
function onButtonStart(){
  document.getElementById("hide-highest-scores").style.display="none";
  setTime();
}

//Define variable for setTime and skipTime functions. Time decrements from 60 seconds every second
var secondsLeft = 60;
var timerInterval;
//Function to decrement time by 1 second
function setTime() {
  //Call renderQuestions function
  renderQuestions();

  //Decrement time
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    //Stop clock at 0, call gameover function
    if(secondsLeft <= 0)  {
      clearInterval(timerInterval);
      gameOver();
      //Set timeEl to 0 so it doesn't go into minus time
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
    
    //When you start going through questions there should be no clicks
    preventMultipleClicks = 0;
    //Removes explanation that was on start page.
    explanation.innerHTML="";
    // Hides the  start button when questions appear
    btnStart.style.display="none";
    //CurrentQuestionIndex is a global variable that is incremented each time a question is answered (correctly or incorrectly)
    var currentQuestion = questions[currentQuestionIndex];
    //the variable questionEl is a reference to the html element for displaying the question .question is from the array called questions. 
    questionEl.innerHTML = currentQuestion.question;
    // Setting the question answer options. 
    choiceAEl.innerHTML = currentQuestion.choiceA;
    choiceBEL.innerHTML = currentQuestion.choiceB;
    choiceCEL.innerHTML = currentQuestion.choiceC;
    choiceDEL.innerHTML = currentQuestion.choiceD;
  
  }

  function checkAnswer(answer) {
    if (theGameIsOver === false) {
      //Hide highest scores list when checking answers so it looks better
      document.getElementById("hide-highest-scores").style.display="none";
    
      //Only check answers functionwhen no answer has been clicked for this question
      if (preventMultipleClicks === 0) {
        
          var theAnswerToTheQuestion = questions[currentQuestionIndex].answer;

          // Increment the question index for the next question.
          currentQuestionIndex++;
          //If the answer is correct, score increments, and shows both at top of screen and at gameOver()
          if(theAnswerToTheQuestion === answer) 
          {
              resultEl.innerHTML = "Correct!";
              score++;
              scoreDisplayEL.textContent = score;
              scoreTextEL.textContent = " " + score + "!";
          } 
          //Skip time decrements time by 5seconds in stead of the usual 1.
          else 
          {
              resultEl.innerHTML = "Wrong!";
              skipTime();
          }
          //While we still have questions, quiz keeps running. Sets time between questions
          if (currentQuestionIndex < questions.length) {
            var resultElTextInterval = setInterval(function() {
              resultEl.innerHTML="";
              renderQuestions();
              clearInterval(resultElTextInterval);
            }, 1000);
          }
    
          //If no questions are left gameOver function runs. Time interval is between the game ending and gameover function starting
          else {
            var resultElTextInterval = setInterval(function() {
              resultEl.innerHTML="";
              clearInterval(timerInterval);
              gameOver();
              clearInterval(resultElTextInterval);
            }, 1000);
          }
        }
        //Finish function with one click
        preventMultipleClicks = 1;
    }
  }
  
//Function to subtract 5 seconds when a question is answered incorrectly
function skipTime() {
  secondsLeft= secondsLeft - 5;
}

//So that text GAME OVER displays and goes to highest score entry
function gameOver() {
  theGameIsOver = true;
  resultEl.innerHTML="GAME OVER";

  //Ensures last question canbe answered
  currentQuestionIndex = questions.length + 1;

  //Show form so initials can be input and score is shown to user
  document.getElementById("hide-highest-scores").style.display="block";
  document.getElementById("hide-form").style.display="block";
  
  //Call init()
  init();
}
//Add event listener to form input and enable button when text is input
formInitialsInputEl.addEventListener("input", textInput);
function textInput() {
  if (formInitialsInputEl.value !== ""){
    submitEl.disabled = false;
  }
}

//Submit button event listener
submitEl.addEventListener("click", submit);

//When the submit button is clicked, user input shows in a list
function submit() {
  event.preventDefault();

  var userInput ="Initials: " + formInitialsInputEl.value.trim()  + "  -  " +" Score: " + score;

  initials.push(userInput);
  formInitialsInputEl.value= "";
  storeInitials();
  renderInitials();
  //Hide submit button so user doesnt submit again
  document.getElementById("hide-submit").style.display="none";
}

function getHighestScores() {
  
  //Change highest score link to blue when clicked
  document.getElementById("highest-scores-top").style.color ="blue";
  //Show highest scores list
  document.getElementById("hide-highest-scores").style.display="block";

  init();

}

function init() {
  // Get stored initials from localStorage
  // Parsing the JSON string to an object
  var storedInitials = JSON.parse(localStorage.getItem("initials"));

  // If initials were retrieved from localStorage, update the initials array to it
  if (storedInitials !== null) {
    initials = storedInitials;
  }

  // Render initials to the DOM
  renderInitials();
}

function renderInitials () {
  //List is a string
  initialsList.innerHTML ="";
   
  for(i=0; i< initials.length; i++) {
    var initial = initials[i];
    //Create a list element when initials stored
    var liElement = document.createElement("li");
    liElement.textContent = initial;
    liElement.setAttribute("data-index", i);
    liElement.setAttribute("class","list");
    initialsList.appendChild(liElement);
}
}

//Store initials in local storage - adds/updates initials object
function storeInitials() {
  localStorage.setItem("initials", JSON.stringify(initials));
}

//Add in event listener to Start again button and linking it to the start index.html page
document.getElementById("start-again").addEventListener("click", startagain);
function startagain() {
  window.location.href = "index.html";
}

//Clear saved initials/scores list by setting link list to 0
document.getElementById("clear-scores").addEventListener("click", clearInitialsScores);
function clearInitialsScores() {
  initials.length=0;
  storeInitials();
  renderInitials();

}

//Set attributes of choice elements
choiceAEl.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff; font-size:24px;");
choiceBEL.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff; font-size:24px;");
choiceCEL.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff; font-size:24px;");
choiceDEL.setAttribute("style", "margin-bottom: 10px; width:auto; text-align:center; color:white; background-color:#338bff; font-size:24px;");







