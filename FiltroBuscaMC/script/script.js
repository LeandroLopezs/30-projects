/*
Filtro de Busca
Objetivo: Criar um campo de busca para filtrar itens de uma lista.
O que aprender: Manipulação de arrays, eventos do teclado e filtros (filter).
*/

document.getElementById('search').addEventListener('input',
    function () {

        let filter = this.value.toLowerCase();
        let items = document.querySelectorAll('#list li');

        items.forEach(function (item) {

            let text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.computedStyleMap.display = '';
            } else {
                item.style.display = 'none';
            }

        })

    }


)