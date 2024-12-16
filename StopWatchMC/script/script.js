const timerEl = document.getElementById('timer');
const startButtonEl = document.getElementById('start');
const stopButtonEl = document.getElementById('stop');
const resetButtonEl = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function start() {
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elapsedTime);

    }, 10);

    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;
}

function formatTime(elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor()
}