function obrigado() {
    var a = document.getElementById("nome").value;
    var b = document.getElementById("sobrenome").value;
    return alert(`Obrigado pelo contato, ${a} ${b}!`)
}

document.getElementById("envio-formulario").onclick = obrigado;

window.onscroll - function() {fixarHeader()};
var header = document.getElementById("header");
var sticky = header.offsetTop;

function fixarHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
