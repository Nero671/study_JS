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
        if (target.closest('li')) {
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

const btnScrollToContent = document.querySelector('a[href="#service-block"]');
btnScrollToContent.addEventListener('click', () => {
  event.preventDefault();
  const linkID = btnScrollToContent.getAttribute('href');
  document.querySelector(linkID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

export default toggleMenu;