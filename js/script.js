'use strict';

function check(str) {
  if (typeof str !== 'string') {
    alert('Это не строка!');
  } 
  console.log(str.trim().substr(0, 30) + '...');
}


check(' dlfkmvlkdmfvlkdmfvkldmflvkmdflkvmaldkfvmlkdkfmvlkskdfmvblksdmfbklmsdfbklnfgkjbnfkjgbnskjfnbksjdfnbkjsnfgbkjsnfgbkjsfngkbjsnfbgkjn  ');



