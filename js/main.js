function soma() {
    var a = document.getElementById("nome").value;
    var b = document.getElementById("sobrenome").value;
    return alert(`Obrigado pelo contato, ${a} ${b}!`)
}

document.getElementById("clickMe").onclick = soma;


