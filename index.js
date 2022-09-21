const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const resetButton = document.getElementById("reset");
let HH = (MM = 0),
  SS = 1,
  myInterval;
// shows the time in two digits..
function showTime(time) {
  return time <= 9 ? "0" + time : time;
}
// Timer function to show time...
function timer() {
  if (SS == 60) {
    SS = 0;
    seconds.innerHTML = showTime(SS);
    minutes.innerHTML = showTime(++MM);
  } else if (MM == 60) {
    MM = 0;
    minutes.innerHTML = showTime(MM);
    hours.innerHTML = showTime(++HH);
  } else {
    seconds.innerHTML = showTime(SS++);
  }
}

// Reset the time...
const resetTime = () => {
  HH = MM = 0,SS = 1;
  hours.innerHTML = minutes.innerHTML = seconds.innerHTML = "00";
  clearInterval(myInterval);
  console.log("reset");
};
// Start timer...
const startTime = () => {
  console.log("started");
  myInterval = setInterval(timer, 1000);
};

// pause timer...
const pauseTime = () => {
  console.log("paused");
  clearInterval(myInterval);
};