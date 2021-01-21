//SetInterval  ==> repeatively running
//1000ms ==> 1 sec
// function interval(){
// console.log("It's Repeatively Running after One Second");
// }
// setInterval(interval,1000)


//To stop SetTimeInterval

// var count = 0;
// function timer(){
//     count++
//     console.log(count);
// }

// var interval = setInterval(timer,1000)

// setTimeout(function(){
//     clearInterval(interval)
// },5000)


//SetTimeOut   ==> only one time running
// function timeOut(){
//     console.log("It's runs only one time after 5 second")
// }
// setTimeout(timeOut,5000)


// function interval(){
//     console.log("hassan")
// }

// var intervalSet = setInterval(interval,1000);

// setTimeout(function(){
//     clearInterval(intervalSet)
// },5000)


//StopWatch

var min = 0;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec
        msec = 0
    }
    else if(sec>=60){
        min++
        sec = 0
        minHeading.innerHTML = min

    }
}

function start(){
    interval = setInterval(timer,10)
}

function stop(){
    clearInterval(interval);
}

function reset(){
    min = 0
    sec = 0
    msec = 0
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    stop()
}
