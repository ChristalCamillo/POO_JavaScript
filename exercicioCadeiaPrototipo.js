// Crie um objeto chamado "animal" com as seguintes propriedades:

// nome (string)
// idade (number)
// tipo (string)
// Em seguida, crie um objeto chamado "gato" que seja um protótipo do objeto "animal" e adicione uma propriedade adicional chamada "raca" (string).

// Por fim, crie um método chamado "exibirInformacoes" no objeto "animal" que exiba no console as informações do animal (nome, idade, tipo e raça, se existir).

// Teste o método chamando-o a partir do objeto "gato".

const animal = {
	nome: String,
	idade: Number,
	tipo: String,
	exibirInformacoes() {
		console.log(this.idade, this.nome, this.tipo, this.raca)
	}
};

const gato = Object.create(animal);
gato.nome = "Mingau";
gato.idade = 12;
gato.tipo = "Femea";
gato.raca = "persa";

gato.exibirInformacoes()