//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    let nome = document.querySelector('input').value;

    if(nome==''){
        alert('Por favor, insira um nome.');
    }
    else{amigos.push(nome);

    atualizarLista();
    }

    limparCampo();
}

function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}

function atualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos')

    listaAmigos.innerHTML = '';

    for( let i = 0; i<amigos.length; i++){

        let itemLista = document.createElement('li');

        itemLista.textContent = amigos[i];

        listaAmigos.appendChild(itemLista);

        console.log(amigos[i]);

    }


}

adicionarAmigo();

