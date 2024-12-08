function Calcular() {

    numeros = document.getElementById('numeros');
    numeros.textContent = '';
    for (let i = 0; i < 101; i++) {
        numeros.insertAdjacentHTML('beforeend', `${i}, `);
    }
}