//  Initially declaring all values = 0
let hr = 0;
let min = 0;
let sec = 0;
let milisec = 0;

//  declare variable to check timer state whether it should run or stop
let timer = false;

// start function
function start() {
    timer = true;
    // calling actual "stopWatch" function to start the timer
    stopWatch();
}

// stop function
function stop() {
    timer = false;
}

// stop function
function reset() {
    timer = false;

    // all values are reset to 0
    hr = 0;
    min = 0;
    sec = 0;
    milisec = 0;

    //  changes must be ""render/reflect"" on HTML also
    document.getElementById("milisec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";

}


// actual """STOPWATCH""" function
function stopWatch() {
    if (timer == true) {

        // in ""setTimeOut"", we are calling same function again & again in """10 milisecond (for milisecond timeInterval count)"""
        setTimeout("stopWatch()", 10);

        milisec = milisec + 1;

        if (milisec == 100) {
            sec = sec + 1;
            milisec = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 100) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        // hr, min, sec, milisec = all must be in two digit if they are less than number 10
        let strHour = hr;
        let strMin = min;
        let strSec = sec;
        let strMiliSec = milisec;

        if (hr < 10) {
            strHour = "0" + hr;
        }
        if (min < 10) {
            strMin = "0" + min;
        }
        if (sec < 10) {
            strSec = "0" + sec;
        }
        if (milisec < 10) {
            strMiliSec = "0" + milisec;
        }
        
        document.getElementById("hour").innerHTML = strHour;
        document.getElementById("min").innerHTML = strMin;
        document.getElementById("sec").innerHTML = strSec;
        document.getElementById("milisec").innerHTML = strMiliSec;
    }
}