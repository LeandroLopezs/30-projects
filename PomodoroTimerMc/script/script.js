timer = document.getElementById('timer');
start = document.getElementById('start');
stop1 = document.getElementById('stop');
reset = document.getElementById('reset');

let interval;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0"): ${ seconds }
} `
}
