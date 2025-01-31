// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*let amigos = [];

let textOutput;

function agregarAmigo() {
    textOutput = document.getElementById('amigo').value;

    if (textOutput == '' || textOutput == null) return alert("Por favor, inserte un nombre.");
    
    if (amigos.indexOf(textOutput) == -1) amigos.push(textOutput);
    else alert("Por favor, inserte un nombre que no haya ingresado anteriormente.");

    listaAmigos.innerHTML = amigos.join(', ');

    resultado.innerHTML = '';
}

function sortearAmigo() {
    if (amigos.length < 2) return alert("No hay suficientes amigos para sortear.");

    resultado.innerHTML = amigos[Math.floor(Math.random() * amigos.length)];

    listaAmigos.innerHTML = '';
    amigos = [];
}*/

let amigos = [];

function agregarAmigo() {
    let textOutput = document.getElementById('amigo').value.trim();

    if (textOutput === '') return alert("Por favor, inserte un nombre.");

    if (!amigos.includes(textOutput)) amigos.push(textOutput);
    else return alert("Por favor, inserte un nombre que no haya ingresado anteriormente.");

    actualizarLista();
}

function actualizarLista() {
    listaAmigos.innerHTML = "";

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    resultado = document.getElementById('resultado');

    if (amigos.length < 2) return alert("No hay suficientes amigos para sortear.");

    resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigos[Math.floor(Math.random() * amigos.length)]}</li>`;

    document.getElementById('amigo').value = '';
    amigos = [];
    actualizarLista();
}
