result = document.getElementById('result');


function calcular() {
    billAmount = document.getElementById('billAmount').value;
    tipPercentage = document.getElementById('tipPercentage').value;
    conta = billAmount * (1 + tipPercentage / 100);
    result.innerText = ('beforeend', conta);


}