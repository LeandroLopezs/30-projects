/*
4. Lista de Tarefas (To-Do List)
Objetivo: Criar uma lista onde o usuário pode adicionar, marcar como concluídas e excluir tarefas.
O que aprender: Manipulação do DOM, uso de arrays para armazenar dados e eventos do teclado/mouse.
*/



function addToDo() {
    myUl = document.getElementById("myUl");
    myInput = document.getElementById("myInput");
    const textoLista = `<br><input type="checkbox">${myInput.value}</input>`
    myUl.insertAdjacentHTML('beforeend', textoLista);
    
}
