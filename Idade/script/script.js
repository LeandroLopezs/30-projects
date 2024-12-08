function verificar() {
    idade = document.getElementById('idade').value;
    resposta = document.getElementById('resposta');
    let num = parseInt(idade);
    if (num >= 18) {
        resposta.textContent = "Você e maior de idade!"
    }
    else {
        resposta.textContent = "Você e menor de idade!"
    }
}