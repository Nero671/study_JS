const country = document.getElementById('country');
const optionCountry = country.querySelectorAll('option');
const city = document.getElementById('city');
const result = document.querySelector('.result');


const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Челябинск'],
  uk:  ['Киев', 'Львов', 'Одесса'],
  bel: ['Минск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Осака', 'Иокогама']
};

const chooseCity = function () {
  city.style.display = 'inline-block';
  city.textContent = '';
  cityArr[country.value].forEach((item) => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    city.append(option);
  }) 
}

const showCity = () => {
  const optionCity = city.querySelectorAll('option');
  result.textContent = `${optionCountry[country.selectedIndex].textContent} ${optionCity[city.selectedIndex].textContent}`;
}


country.addEventListener('change', chooseCity);
city.addEventListener('change', showCity);



