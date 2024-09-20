document.addEventListener("DOMContentLoaded", function() {
    const salvar = document.getElementById("button");

    if (salvar) {
        salvar.addEventListener("click", adicaoitem);
    }

    function adicaoitem(evento) {
        evento.preventDefault(); // Impede o refresh da página

        const textoItem = document.getElementById("pesquisa_alimentos").value;
        if (textoItem.trim() === "") {
            return; // Não adiciona item se o campo estiver vazio
        }

        const novoitem = document.createElement('li');
        novoitem.classList.add('item1');

        const jparte1 = document.createElement('div');
        jparte1.classList.add('parte1');
        novoitem.appendChild(jparte1);

        const jp1p1 = document.createElement('div');
        jp1p1.classList.add('p1p1');
        jparte1.appendChild(jp1p1);

        const inputcheckbox = document.createElement('input');
        inputcheckbox.type = 'checkbox';
        inputcheckbox.classList.add('caixinha');
        jp1p1.appendChild(inputcheckbox);

        const labelcheck = document.createElement('label');
        labelcheck.textContent = textoItem;
        jp1p1.appendChild(labelcheck);

        const iconespt2 = document.createElement('div');
        iconespt2.classList.add('icones');
        jparte1.appendChild(iconespt2);

        const iconelixeira = document.createElement('button');
        iconelixeira.classList.add('buttonicon');
        iconespt2.appendChild(iconelixeira);

        const iconDelete = document.createElement('img');
        iconDelete.src = 'assets/Excluir.svg';
        iconDelete.alt = 'Icone de lixeira';
        iconelixeira.appendChild(iconDelete);

        const iconeedicao = document.createElement('button');
        iconeedicao.classList.add('buttonicon');
        iconespt2.appendChild(iconeedicao);

        const iconEdit = document.createElement('img');
        iconEdit.src = 'assets/Edição.svg';
        iconEdit.alt = 'Icone de edição';
        iconeedicao.appendChild(iconEdit);

        const hoje = new Date();
        const opcoesDia = { weekday: 'long' };
        const opcoesData = { day: 'numeric', month: 'numeric', year: 'numeric' };
        const diaFormatado = hoje.toLocaleDateString('pt-BR', opcoesDia);
        const dataFormatada = hoje.toLocaleDateString('pt-BR', opcoesData);
        const horaFormatada = hoje.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        const dataadicao = document.createElement('p');
        dataadicao.classList.add('data');
        dataadicao.textContent = `${diaFormatado} (${dataFormatada}) às ${horaFormatada}`;
        novoitem.appendChild(dataadicao);

        document.querySelector('.itens-comprar').appendChild(novoitem);

        const mensagemVazia = document.getElementById("mensagem_lista_vazia");
        if (mensagemVazia) {
            mensagemVazia.style.display = 'none'; // Esconde a mensagem quando há itens
        }

        document.getElementById("pesquisa_alimentos").value = '';

        // Adiciona o evento para mover o item para a lista de comprados
        inputcheckbox.addEventListener('change', function() {
            if (inputcheckbox.checked) {
                moveParaComprados(novoitem, labelcheck);
            }
        });

        // Adiciona eventos para excluir e editar
        iconelixeira.addEventListener('click', function() {
            excluirItem(novoitem);
        });

        iconeedicao.addEventListener('click', function() {
            editarItem(labelcheck);
        });
    }

    function moveParaComprados(item, label) {
        const listaComprados = document.querySelector('.itens-comprados');

        // Adiciona o item na lista de comprados
        listaComprados.appendChild(item);

        // Risca o item
        label.classList.add('riscado');

        // Mostra o título "Comprado" apenas se houver itens
        const tituloComprado = document.querySelector('.lista-comprado .titulo');
        tituloComprado.style.display = 'block'; // Mostra o título
    }

    function excluirItem(item) {
        const listaComprados = document.querySelector('.itens-comprados');
        item.remove();

        // Verifica se a lista de comprados está vazia e esconde o título
        if (listaComprados.children.length === 0) {
            const tituloComprado = document.querySelector('.lista-comprado .titulo');
            tituloComprado.style.display = 'none'; // Esconde o título se estiver vazio
        }

        // Verifica se a lista de compras está vazia
        const listaCompras = document.querySelector('.itens-comprar');
        const itensCompras = listaCompras.querySelectorAll('li'); // Seleciona todos os itens da lista de compras
        if (itensCompras.length === 0) {
            const mensagemVazia = document.getElementById("mensagem_lista_vazia");
            if (mensagemVazia) {
                mensagemVazia.style.display = 'block'; // Mostra a mensagem quando a lista está vazia
            }
        }
    }

    function editarItem(label) {
        const novoTexto = prompt("Edite o item:", label.textContent);
        if (novoTexto) {
            label.textContent = novoTexto;
        }
    }
});