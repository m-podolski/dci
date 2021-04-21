'use strict';

function change() {
  console.log(window.document.getElementById('main'));

  window.document.getElementById('main').outerHTML =
    '<h1 id=\'main\'> Hi this is new text from Js 😎</h1>';
  let headerText = window.document.getElementById('main');
  console.log(headerText);
  headerText.style.backgroundColor = 'orange';
}

function multiply() {
  let userNum = document.querySelector('#num').value;
  let userNum2 = document.querySelector('#num2').value;
  let resultText = userNum * userNum2;

  document.querySelector('.result').innerHTML = resultText;
}
