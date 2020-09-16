const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
    forms = document.querySelectorAll('form'),
    statusMessage = document.createElement('div');

  statusMessage.style.cssText = 'font-size: 2rem; color: #fff';

  forms.forEach(item => {
    item.addEventListener('input', event => {
      if (event.target.matches('.form-phone')) {
        event.target.value = event.target.value.replace(/^[^+\d]*(\+|\d)|\D/g, '$1');
      } else if (event.target.matches('.mess') || event.target.matches('input[name="user_name"]')) {
        event.target.value = event.target.value.replace(/[^А-ЯЁа-яё\s]/, '');
      }
    });
  });


  const createAnimationStyle = () => {
    const style = document.createElement('style');
    style.textContent = `
			.sk-rotating-plane {
				width: 2rem;
				height: 2rem;
				margin: auto;
				margin-top: 10px;
				background-color: #19b5fe;
				border-radius: 100%;
        animation: sk-spinner-pulse 1.0s infinite ease-in-out;
			}
			@keyframes sk-spinner-pulse {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1.0);
          opacity: 0;
        }
      }
			`;
    document.head.appendChild(style);
  };


  const postData = formData => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    body: formData
  });



  forms.forEach(item => {
    item.addEventListener('submit', event => {
      event.preventDefault();
      item.appendChild(statusMessage);
      createAnimationStyle();
      statusMessage.textContent = '';
      statusMessage.classList.add('sk-rotating-plane');
      const formData = new FormData(item);

      postData(formData).then(response => {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        }
        statusMessage.classList.remove('sk-rotating-plane');
        statusMessage.textContent = successMessage;
        setTimeout(() => {
          statusMessage.remove();
        }, 5000)
      }).catch(error => {
        statusMessage.classList.remove('sk-rotating-plane');
        statusMessage.textContent = errorMessage;
        console.error(error);
        setTimeout(() => {
          statusMessage.remove();
        }, 5000)
      });

      const inputs = item.querySelectorAll('input');
      inputs.forEach(item => {
        item.value = '';
      });
    });
  });

};

export default sendForm;