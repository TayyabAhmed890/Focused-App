// select elements
let time_space = document.getElementById('time')
let start_time = document.getElementById('time-start')
let stop_time = document.getElementById('time-stop')
let reset_time = document.getElementById('time-reset')

// timer logic

let data = sessionStorage.getItem("timer")
let totalSeconds = data
let timerID = null

// format time function
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

// update the display
function updateDisplay() {
    // 1 minute mein 60 seconds hote hain
    let minutes = Math.floor(totalSeconds / 60); 
    let seconds = totalSeconds % 60; // Bacha hua hissa seconds hoga

    time_space.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
}


updateDisplay()

// add event listners
// start
start_time.addEventListener("click",()=>{
    
    if (timerID !== null) return;
    
    timerID = setInterval(() => {
        totalSeconds++
        updateDisplay()
    }, 1000);
})

// stop
stop_time.addEventListener("click",()=>{
    
    if(totalSeconds > 0){
        sessionStorage.setItem("timer",totalSeconds)
    }
    clearInterval(timerID);
    
    timerID = null
})

// reset
reset_time.addEventListener("click",()=>{
    
    if(totalSeconds === 0) return;
    clearInterval(timerID)
    sessionStorage.removeItem("timer")
    totalSeconds = 0
    updateDisplay()
})


