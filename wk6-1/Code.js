function blastofftimerV1() {
    console.log("blastoffTimerV1() started");
    var countdownTimer = 50;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 5000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 10000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 15000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 20000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 25000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 30000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 35000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 40000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 45000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
    }, 50000)
}


function blastoffTimerV2() {
    //variables
    var countdownTimer = 50;
    var halfCDT = countdownTimer / 2;
    var countdownDelay = 5000;
    var countdownChange = 5;
    var numPoints = 10;

    //loop
    for (var i = 0; i <= numPoints; i++) {
        setTimeout(function () {
            console.log(countdownTimer);
            if (countdownTimer == 0) {
                document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
            } else if (countdownTimer < halfCDT) {
                document.getElementById("countdownDisplay").innerHTML =
                    "Warning Less than % way to launch, time left = " + countdownTimer;
            } else {
                document.getElementById("countdownDisplay").innerHTML = countdownTimer;
            }
            countdownTimer = countdownTimer - countdownChange;
        }, countdownDelay * i)

    }
}

function start(){
    console.log("start() function started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

}

function stop(){
    console.log("stop() function started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;

}