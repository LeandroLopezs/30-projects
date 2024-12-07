function calcular() {
    resultado.textContent = "";
    resultado = document.getElementById('resultado');
    numero1 = document.getElementById('numero1').value;
    numero2 = document.getElementById('numero2').value;
    soma = document.getElementById('soma').value;
    let resultados = eval(`${numero1} ${soma} ${numero2}`);
    resultado.insertAdjacentHTML('beforeend', resultados);

}