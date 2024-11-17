


function atualizarRelogio() {
    const agora = new Date();
    const hora = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const horasHTML = `${hora}:${minutos}:${segundos}`;
    const horas = document.querySelector("#horas");
    horas.insertAdjacentHTML('beforeend', horasHTML)


}

clearInterval()
setInterval(atualizarRelogio, 1000);
atualizarRelogio();
locationreload();

setInterval(function () {
    window.location.reload();
}, 1000);
