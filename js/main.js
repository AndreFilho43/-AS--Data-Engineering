function obrigado() {
    var a = document.getElementById("nome").value;
    var b = document.getElementById("sobrenome").value;
    return alert(`Obrigado pelo contato, ${a} ${b}!`)
}

document.getElementById("envio-formulario").onclick = obrigado;


