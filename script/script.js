 window.addEventListener('DOMContentLoaded', function() {
  'use strict';
  //Timer
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

      return {timeRemaining, hours, minutes, seconds};
    }

    function updateClock() {
      let timer = getTimeRemaining();

      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;

      if(timer.timeRemaining <= 0) {
        clearInterval(setInterval(updateClock, 1000));
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
      }   
    }

    setInterval(updateClock, 1000)
    updateClock();

  }


  countTimer('12 september 2020');
  //Menu

  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
          menu = document.querySelector('menu'),
          closeBtn = document.querySelector('.close-btn'),
          menuItems = menu.querySelectorAll('ul>li'),
          menuLinks = menu.querySelectorAll('li>a[href^="#"]');
    
    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    menuLinks.forEach(item => item.addEventListener('click', event => {
      event.preventDefault();
      const linkID = item.getAttribute('href');
      document.querySelector(linkID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }));

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
  };

  toggleMenu();
  
  //scrollTo 
  const btnScrollToContent = document.querySelector('a[href="#service-block"]');
  btnScrollToContent.addEventListener('click', () => {
    event.preventDefault();
    const linkID = btnScrollToContent.getAttribute('href');
    document.querySelector(linkID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });

  //popup

  const togglePopu = () => {
    const popup = document.querySelector('.popup'),
          popupBtn = document.querySelectorAll('.popup-btn'),
          popupClose = document.querySelector('.popup-close'),
          popupContent = document.querySelector('.popup-content');
    
    popupContent.style.left = '0';
    let count = 0,
        popupInterval;

    const popupAnimate = () => {
      count++;
      popupInterval = requestAnimationFrame(popupAnimate);
      popupContent.style.left = count + '%';
      if (count === 40) {
        cancelAnimationFrame(popupInterval);
      }
    }
    
    popupBtn.forEach(elem => elem.addEventListener('click', () => {
      popup.style.display = 'block';
      if (document.documentElement.clientWidth > 768) {
        popupInterval = requestAnimationFrame(popupAnimate);
      } else {
        popupContent.removeAttribute('style');
      }
    }));
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
      count = 0;
    });
  };
















  togglePopu();





















 });