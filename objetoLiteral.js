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

//herança de protótipo x herança de classe: a her de protótipo é a forma em que o js originalmente foi pensado, agregando o conceito
//de classes em cima dessa derivação original, sendo essencial a palavra this para entender o conceito. THIS só faz sentido dentro do contexto das propriedades do objt