const inputOne: HTMLInputElement = document.querySelector('#inputOne');
const inputTwo: HTMLInputElement = document.querySelector('#inputTwo');
const button = document.querySelector('#button');

const add = (valueOne: number, valueTwo: number): number => valueOne + valueTwo;

button.addEventListener('click', () => {
	const sum = add(Number(inputOne.value), Number(inputTwo.value));
	console.log(sum);
});