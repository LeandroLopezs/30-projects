
const jogador = document.getElementById("score-player")
const computador = document.getElementById("score-computer")

function aleatorio() {
    const choices = Boolean(Math.round(Math.random()));

    if (choices == true) {
        const points = " |";
        jogador.insertAdjacentHTML('beforeend', points);

    }
    else {
        const points = " |";
        computador.insertAdjacentHTML('beforeend', points);
    }
}
