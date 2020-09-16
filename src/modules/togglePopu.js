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

     if (target.classList.contains('popup-close')) {
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

 export default togglePopu;