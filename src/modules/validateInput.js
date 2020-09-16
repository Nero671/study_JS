const validateInput = () => {
  const calcBlock = document.querySelector('.calc-block');

  calcBlock.addEventListener('input', event => {
    if (event.target.matches('.calc-square') || event.target.matches('.calc-count') || event.target.matches('.calc-day')) {
      event.target.value = event.target.value.replace(/\D/g, '');
    }
  });
}

export default validateInput;