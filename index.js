// Variables to store time values
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let interval;
let isRunning = false;

function start() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(updateTime, 10); // Update every 10 milliseconds
    }
}

function stop() {
    clearInterval(interval);
    isRunning = false;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('display').innerText = "00:00:00:00";
}

function updateTime() {
    milliseconds += 10;

    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    let formattedHours = hours < 10 ? `0${hours}` : hours;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    let formattedMilliseconds = milliseconds < 100 ? `0${milliseconds}` : milliseconds;

    document.getElementById('display').innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}
