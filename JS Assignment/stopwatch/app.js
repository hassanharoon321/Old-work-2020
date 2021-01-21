var ms = 0;
var s = 0;
var m = 0;

var timer;

var stopwatchEl = document.querySelector(".stopwatch");
var lapsContainer = document.querySelector(".laps");

function start(){
    if(!timer){
        timer = setInterval(run,10);
    }
}

function run(){
    stopwatchEl.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) +  ":" + (ms<10 ? "0" + ms:ms);
    ms++;
    if(ms == 100){
        ms=0;
        s++;
    } 
    if(s==60){
        s=0;
        m++
    }
}

function pause(){
    clearInterval(timer);
    timer = false
}

function stop(){
    clearInterval(timer);
    timer = false;
    ms =0;
    m =0;
    s=0;
    stopwatchEl.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) +  ":" + (ms<10 ? "0" + ms:ms);
}

function getTimer(){
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) +  ":" + (ms<10 ? "0" + ms:ms);
}

function laps(){
    if(timer){
        var li = document.createElement("li");
        li.innerText = getTimer();
        lapsContainer.appendChild(li)
    }
}

function resetLaps(){
    lapsContainer.innerHTML = "";
}