dolar = document.getElementById("dolar");
real = document.getElementById("real");
let valor;

function convert() {
    valor = Number(real.value);


    valor = valor * 0.17;
    dolar.textContent = valor + "$";


}