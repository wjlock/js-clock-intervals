
document.addEventListener("DOMContentLoaded", function() {
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
    console.log('tick');
  }
  setInterval(tick, 1000)
})