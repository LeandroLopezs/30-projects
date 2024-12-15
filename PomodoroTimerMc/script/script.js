timerEl = document.getElementById('timer');
startEL = document.getElementById('start');
stopEl = document.getElementById('stop');
resetEl = document.getElementById('reset');

let interval;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}: ${seconds
        .toString()
        .padStart(2, "0")}`;

    timerEl.innerHTML = formattedTime;
}

function start() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}
function stop() {
    clearInterval(interval);
}
function reset() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

