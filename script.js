//Naming time variable to write time to the page
var timeEl = document.getElementById("time");


//Commu
document.getElementById("btnStart").addEventListener("click", setTime);


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
    
}