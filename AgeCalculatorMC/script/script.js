const data = document.getElementById('data');
const resposta = document.getElementById('resposta');


function calcularIdade() {

    const respostaValor = data.value;
    const age = getAge(respostaValor);
    resposta.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;

}

function getAge(respostaValor) {
    const currentDate = new Date();
    const birthdayDate = new Date(respostaValor);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
        age--;
    }
    return age;
}