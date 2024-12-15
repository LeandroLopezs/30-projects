function jogarDado() {
    dado = document.getElementById('dado');
    valor = Math.floor(Math.random() * 6) + 1;
    if (valor == 1) {
        dado.textContent = "⚀"
    }
    else if (valor == 2) {
        dado.textContent = "⚁"
    }
    else if (valor == 3) {
        dado.textContent = "⚂"
    }
    else if (valor == 4) {
        dado.textContent = "⚃"
    }
    else if (valor == 5) {
        dado.textContent = "⚄"
    }
    else {
        dado.textContent = "⚅"
    }
}