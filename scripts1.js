const salvar = document.getElementById("button");

if (salvar) {
    salvar.addEventListener("click", adicaoitem);
}

function adicaoitem(evento) {
    evento.preventDefault(); // Impede o refresh da página

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
    const textoItem = document.getElementById("pesquisa_alimentos").value;
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

    const dataadicao = document.createElement('p');
    dataadicao.classList.add('data');
    const hoje = new Date();
    dataadicao.textContent = `Adicionado em: ${hoje.toLocaleDateString()} às ${hoje.toLocaleTimeString()}`;
    novoitem.appendChild(dataadicao);

    document.querySelector('.itens-comprar').appendChild(novoitem);

    // Limpa o valor do input após adicionar o item
    document.getElementById("pesquisa_alimentos").value = '';
}
