const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2021/01/01",
  role: "estudante",
  ativo: true,
  exibirInfos: function() {
    console.log(this.nome, this.email)
  }
}

// em obj derivados do principal (estudante) apenas acrescentar as funções pertinentes, n repetir as q "user" já tem
const admin = {
  nome: "Mariana",
  email: "m@m.com",
  role: "admin",
  criarCurso() {
    console.log('curso criado!')
  }
}

//admin herdará de user com esse metodo:
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

//herança de protótipo x herança de classe: a her de protótipo é a forma em que o js originalmente foi pensado, agregando o conceito
//de classes em cima dessa derivação original, sendo essencial a palavra this para entender o conceito. THIS só faz sentido dentro do contexto das propriedades do objt


//esse exercicio serve pra vermos a necessidade de contexto e também q dá pra atribuir funções a var pq elas são valores.
//usando o metodo bind é feita uma cópia, por isso exibirNome() funciona e exibir() não

// const exibir = function(){
// 	console.log(this.nome)
// }

// const exibirNome = exibir.bind(user)
// exibirNome()
// exibir()

// outros jeitos: CALL
//esse método executa a função passando valores e parâmetros específicos para serem usados como contexto do this. Ou seja, é possível atribuir um this diferente do contexto atual ao executar a função.

// function exibeInfos() {
//  console.log(this.nome, this.email)
// }

// const user = {
//  nome: 'Mariana',
//  email: 'm@m.com'
// }

// exibeInfos.call(user)

//Fazendo com que a função seja executada em determinado contexto, mesmo após ser instanciada:

// function User(nome, email) {
//  this.nome = nome
//  this.email = email

//  this.exibeInfos = function(){
//    console.log(this.nome, this.email)
//  }
// }

// const newUser = new User('mariana', 'm@m.com')

// const outroUser = {
//  nome: 'Rodrigo',
//  email: 'r@r.com'
// }

// newUser.exibeInfos() //mariana m@m.com
// newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com

//propriedade que só pode ser acessada pelo terminal do navegador, n funciona no node: admin.__proto__ (exibirá os valores de user, se chamado novamente, chamará o prototipo basico de object)

