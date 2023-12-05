// para usar as instancias de classe em outros lugares do codigo temos que alem de exportar a classe fazer 
//modificações no package json que vem por default em todos os projetos, digitando o comando
// npm init -y no terminal
// adicionar "type":"module" abaixo de description

export default class User{
	#nome
	#email
	#nascimento
	#role
	#ativo
	constructor(nome, email, nascimento, role, ativo = true){
		this.#nome = nome
		this.#email = email
		this.#nascimento = nascimento
		this.#role = role || 'estudante'
		this.#ativo = ativo
	}
	//metodos sao funcoes executadas no contexto de um objeto

	//pra privar as coisas, # na frente

//montamos um metodo pra ter acesso as prop privadas de user
#montaObjUser() {
	return({
		nome: this.#nome,
		email: this.#email,
		nascimento: this.#nascimento,
		role: this.#role,
		ativo: this.#ativo
	})
}

	exibirInfos(){
		const objUser = this.#montaObjUser()
		return `${objUser.nome}, ${objUser.email}`
	}
}

// const novoUser = new User('Juliana', 'j@j.com', '2021-01-01')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())
// console.log(User.prototype.isPrototypeOf(novoUser))  tem q dar true