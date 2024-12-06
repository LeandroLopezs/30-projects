/*Variáveis e tipos de dados: Escreva um programa que declare duas variáveis, “nome” e “idade”, e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”.*/

function enviar() {
    nome = document.getElementById('nome').value;
    idade = document.getElementById('idade').value;
    texto = document.getElementById('texto');
    texto.textContent = `Seu nome e ${nome} e você tem ${idade} anos de idade`
}