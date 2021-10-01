const secondsEl = document.getElementById('seconds');
const minutesEl = document.getElementById('minutes');
const hoursEl = document.getElementById('hours');
const daysEl = document.getElementById('days');

const birthday = '1 Jan 2022';

function countDown() {
    const currentDate = new Date();
    const birthdayDate = new Date(birthday);

    const totalSeconds = Math.floor((birthdayDate - currentDate) / 1000);
    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 86400);

    secondsEl.innerHTML = seconds;
    minutesEl.innerHTML = minutes;
    hoursEl.innerHTML = hours;
    daysEl.innerHTML = days;
};

countDown();

setInterval(countDown, 1000);