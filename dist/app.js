"use strict";
const inputOne = document.querySelector('#inputOne');
const inputTwo = document.querySelector('#inputTwo');
const button = document.querySelector('#button');
const add = (valueOne, valueTwo) => valueOne + valueTwo;
button.addEventListener('click', () => {
    const sum = add(Number(inputOne.value), Number(inputTwo.value));
    console.log(sum);
});
