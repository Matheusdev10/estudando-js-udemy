//METODOS

//podem ser adicionados aos objetos
//são como propriedades, mas contém uma função
//invocamos da mesma forma que funções

//exemplo

// const animal = {
//   name: 'bob',

//   latir: function () {
//     console.log(true);
//   },
// };

// console.log(animal.name);
// animal.latir();

//Aprofundamento em Metodos

// const pessoa = {
//   name: 'matheus',
//   getNome: function () {
//     return this.name;
//   },
//   setNewName: function (newName) {
//     this.nome = newName;
//   },
// };
// console.log(pessoa.name);
// console.log(pessoa.getNome());
// console.log('jessica');

//SOBRE O PROTOTYPE
//é uma especie de herança onde objetos pais herdam propriedades e metodos aos filhos
//js cria essa cadeia para acessar propiedades
// const text = 'matheus';
// console.log(Object.getPrototypeOf(text));

//Mais sobre prototype
//criando novo objeto porém recebendo do objeto anterior
// const myObject = {
//   a: 'b',
// };

// console.log(Object.getPrototypeOf(myObject));
// const mySecondObject = Object.create(myObject);
// console.log(mySecondObject);

//clases básicas
//os prototypes sao originados de uma classe
// é o molde dos objetos, nela definimos os metodos e propriedades
//criando varios cachorros a partir de uma classe
// const cachorro = {
//   raca: null,
// };

// const pastorAlemao = Object.create(cachorro);
// pastorAlemao.raca = 'Pastor alemao';
// console.log(pastorAlemao);

// const viraLata = Object.create(cachorro);
// viraLata.raca = 'Vira lata';
// console.log(viraLata);

// FUNÇÃO COMO CLASSE - FUNÇÃO CONSTRUTORA
// function criarCarro(nome, ano) {
//   const carro = Object.create({});
//   carro.nome = nome;
//   carro.ano = ano;
//   return carro;
// }
// const corolla = criarCarro('corolla', 2020);
// console.log(corolla);

// const celta = criarCarro('celta', 2012);
// console.log(celta);

// funções construtoras
// mais recente > mais utilizado
// este recurso é semelhante ao
// anterior, mas com uma nova palavra chave: a new

// function Cachorro(nome, raca) {
//   this.nome = nome;
//   this.raca = raca;
// }

// const husky = new Cachorro('buddy', 'husky');
// console.log(husky);

// function Carro(nome, cor) {
//   this.nome = nome;
//   this.cor = cor;
// }
// const carro = new Carro('Corrola', 'prata');
// // const ola = console.log(carro);
// document.body.innerText = JSON.stringify(carro);

// //METODOS NA FUNÇÃO CONSTRUTORA
// Cachorro.prototype.uivar = function () {
//   console.log('auuuuuu');
// };
// husky.uivar();

//classes es6 ( maneira de criar classe atualmente)

// class Cachorro {
//   constructor(nome, raça) {
//     this.nome = nome;
//     this.raça = raça;
//   }
// }

// const budy = new Cachorro('budy', 'viralata');
// console.log(budy);

// class AppError {
//   constructor(message, statusCode = 400) {
//     this.message = message;
//     this.statusCode = statusCode;
//   }
// }

// const erro = new AppError('Este usuario ja esta em uso');
// console.log(erro);

//MAIS SOBRE CLASSES
// class Caminhão {
//   constructor(eixos, cor) {
//     this.eixos = eixos;
//     this.cor = cor;
//   }
//   descreverCaminhao() {
//     console.log(`O camihão tem ${this.eixos} eixos na cor ${this.cor}`);
//   }
// }

// const scania = new Caminhão(10, 'vermelha');
// console.log(scania);
// scania.descreverCaminhao();

//Symbols em classes
//quando utilizamos o recurso de symbol com classes
//é possivel criar uma propriedade única e imutavel
//isso é util quando há algum dado que se repetira em todos
//os objetos criados a partir da classe

// class Aviao {
//   constructor(marca, turbinas) {
//     this.marca = marca;
//     this.turbinas = turbinas;
//   }
// }

// const asas = Symbol();
// const pilotos = Symbol();
// Aviao.prototype[asas] = 2;
// Aviao.prototype[pilotos] = 3;
// const boeing = new Aviao('boeing', 10);
// console.log(boeing);
// console.log(boeing[asas]);
// console.log(boeing[pilotos]);

//getters e setters
//get é um metodo utilizado para exibir o valor de alguma
//propriedade
//set utilizado para alterar o valor

// class Post {
//   constructor(titulo, descriçao, tags) {
//     this.titulo = titulo;
//     this.descriçao = descriçao;
//     this.tags = tags;
//   }

//   get exibirTitulo() {
//     return `voce esta lendo ${this.titulo}`;
//   }
//   set adicionarTags(tags) {
//     //estou recebendo as tags em string e converto em array
//     //utilizando esse metodo de split
//     const tagsArray = tags.split(', ');
//     this.tags = tagsArray;
//   }
// }
// const myPost = new Post('Post', 'É um post sobre programação');
// console.log(myPost);
// console.log(myPost.exibirTitulo);

// myPost.adicionarTags = 'programação, javascript, react';
// console.log(myPost);

//HERENÇA
// Uma classe pode herdar propriedades de outra por
//meio de herança
//utilizamos a palavra extends para adicionar a classe
//que vai trazer as propriedades

class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  //patas veio da classe mamifero
  //super para enviar propriedades
  constructor(patas, nome) {
    super(patas);
    this.nome = nome;
  }
}

const loboGuara = new Lobo(4, 'loboGuara');
console.log(loboGuara);

//OPERADOR INSTANCEOF
//verifica se um obj é pai de outro

console.log(loboGuara instanceof Lobo);
// esse metodo analisa de objeto para classe
// loboGuara é obj e lobo é a classe
//por isso retorna true
//loboGuara foi criado a partir da classe lobo

console.log(Lobo instanceof Mamifero);
//Lobo e Mamifero sao classes
// se eu tivesse verificando o objeto daria certo

console.log(new Lobo(4, 'teste') instanceof Mamifero);
//estou verificando de obj para classe
//classe lobo herdou de mamifero
