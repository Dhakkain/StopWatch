$(function() {

    // Time of stop watch with interval
    var timeUpdate;
    // Time of stop watch for min, sec, ms
    var times = [0, 0, 0];
    // Array for time lap
    var currentLaps = new Array();

    // Boolean for check Start/Stop click()
    var isStarted = false;

    // Button startstop
    $("#startstop")
        .button()
        .click(function() {
            // Click button "START"
            if ($(this).text() == "START") {
                $(this).html("<span>STOP</span>");

                if (isStarted == true) {
                    isStarted = false;
                    // Clear interval and time of stop watch
                    if (timeUpdate) clearInterval(timeUpdate);

                    // Set stop watch by 00:00:000
                    setStopWatch(0, 0, 0);

                    // Remove previous time laps by clear array from index 0
                    currentLaps.splice(0, currentLaps.length);
                    setLapTime(currentLaps);
                }
                // Get value of min, sec, ms from html
                times[2] = parseInt($("#min").html());
                times[1] = parseInt($("#sec").html());
                times[0] = parseInt($("#ms").html());

                // Update time of stop watch by array 
                updateTime(times[2], times[1], times[0]);
            } else if ($(this).text() == "STOP") {
                // Clear inteval - stop time 
                clearInterval(timeUpdate);
                isStarted = true;
                // Change "STOP" to "START"
                $(this).html("<span>START</span>");
            }
        });

    // Button laptime
    $("#laptime")
        .button()
        .click(function() {
            // Max time lap = 5
            if (currentLaps.length == 5) {
                // Remove element from array
                currentLaps.pop();
                // Add element to array index = 0
                currentLaps.splice(0, 0, times[2] + ":" + times[1] + "." + times[0]);
                // Set new lap time
                setLapTime(currentLaps);

            } else {
                // Add element to array index = 0
                currentLaps.splice(0, 0, times[2] + ":" + times[1] + "." + times[0]);
                setLapTime(currentLaps);
            }
        });

    // Update time in stop watch by interval - 25ms
    function updateTime(tempMin, tempSec, tempMs) {
        // Get current time
        var startTime = new Date();

        // Set time of stop watch 
        timeUpdate = setInterval(function() {
                // Time elapsed in ms
                var timeElapsed = new Date().getTime() - startTime.getTime();

                // ms 
                times[0] = timeElapsed + tempMs;
                if (times[0] > 1000) {
                    times[0] %= 1000;
                }

                // Seconds
                times[1] = parseInt(timeElapsed / 1000) + tempSec;
                if (times[1] > 60) {
                    times[1] %= 60;
                }

                // Minutes
                times[2] = parseInt(timeElapsed / 1000 / 60) + tempMin;
                if (times[2] > 60) {
                    times[2] %= 60;
                }

                // Set stop watch
                setStopWatch(times[2], times[1], times[0]);
            },10);

    }

    // Show min : sec . ms 
    function setStopWatch(min, sec, ms) {
        $("#min").html(min);
        $("#sec").html(sec);
        $("#ms").html(ms);
    }

    // Show lap time array 
    function setLapTime(currentTime) {
        var element = document.getElementById("times");
        element.innerText = "Czasy:";

        for (var i = 0; i <= currentTime.length; i++) {
            if (currentTime[i] != undefined) {
                $("#times").append("<ol>" + currentTime[i] + "</ol>");
            }
        }
    }
});