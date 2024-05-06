var number_html = document.getElementById("number");
var start_btn = document.getElementById("start_btn");
var user_input = document.getElementById("user_input");
var result = document.getElementById("result");
var container= document.getElementById("container");
var quick= document.getElementById("quick");

var runningNumber = 0;
var interval;

function start() {
  if (user_input.value) {
    interval = setInterval(function () {
      if (runningNumber >= 1000) {
        clearInterval(interval);
        runningNumber = 0;
        number_html.innerText = runningNumber;
        result.innerText = "You are late";
        start_btn.disabled = false;
      } else {
        runningNumber++;
        number_html.innerText = runningNumber;
      }
    }, 100);
    start_btn.disabled = true;
  } else {
    alert('PLEASE ENTER YOUR NUMBER');
    
  }
}
function stop() {
    result.innerText=(user_input.value);
    result.innerText=(runningNumber);
    clearInterval(interval);
    if (user_input.value == runningNumber) {
      result.innerText = "You Win";
      container.style.background="white"
      number.style.color="black"
      quick.style.color="black"
      result.style.color="black"
    } else {
      result.innerText = "You Loss";
      container.style.background="black"
      number.style.color="lime"
      quick.style.color="lime"
      result.style.color="lime"
    }
    runningNumber = 0;
    number_html.innerText = 0;
    start_btn.disabled = false;
  }