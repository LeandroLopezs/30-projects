/*3. Jogo de Adivinhação
Objetivo: O usuário tenta adivinhar um número gerado aleatoriamente pelo programa.
O que aprender: Estruturas condicionais (if/else), laços de repetição e geração de números aleatórios com Math.random.*/

const textoNumero = document.getElementById("texto-numero");
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let tentativa = 0;

function adivinharNumero() {

    tentativa++;
    const palpite = document.getElementById("number").value;

    if (palpite === numeroAleatorio) {
        const textoNumeros = `Parabéns! Você advinhou o número em  ${tentativa} tentativas.`;
        textoNumero.insertAdjacentHTML('beforeend', textoNumeros);
    } else if (palpite < numeroAleatorio) {
        const textoNumeros = `Tente um numero maior`;
        textoNumero.insertAdjacentHTML('beforeend', textoNumeros);
    } else if (palpite > numeroAleatorio) {
        const textoNumeros = `Tente um numero menor`;
        textoNumero.insertAdjacentHTML('beforeend', textoNumeros);

    }

}

