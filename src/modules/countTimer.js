function countTimer(deadline) {
  let timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

  function getTimeRemaining() {
    let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor(timeRemaining / 60 / 60);
    // day = Math.floor(timeRemaining / 60 / 60 / 24);

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    return {
      timeRemaining,
      hours,
      minutes,
      seconds
    };
  }

  function updateClock() {
    let timer = getTimeRemaining();

    timerHours.textContent = timer.hours;
    timerMinutes.textContent = timer.minutes;
    timerSeconds.textContent = timer.seconds;

    if (timer.timeRemaining <= 0) {
      clearInterval(setInterval(updateClock, 1000));
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  }

  setInterval(updateClock, 1000)
  updateClock();
}

export default countTimer;