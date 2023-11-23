// funções construtoras são o equivalente no js das classes
// há dois jeitos de criar objetos, Object.create() X new
// classes iniciam sempre com letra maiuscula

function User(nome, email){
	this.nome = nome
	this.email = email

	this. exibirInfos = function() {
		return `${this.nome}, ${this.email}`
	}
}

//dessa forma, o js cria um novo objeto guardado na var novoUser, e checa na cadeia de prototipo os metodos e propriedades de user
// isso retorna um novo objeto, que se torna contexto para o this dos métodos disponiveis na classe modelo

// const novoUser = new User('Juliana', 'j@j.com')
// console.log(novoUser.exibirInfos())

// function Admin(role) {
	// this é o contexto que vem de user, e após chamada das propriedades q queremos usar de user
// 	User.call(this, 'Juliana', 'j@j.com')
 	// se receber por parametro muda, se n o padrão é estudante
// 	this.role = role || 'estudante'
// }

// NA VIDA REAL NAO USAMOS PROTOTYPE, USAMOS OBJECT.CREATE

 //aqui, passamos pro prototipo de admin as propriedades prototipadas de user
// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

//trabalhando com obj literal, botamos construtor na mão com o init

const user = {
  init: function(nome, email) {
    this.nome = nome
    this.email = email
  },

  exibirInfos: function() {
    return this.nome
  }
}

// agora como a gente usa um obj literal como protótipo?, n dependendo de func construtora 

const novoUser = Object.create(user)
novoUser.init('Juliana', 'j@j.com')
console.log(novoUser.exibirInfos())
// tem que retornar true, estamos vendo se user realmente entrou como prototipo de novoUser
//console.log(user.isPrototypeOf(novoUser))

// MAIS EXEMPLOS

// USANDO NEW

function Carro(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

Carro.prototype.exibirInfos = function() {
  console.log("Marca: " + this.marca + ", Modelo: " + this.modelo);
}

const meuCarro = new Carro("Toyota", "Corolla");
meuCarro.exibirInfos();

// USANDO O CREATE

const pessoa = {
  nome: "João",
  idade: 25,
  exibirInfos: function() {
    console.log("Nome: " + this.nome + ", Idade: " + this.idade);
  }
}

const novaPessoa = Object.create(pessoa);
novaPessoa.nome = "Maria";
novaPessoa.idade = 30;
novaPessoa.exibirInfos();