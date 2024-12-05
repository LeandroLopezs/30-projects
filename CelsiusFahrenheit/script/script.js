farenheit = document.getElementById('farenheit');

function calcular() {
    celsius = document.getElementById('celsius').value
    farenheit.textContent = "Farenheit: "
    result = 9 / 5 * celsius + 32;
    farenheit.insertAdjacentHTML('beforeend', result);
} 