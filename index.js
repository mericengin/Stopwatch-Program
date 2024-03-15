const clockDisplay = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

startBtn.addEventListener('click', start);

function start() {

    if(!isRunning) {

        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 10);
        isRunning = true;

    }

}

stopBtn.addEventListener('click', stop);

function stop() {

    if(isRunning) {

        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;

    }

}

resetBtn.addEventListener('click', reset);

function reset() {

    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    clockDisplay.textContent = "00:00:00:00";

}

function updateDisplay() {

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliSeconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliSeconds = String(miliSeconds).padStart(2, "0");
    
    clockDisplay.textContent = `${hours}:${minutes}:${seconds}:${miliSeconds}`;

}