const tela_info = document.getElementById("tela_info");

function appendToDisplay(input) {

    tela_info.value += input;

}

function clearDisplay() {
    tela_info.value = "";
}

function calculate() {

    tela_info.value = eval(tela_info.value)

}






