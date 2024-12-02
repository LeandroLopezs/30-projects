
/*
9. Contador de Cliques
Objetivo: Contar quantas vezes um botão foi clicado.
O que aprender: Manipulação de eventos de clique e variáveis.
*/

numero = document.getElementById('numero');
let contador = 0;

function adicionar() {
    contador++;
    numero.textContent = contador;
}
