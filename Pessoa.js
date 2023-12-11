export default class Pessoa {
	#nome
	#idade
	constructor(nome, idade) {
		this.#nome = nome;
		this.#idade = idade;
	}

	get nome() {
		return this.#nome;
	}

	get idade() {
		return this.#idade;
	}
}

const pessoa1 = new Pessoa("João", 25);
console.log(pessoa1.nome); // "João"
console.log(pessoa1.idade); // 25