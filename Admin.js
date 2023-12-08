import User from "./User.js";

export default class Admin extends User {
	constructor(nome, email, nascimento, role = 'admin', ativo = true){
		//PRECISA REPETIR? sim, pq nem todas as vezes vamos querer todos os parametros do parent
		//de onde sai essa info? do design do projeto, em docs
		super(nome, email, nascimento, role, ativo)
	}

	criarCurso(nomeCurso, vagas){
		return `Curso de ${nomeCurso} criado com ${vagas} vagas`
	}
}

//const novoAdmin = new Admin('Rod', 'r@r.com', '2021-01-01')
// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.criarCurso('JS', 20))
//na hora de chamar um GETTER, chama-se como propriedade, sem ()
//console.log(novoAdmin.nome)

// Uma coisa importante também, ao contrário das funções que são nomeadas e das variáveis, 
// as funções não são hoisted, elas não tem aquele comportamento que é o //hoisting, que é quando o Java Script puxa para o topo do arquivo as funções nomeadas e as variáveis nomeadas. Então não conseguimos chamar, não conseguimos instanciar uma classe antes dela ser declarada, 
// lendo de cima para baixo, então temos que instanciar a classe e depois chamar.