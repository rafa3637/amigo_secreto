//array para armazenar os nomes dos amigos
let amigos = [];

//array para adicionar um nome à lista
function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value.trim();
     
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");    
    } else {
        amigos.push(nomeAmigo);
    }
    
    atualizarListaAmigos();

    document.getElementById("nomeAmigo").value = "";
}

function exibirListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";  // Limpar a lista existente

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li"); // Criar um novo elemento de lista (<li>) para cada nome
        item.textContent = amigos[i];
        listaAmigos.appendChild(item); // Adicionar o elemento à lista
    }    
}

function atualizarListaAmigos() {
    const lista =  getElementById("listaAmigos");
    lista.innerHTML = "";

     for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += "<li>" + amigos[i] + "<li>" // Adicionar cada amigo como um item da lista
    }
}

 



