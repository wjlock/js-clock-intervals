
document.addEventListener("DOMContentLoaded", function() {
  let seconds = 0;
  let minutes;
  let hours;

  function secondRotation(seconds) {
      let degRotation = seconds * 6
      return degRotation
  }

  function minuteRotation(seconds) {
    let minutes = seconds * 60;
    let degRotation = minutes * 6;
    return degRotation;
  }

  function hourRotation(seconds) {
    let hours = seconds * 3600;
    let degRotation = hours * 30;
    return degRotation;
  }

  function tick() {
    setInterval(function() {
      seconds++;
    }, 1000)
  }

  setInterval(function() {
    console.log(seconds);
  }, 10000)

  tick();
})