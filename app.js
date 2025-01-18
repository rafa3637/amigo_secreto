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
    
    document.getElementById("amigo").value = "";
    atualizarListaAmigos();
}

function exibirListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";  // Limpar a lista existente

    for (let i = 0; i < amigos.length; i++) {
       listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>"
    }    
}

function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

     for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>" // Adicionar cada amigo como um item da lista     
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Alista está vazia. Adicione amigos antes de sortear.");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "<li>Meu amigo secreto é: " + amigoSorteado + "<li>";
        amigos = []; //limpa o array de amigos
        atualizarListaAmigos(); //atualiza a lista para não mostrar mais nada
    }
}

function reiniciarJogo() {
    amigos = []; // Limpa o array de amigos
    document.getElementById("listaAmigos").innerHTML = ""; //limpa a lista de nomes exibida
    document.getElementById("resultado").innerHTML = ""; //limpa o resultado do sorteio
    document.getElementById("amigo").value = ""; //limpa o campo de entrada
    alert("O jogo foi reiniciado!");
}


