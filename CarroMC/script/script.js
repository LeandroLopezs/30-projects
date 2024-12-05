result = document.getElementById('result');

function calcular() {
    result.textContent = ""
    let combustivel = parseInt(dinheiro / 5);
    var kilometros = parseInt(combustivel * 20);
    dinheiro = document.getElementById('dinheiro').value;
    resultado = `Você consegue comprar ${combustivel} litros de combustivel e andar ${kilometros} km`
    result.insertAdjacentHTML('beforeend', resultado)
}