
document.addEventListener("DOMContentLoaded", function() {
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  function secondRotation(seconds) {
      let degRotation = seconds * 6
      return degRotation
  }

  function minuteRotation(seconds) {
    let minutes = seconds / 60;
    let degRotation = minutes * 6;
    return degRotation;
  }

  function hourRotation(seconds) {
    let hours = seconds / 3600;
    let degRotation = hours * 30;
    return degRotation;
  }

  function tick() {
    setInterval(function() {
      seconds++;
      if (seconds === 60) {
        minutes++
        seconds = 0
      }
      if (minutes === 60) {
        hours++
        minutes = 0
      }
      if (hours === 12) {
        hours = 0
      }
      let degreesSeconds = secondRotation(seconds)
      document.getElementById("second").style.transform = `rotate(${degreesSeconds}deg)`
      let degreesMinutes = minuteRotation(seconds)
      document.getElementById("minute").style.transform = `rotate(${degreesMinutes}deg)`
    }, 1000)
  }

  setInterval(function() {
    console.log(seconds, minutes, hours);
  }, 10000)

  tick();


  
})