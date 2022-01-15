/* main.js */

// no need to 'use strict' as it is implied in modules
// look up 'use strict' :) 

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

let $ = (selector) => document.querySelector(selector);


function _updateName() {
  const name = $('#name-input').value;
  $('#name-info').innerHTML = `<strong>Author:</strong>  ${name}`;
}

function _updateMajor() {
  const major = $('#major-input').value;
  $('#major-info').innerHTML = `<strong>Major:</strong>  ${major}`;
}

function update(){
  _updateName();
  _updateMajor();
}

export {update};