console.clear();
const h1DOM = document.getElementsByTagName('h1')[0];
const text = h1DOM.textContent;
console.log(h1DOM);
console.log(text);

const newText = text.trim().replace('rytas', 'diena');
console.log(newText);

const colors = ['green', 'yellow', 'red'];

for (const color of colors) {
    h1DOM.classList.add(color);
}

h1DOM.classList.remove('yellow');
h1DOM.classList.toggle('red');

console.log(h1DOM.classList);

h1DOM.classList.add('green');
h1DOM.classList.add('red');
const arTuri1 = h1DOM.classList.contains('cipolinas');
console.log(arTuri1);

const arTuri2 = h1DOM.classList.contains('green');
console.log(arTuri2);

const buttonDOM = document.querySelector('button');
// buttonDOM.addEventListener('click', labas);
// function labas() {
//     console.log('labas...');
// }
// console.log(buttonDOM);

buttonDOM.addEventListener('click', () => {
    console.log('labas...');
});

let score = 0;

const scoreDOM = document.querySelector('.score');
const [clickMe, minusDOM, plusDOM] = document.querySelectorAll('button');

minusDOM.addEventListener('click', () => {
    scoreDOM.innerText = --score;
})

plusDOM.addEventListener('click', () => {
    scoreDOM.innerText = ++score;
})