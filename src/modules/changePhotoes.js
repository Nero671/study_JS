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

export default changePhotoes;