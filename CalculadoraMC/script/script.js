/*
1. Calculadora Básica
Objetivo: Criar uma calculadora simples para operações matemáticas básicas como soma, subtração, multiplicação e divisão.
O que aprender: Manipulação de eventos, operações matemáticas e manipulação do DOM.
*/
const sevenEl = document.querySelector('#seven');
const eightEl = document.querySelector('#eight');
const nineEl = document.querySelector('#nine');
const vezesEl = document.querySelector('#vezes');
const sixEl = document.querySelector('#six');
const fiveEl = document.querySelector('#five');
const fourEl = document.querySelector('#four');
const minusEl = document.querySelector('#minus');
const threeEl = document.querySelector('#three');
const twoEl = document.querySelector('#two');
const oneEl = document.querySelector('#one');
const plusEl = document.querySelector('#plus');
const zeroEl = document.querySelector('#zero');
const equalEl = document.querySelector('#equal');
const telaEl = document.querySelector('#tela_info');


clickSeven = (event) => {

    const telaSeven = `7`
    telaEl.insertAdjacentHTML('beforeend', telaSeven);
}
clickEight = (event) => {

    const telaEight = `8`
    telaEl.insertAdjacentHTML('beforeend', telaEight);
}
clickNine = (event) => {

    const telaNine = `9`
    telaEl.insertAdjacentHTML('beforeend', telaNine);
}
clickVezes = (event) => {

    const telaVezes = `X`
    telaEl.insertAdjacentHTML('beforeend', telaVezes);
}
clickSix = (event) => {

    const telaSix = `6`
    telaEl.insertAdjacentHTML('beforeend', telaSix);
}
clickFive = (event) => {

    const telaFive = `5`
    telaEl.insertAdjacentHTML('beforeend', telaFive);
}
clickFour = (event) => {

    const telaFour = `4`
    telaEl.insertAdjacentHTML('beforeend', telaFour);
}
clickMinus = (event) => {

    const telaMinus = `-`
    telaEl.insertAdjacentHTML('beforeend', telaMinus);
}
clickOne = (event) => {

    const telaOne = `1`
    telaEl.insertAdjacentHTML('beforeend', telaOne);
}
clickTwo = (event) => {

    const telaTwo = `2`
    telaEl.insertAdjacentHTML('beforeend', telaTwo);
}
clickThree = (event) => {

    const telaThree = `3`
    telaEl.insertAdjacentHTML('beforeend', telaThree);
}
clickPlus = (event) => {

    const telaPlus = `+`
    telaEl.insertAdjacentHTML('beforeend', telaPlus);
}
clickZero = (event) => {

    const telaZero = `0`
    telaEl.insertAdjacentHTML('beforeend', telaZero);
}



sevenEl.addEventListener('click', clickSeven);
eightEl.addEventListener('click', clickEight);
nineEl.addEventListener('click', clickNine);
vezesEl.addEventListener('click', clickVezes);
sixEl.addEventListener('click', clickSix);
fiveEl.addEventListener('click', clickFive);
fourEl.addEventListener('click', clickFour);
minusEl.addEventListener('click', clickMinus);
threeEl.addEventListener('click', clickThree);
twoEl.addEventListener('click', clickTwo);
oneEl.addEventListener('click', clickOne);
plusEl.addEventListener('click', clickPlus);
zeroEl.addEventListener('click', clickZero);
equalEl.addEventListener('click', clickEqual);







