const colors1 = ['red', 'rgb(134, 0, 0)', 'rgb(134, 0, 0)'];
const colors2 = ['rgb(121, 121, 0)', 'yellow', 'rgb(121, 121, 0)'];
const colors3 = ['rgb(0, 99, 0)', 'rgb(0, 99, 0)', 'rgba(5, 249, 5, 0.861)'];
let index = 0;
let index2 = 0;
let index3 = 0;



function mudaCor() {

    let red = document.getElementById('vermelho');
    let green = document.getElementById('verde');
    let yellow = document.getElementById('amarelo');
    red.style.backgroundColor = colors1[index];
    index = (index + 1) % colors1.length;
    yellow.style.backgroundColor = colors2[index2];
    index2 = (index2 + 1) % colors2.length;
    green.style.backgroundColor = colors3[index3];
    index3 = (index3 + 1) % colors3.length;

}
