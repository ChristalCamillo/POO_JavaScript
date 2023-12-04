// para usar as instancias de classe em outros lugares do codigo temos que alem de exportar a classe fazer 
//modificações no package json que vem por default em todos os projetos, digitando o comando
// npm init -y no terminal
// adicionar "type":"module" abaixo de description

export default class User{
	constructor(nome, email, nascimento, role, ativo = true){
		this.nome = nome
		this.email = email
		this.nascimento = nascimento
		this.role = role || 'estudante'
		this.ativo = ativo
	}
	//metodos sao funcoes executadas no contexto de um objeto

	exibirInfos(){
		return `${this.nome}, ${this.email}`
	}
}

// const novoUser = new User('Juliana', 'j@j.com', '2021-01-01')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())
// console.log(User.prototype.isPrototypeOf(novoUser))  tem q dar true