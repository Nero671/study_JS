'use strict';

function check(str) {
  if (typeof str !== 'string') {
    alert('Это не строка!');
  } else if(str.length > 30) {
     str = str.substr(0, 30) + '...';
  }
  console.log(str.trim());
}


check(' dlfkmvlkdmfvlkdmfvkldskldmvklsdmvlkdsmfvlkdmflvkdmflvkdmf');



