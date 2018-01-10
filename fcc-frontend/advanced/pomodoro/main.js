let workMinutes = 25;
let breakMinutes = 5;
let currentMinutes = 0;
let currentSeconds = 0;
let pomoCount = 0;
let currentSession = '';

let running = false;
let onBreak = false;
let atWork = false;
let sessionActive = false;

const breakLength = $('#break-length');
const breakDown = $('#break-minus');
const breakUp = $('#break-plus');
const workLength = $('#work-length');
const workDown = $('#work-minus');
const workUp = $('#work-plus');
const start = $('#start');
const pause = $('#pause');
const refresh = $('#refresh');
const clockMinutes = $('#clock-min');
const clockSeconds = $('#clock-sec');

// Audio Files for Click Events
const audioWork = new Audio('sounds/work.m4r');
const audioBreak = new Audio('sounds/cupcake.m4r');
const audioClick = new Audio('sounds/click.mp3');
const audioFinish = new Audio('sounds/tugboat.mp3');


function modifiedSession(minutes) {
    currentMinutes = minutes;
    currentSeconds = 0;
    clockMinutes.text(currentMinutes);
    clockSeconds.text('00');
}

function pauseTimer() {
    pause.hide(50);
    start.show(50);
    running = false;
    toggleStatus();
    clearInterval(pomoCount);
}

function resetTimer() {
    if(!running) {
        start.show(50);
        pause.hide(50);
        running = false;
        onBreak = false;
        atWork = false;
        sessionActive = false;
        currentMinutes = 0;
        currentSeconds = 0;
        workMinutes = 25;
        breakMinutes = 5;
        clockMinutes.text(workMinutes);
        clockSeconds.text('00');
        workLength.text(workMinutes);
        breakLength.text(breakMinutes);
    }
}

function startTimer(minutes, seconds) {
    start.hide(50);
    pause.show(50);
    currentMinutes = minutes;
    currentSeconds = seconds;
    toggleStatus();
    pomoCount = setInterval( () => {
        sessionActive = true;
        running = true;
        if(currentSeconds > 0) {
            currentSeconds--;
            if(currentMinutes == 0 & currentSeconds == 0) {
                clearInterval(pomoCount);
                audioFinish.play();
                clockSeconds.text('00');
                pause.hide(50);
                start.show(50);
                sessionActive = false;
                running = false;
        } else if(currentSeconds < 10)
                clockSeconds.text(`0${currentSeconds}`);
            else
                clockSeconds.text(currentSeconds);
        } else {
            currentMinutes--;
            currentSeconds = 59;
            clockMinutes.text(currentMinutes);
            clockSeconds.text(currentSeconds);
        }
    }, 1000);
}

function toggleStatus() {
    breakDown.toggleClass('faded');
    breakUp.toggleClass('faded');
    workDown.toggleClass('faded');
    workUp.toggleClass('faded');
    refresh.toggleClass('faded');
    breakDown.toggleClass('available');
    breakUp.toggleClass('available');
    workDown.toggleClass('available');
    workUp.toggleClass('available');
    refresh.toggleClass('available');
}

var timeController = function(length, modifier, session) {
    audioClick.play();
    minutes = modifyTimes(parseInt(length.text()), modifier);
    if(sessionActive && session == currentSession)
        modifiedSession(minutes)
    length.text(minutes);
    return minutes;
}

var checkStatus = function() {
    if(!atWork && !sessionActive) {
        currentSession = 'work';
        audioWork.play();
        return 1;
    } else if(!onBreak && !sessionActive) {
        currentSession = 'break';
        audioBreak.play();
        return 2;
    } else if(sessionActive)
        return 3;
} 

var modifyTimes = function(number, modifier) {
    if(modifier === 'add') {
        number++;
        return number;
    } else if(modifier === 'subtract') {
        if(number > 1) {
            number--;
            return number;
        }
    }
    return number;
    console.log(`Error: modifyTimes can not function properly! \nModifier Passed: ${modifier} \nNumber Passed: ${number}`);  
}


$(document).ready(function() {
    pause.hide();
    
    pause.click(pauseTimer);
    refresh.click(resetTimer);

    breakDown.click( () => { if(!running) breakMinutes = timeController(breakLength, 'subtract', 'break'); });
    breakUp.click( () => { if(!running) breakMinutes = timeController(breakLength, 'add', 'break'); });
    workDown.click( () => { if(!running) workMinutes = timeController(workLength, 'subtract', 'work'); });
    workUp.click( () => { if(!running) workMinutes = timeController(workLength, 'add', 'work'); });

    start.click( () => {
        console.log(`Timer Active? ${running} \nWork session? ${atWork} \nBreak session? ${onBreak}`);
        switch(checkStatus()) {
            case 1:
                console.log(`Starting Work Session with ${workMinutes} minutes`);
                running = true;
                atWork = true;
                onBreak = false;
                startTimer(workMinutes, 0); 
                break;
            case 2:
                console.log(`Starting Break Sessions with ${breakMinutes} minutes`);
                running = true;
                onBreak = true;
                atWork = false;
                startTimer(breakMinutes, 0);
                break;
            case 3:
                running = true;
                startTimer(currentMinutes, currentSeconds);
                break;
        }
    });
});
