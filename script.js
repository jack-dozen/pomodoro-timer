let state = "idle";
let timeLeft = 1500;
let timer = null;
let mode = "focus";

const displayTimer = document.getElementById("timer");

function updateDisplay(){
    let minutes = Math.floor(timeLeft/60);
    let seconds = timeLeft % 60;

    displayTimer.textContent = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
}

function startTimer() {
    if (state != "running"){
        timer = setInterval(function(){
            if (timeLeft != 0){
                timeLeft--;
            }else{
                clearInterval(timer);
                switchMode();
                state = "idle";
            }
            updateDisplay();
        }, 1000);
        state = "running";
    }
}

function pauseTimer(){
    clearInterval(timer);
    state = "pause";
}

function resetTimer(){
    clearInterval(timer);
    state = "idle";
    timeLeft = 1500;
    updateDisplay();
}

document.getElementById("start-btn").addEventListener("click", function() {
    startTimer();
});

document.getElementById("pause-btn").addEventListener("click", function() {
    pauseTimer();
});

document.getElementById("reset-btn").addEventListener("click", function() {
    resetTimer();
});

function switchMode(){
    mode =  (mode == "focus") ? "rest" : "focus";
    timeLeft = (mode == "focus") ? 1500 : 300;
}
