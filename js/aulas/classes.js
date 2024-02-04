class Pessoa {
    constructor(nome, sobrenome, idade, peso, altura) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    nomeCompleto() {
        console.log(`O nome completo é ${this.nome} ${this.sobrenome}`);
    }

    getInformations() {
        console.log(`Nome: ${this.nome} ${this.sobrenome}\nIdade: ${this.idade}`);
    }

    get getIMC() {
        let imc = this.peso / (this.altura ** 2);
        if (imc <= 18.5) {
            alert(`Seu IMC é ${imc.toFixed(2)}, você está abaixo do peso.`);
        } else if (imc > 18.5 && imc <= 24.9) {
            alert(`Seu IMC é ${imc.toFixed(2)}, seu peso é normal.`);
        } else {
            alert(`Seu IMC é ${imc.toFixed(2)}, você está acima do peso.`);
        }
    }
}

function conseguirDados() {
    return pessoaVez.getInformations();
}

function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const idade = document.getElementById('idade').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const pessoa = new Pessoa(nome, sobrenome, idade, peso, altura);
    pessoa.getIMC
}
