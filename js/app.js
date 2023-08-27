let intervalId;
let centiseconds = 0;
let seconds = 0;
let minutes = 60;
let hours = 0;

function updateDisplay() {
  document.getElementById("centiseconds").textContent = centiseconds.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
}

function startTimer() {
  intervalId = setInterval(function () {
    centiseconds--;
    if (centiseconds < 0) {
      centiseconds = 99;
      seconds--;
      if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
          minutes = 59;
          hours--;
          if (hours < 0) {
            clearInterval(intervalId);
            return;
          }
        }
      }
    }
    updateDisplay();
  }, 10);
}

function pauseTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  centiseconds = 0;
  seconds = 0;
  minutes = 60;
  hours = 0;
  updateDisplay();
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

updateDisplay();