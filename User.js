// para usar as instancias de classe em outros lugares do codigo temos que alem de exportar a classe fazer 
//modificações no package json que vem por default em todos os projetos, digitando o comando
// npm init -y no terminal
// adicionar "type":"module" abaixo de description

export default class User {
	#nome
	#sobrenome
	#email
	#nascimento
	#role
	#ativo
	constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
		this.#nome = nome
		this.#sobrenome = sobrenome
		this.#email = email
		this.#nascimento = nascimento
		this.#role = role || 'estudante'
		this.#ativo = ativo
	}
	//metodos sao funcoes executadas no contexto de um objeto

	//pra privar as coisas, # na frente

	//agora acessaremos (read only) a propriedade nome com uma func getter
	//os getters nunca recebem argumentos
	//TEM QUE TER UM PRA CADA. Principios de SOLID, questões de segurança e testes
	get nome() {
		//pode ter logica, condicional, coisas de func dentro
		return this.#nome
	}

	get sobrenome() {
		return this.#sobrenome
	}

	 get nomeCompleto() {
   return `${this.#nome} ${this.#sobrenome}`
 }

	get email() {
		return this.#email
	}

	get nascimento() {
		return this.#nascimento
	}

	get role() {
		return this.#role
	}

	get ativo() {
		return this.#ativo
	}

	// set nome(novoNome) {
	// 	if (novoNome === '') {
	// 		throw new Error('formato não válido')
	// 	}
	// 	let [nome, ...sobrenome] = novoNome.split(" ")
	// 	sobrenome = sobrenome.join(' ')
	// 	this.#nome = nome
	// 	this.#sobrenome = sobrenome
	// }

	exibirInfos() {
		return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
	}
}