var timerDisplay = document.getElementById("timer-display");
var startButton = document.getElementById("start-button");
var stopButton = document.getElementById("stop-button");
var resetButton = document.getElementById("reset-button");
var setButton = document.getElementById("set-button");
var durationInput = document.getElementById("duration-input");
var countdownElement = document.getElementById("countdown");
var endSoundElement = document.getElementById("endSound");

var countdown;
var isRunning = false;
function startCountdown() {
    var countdown = parseInt(countdownElement.textContent);
}

function startTimer(duration) {
    if (!isRunning) {
        isRunning = true;
        var timer = duration;
        var hours, minutes, seconds;

        countdown = setInterval(function() {
            hours = Math.floor(timer / 3600);
            minutes = Math.floor((timer % 3600) / 60);
            seconds = Math.floor(timer % 60);

            timerDisplay.textContent = formatTime(hours, minutes, seconds);

            if (timer-- <= 0) {
                stopTimer();
                timerDisplay.textContent = "Time's up!";
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
    endSoundElement.play();
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    timerDisplay.textContent = "00:00:00";
    durationInput.value = "";
}

function formatTime(hours, minutes, seconds) {
    return (
        (hours < 10 ? "0" + hours : hours) +
        ":" +
        (minutes < 10 ? "0" + minutes : minutes) +
        ":" +
        (seconds < 10 ? "0" + seconds : seconds)
    );
}
function showMessage() {
   
    alert("Time's up! Countdown finished.");
}

startButton.addEventListener("click", function() {
    var duration = parseInt(durationInput.value);
    if (!isNaN(duration) && duration > 0) {
        startTimer(duration);
    }
});

stopButton.addEventListener("click", stopTimer);

resetButton.addEventListener("click", resetTimer);

setButton.addEventListener("click", function() {
    var duration = parseInt(durationInput.value);
    if (!isNaN(duration) && duration > 0) {
        durationInput.value = ""; 
        timerDisplay.textContent = formatTime(Math.floor(duration / 3600), Math.floor((duration % 3600) / 60), Math.floor(duration % 60));
    }
})
