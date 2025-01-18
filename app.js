//array para armazenar os nomes dos amigos
let amigos = [];

//array para adicionar um nome à lista
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();
     
    if (nome === "") {
        alert("Por favor, insira um nome válido.");    
    } else {
        amigos.push(nome);
    }

    atualizarListaAmigos();

    document.getElementById("nomeAmigo").value = "";
}

function atualizarListaAmigos() {
    const lista =  getElementById("listaAmigos");
    lista.innerHTML = "";

     for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

 



