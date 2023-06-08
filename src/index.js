import validator from './validator.js';

console.log(validator);

const creditCardNumber = document.getElementById("number").value;

validator.isValid(creditCardNumber);