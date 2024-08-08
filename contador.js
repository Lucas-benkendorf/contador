const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondEL = document.getElementById("seconds");

const daysInput = document.getElementById("daysInput");
const addDaysBtn = document.getElementById("addDays");
const subtractDaysBtn = document.getElementById("subtractDays");

let happyday = new Date("22 Feb 2025");

function countdown() {
    const currentDate = new Date();
    const totalSeconds = (happyday - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(mins);
    secondEL.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function addDays() {
    const daysToAdd = parseInt(daysInput.value);
    if (!isNaN(daysToAdd)) {
        happyday.setDate(happyday.getDate() + daysToAdd);
        countdown();
    } else {
        alert("Por favor, insira um número válido de dias.");
    }
}

function subtractDays() {
    const daysToSubtract = parseInt(daysInput.value);
    if (!isNaN(daysToSubtract)) {
        happyday.setDate(happyday.getDate() - daysToSubtract);
        countdown();
    } else {
        alert("Por favor, insira um número válido de dias.");
    }
}

addDaysBtn.addEventListener("click", addDays);
subtractDaysBtn.addEventListener("click", subtractDays);

countdown();
setInterval(countdown, 1000);
