'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise/auto';

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('append')) {
      return;
    }
    Object.defineProperty(item, 'append', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.appendChild(docFrag);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopu from './modules/togglePopu';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhotoes from './modules/changePhotoes';
import validateInput from './modules/validateInput';
import calc from './modules/calc';
import sendForm from './modules/sendForm';



//Timer



countTimer('12 september 2020');
//Menu



toggleMenu();

//scrollTo 


//popup


togglePopu();

//Create Tabs


tabs();

//Slider


slider();

//Change photoes


changePhotoes();



validateInput();

//Calculate && animateTotal


calc(100);

//send-ajax-form


sendForm();