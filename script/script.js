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
          menu = document.querySelector('menu');
    
    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    document.body.addEventListener('click', event => {
      let target = event.target;

      if (target.closest('.menu')) {
        handlerMenu();
      } else if (!target.closest('menu') && menu.classList.contains('active-menu')) {
        handlerMenu();
      } else if (target.closest('menu')) {
        if (target.classList.contains('close-btn')) {
          handlerMenu();
        } else {
          if(target.closest('li')) {
            target = target.closest('li');

            event.preventDefault();
            const menuLink = target.querySelector('a[href^="#"]'),
                  linkID = menuLink.getAttribute('href');
            console.log(menuLink);
            document.querySelector(linkID).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            handlerMenu();
          }
        }
      }
    });
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
    };
    
    popupBtn.forEach(elem => elem.addEventListener('click', () => {
      popup.style.display = 'block';
      if (document.documentElement.clientWidth > 768) {
        popupInterval = requestAnimationFrame(popupAnimate);
      } else {
        popupContent.removeAttribute('style');
      }
    }));

    popup.addEventListener('click', (event) => {
      let target = event.target;

      if(target.classList.contains('popup-close')) {
        popup.style.display = 'none';
        count = 0;
      } else {
        target = target.closest('.popup-content');

        if (!target) {
          popup.style.display = 'none';
          count = 0;
        }
      }
    });
  };

  togglePopu();

  //Create Tabs
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');
    
    const toggleTabContent = (index) => {
      for(let i = 0; i < tabContent.length; i++){
        if(index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tabContent[i].classList.add('d-none');
          tab[i].classList.remove('active');
        }
      }
    };

    tabHeader.addEventListener('click', event => {
      let target = event.target;
      target = target.closest('.service-header-tab');
      if (target.classList.contains('service-header-tab')) {
        tab.forEach((item, i) => {
          if(item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };

  tabs();

  //Slider
  const slider = () => {

    const slide = document.querySelectorAll('.portfolio-item'),
          btn = document.querySelectorAll('.portfolio-btn'),
          slider = document.querySelector('.portfolio-content');
    
    let currentSlide = 0,
        interval;

    const createDots = () => {
      const portfolioDots = document.querySelector('.portfolio-dots');

      for (let i = 0; i < slide.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        portfolioDots.append(dot);
      }
    };

    createDots();

    const dot = document.querySelectorAll('.dot');

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if(currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time)
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

   

    slider.addEventListener('click', event => {
      event.preventDefault();
      let target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      
      if(target.matches('#arrow-right')) {
        currentSlide++;
      } else if(target.matches('#arrow-left')) {
        currentSlide--;
      } else if(target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if(elem === target) {
            currentSlide = index;
          }
        });
      }

      if(currentSlide >= slide.length) {
        currentSlide = 0;
      };

      if(currentSlide < 0) {
        currentSlide = slide.length -1;
      }


      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', event => {
      if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', event => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        startSlide();
      }
    });

    startSlide(1500);
  };


  slider();

  //Change photoes

  const changePhotoes = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');

    commandPhoto.forEach(item => {
      item.addEventListener('mouseover', event => {
        [event.target.src, event.target.dataset.img] = [event.target.dataset.img, event.target.src];
      });
    });

    commandPhoto.forEach(item => {
      item.addEventListener('mouseout', event => {
        [event.target.src, event.target.dataset.img] = [event.target.dataset.img, event.target.src];
      });
    });
      
  };

  changePhotoes();

  const validateInput = () => {
    const calcBlock = document.querySelector('.calc-block');

    calcBlock.addEventListener('input', event => {
      if (event.target.matches('.calc-square') || event.target.matches('.calc-count') || event.target.matches('.calc-day')) {
        event.target.value = event.target.value.replace(/\D/g, '');
      }
    });
  }

  validateInput();




































 });