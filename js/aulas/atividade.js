class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.estaTrabalhando = false;
    }


    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }


    trabalhar() {
        if (this.estaTrabalhando) {
            console.log(`${this.nome} já está trabalhando.`);
        } else {
            console.log(`${this.nome} está começando a trabalhar.`);
            this.estaTrabalhando = true;
        }
    }
}


class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }


    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}


class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }


    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}


let gerente = new Gerente("André", 40, "Gerente", "Tecnologia da Informação");
let desenvolvedor = new Desenvolvedor("Lucas", 30, "Desenvolvedor", "JavaScript");


gerente.seApresentar();
gerente.trabalhar();
gerente.trabalhar();
gerente.gerenciar();


desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.trabalhar();
desenvolvedor.programar();