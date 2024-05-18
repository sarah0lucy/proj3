// variables
let workTittle = document.getElementById('study');
let breakTittle = document.getElementById('break');

let studyTime = 30; // minutes
let breakTime = 10; // minutes

let seconds = "00";
let timerInterval;
let isBreak = false;
let currentMinutes = studyTime;

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = studyTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
};

// start timer
function start() {
    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59;
    currentMinutes = studyTime - 1;

    // countdown function
    let timerFunction = () => {
        // update display
        document.getElementById('minutes').innerHTML = currentMinutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? "0" + seconds : seconds;

        if (seconds == 0) {
            if (currentMinutes == 0) {
                if (!isBreak) {
                    // start break
                    currentMinutes = breakTime;
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                } else {
                    // continue study
                    currentMinutes = studyTime;
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
                isBreak = !isBreak;
            } else {
                currentMinutes--;
            }
            seconds = 59;
        } else {
            seconds--;
        }
    };

    // start countdown
    timerInterval = setInterval(timerFunction, 1000); // 1000 = 1s
}


