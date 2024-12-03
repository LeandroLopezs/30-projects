
perimetro = document.getElementById('perimetro');
function calcular() {
    raio = document.getElementById('raio').value;
    perimetro.textContent = "Perimetro: ";
    result = 2 * Math.PI * raio;
    perimetro.insertAdjacentHTML('beforeend', result);

}

