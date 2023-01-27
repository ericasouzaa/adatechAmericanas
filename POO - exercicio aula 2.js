/*1º exercício
OK - Crie uma classe "Animal" que deve receber dois parâmetros no método construtor, nome e idade, e anotá-los em propriedades da classe. Além disso, ele também deve possuir um método chamado apresentar() que ao ser chamado exibirá a mensagem "Oi! Eu sou um Animal".

OK - Crie classes "Mamifero", "Ave" e "Peixe". Essas classes devem herdar os atributos e métodos da classe "Animal". Crie atributos e métodos próprios para cada uma dessas classes. Lembre-se que, o método apresentar() precisa ser atualizado informando se o objeto é um Mamifero, Ave ou Peixe.

NOT - Sinta-se livre para criar novas classes extendendo "Ave" ou "Peixe".

OK - Crie classes "Humano" e "Cachorro", ambos devem extender de "Mamifero". Assim como feito anteriormente, crie métodos e atributos para cada um deles.

OK - Crie agora algumas classes de profissões como, por exemplo: "Advogado", "Medico" e "Desenvolvedor". Siga a mesma ideia do que foi solicitado anteriormente.

OK - Extendendo de Desenvolvedor, crie um FrontEnd e um BackEnd. Cada um deles deve ter métodos próprios e aproveita para adicionar também condicionais, como, por exemplo, o desenvolvedor BackEnd pode ter um método chamado darDesculpa(), onde você gera um número aleatório. Se ele for par, exibe a mensagem "Na minha máquina funciona" e se for impar "Terminei! Falta só testar".

Suba tudo no git para apresentar na próxima aula :)*/

class Animal {
    nome;
    idade;

    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
    }

apresentar() {
    return 'Oi, eu sou um animal!'
}}

const animalzinho = new Animal('Chico', 5)
console.log(animalzinho)
console.log(animalzinho.apresentar())


class Ave extends Animal {
    possuiAsas;
    possuiPenas;

    constructor(nome,idade, possuiAsas, possuiPenas){
        super(nome, idade)
        this.possuiAsas = possuiAsas;
        this.possuiPenas = possuiPenas;
    }

    apresentar() {
        return 'Oi, eu sou uma ave!'
}}

const avezinha = new Ave('Papagaio', 3, true, true)
console.log(avezinha)
console.log(avezinha.apresentar())

class Peixe extends Animal {
    respiracaoBranquial;
    possuiNadadeiras;

    constructor(nome,idade, respiracaoBranquial, possuiNadadeiras){
        super(nome, idade)
        this.respiracaoBranquial = respiracaoBranquial;
        this.possuiNadadeiras = possuiNadadeiras;
    }

    apresentar() {
        return 'Oi, eu sou um peixe!'
}}
const peixinho = new Peixe('Nemo', 10 , true, true)
console.log(peixinho)
console.log(peixinho.apresentar())

class Mamifero extends Animal{
    temPelos;
    glandulasMamarias;
    
    constructor(nome, idade, temPelos, glandulasMamarias){
        super(nome, idade)
        this.temPelos = temPelos;
        this.glandulasMamarias = glandulasMamarias;
    }

    apresentar() {
        return 'Oi, eu sou um mamifero!'
}}
const mamiferozinho = new Mamifero('Sid', 4 , true, true)
console.log(mamiferozinho)
console.log(mamiferozinho.apresentar())

class Cachorro extends Mamifero {
    raca;
    possuiRabo;

    constructor(nome, idade, temPelos, glandulasMamarias, raca, possuiRabo){
        super(nome, idade, temPelos, glandulasMamarias)
        this.raca = raca;
        this.possuiRabo = possuiRabo;

    }
    apresentar(){
        return 'Oi, eu sou um cachorro!'
    }
}
const cachorrinho = new Cachorro('Bento', 5 , true, true, 'shihtzu', 'longo')
console.log(cachorrinho)
console.log(cachorrinho.apresentar())

class Humano extends Mamifero {
    serRacional;
    biPedalismo;

constructor(nome, idade, temPelos, glandulasMamarias, serRacional, biPedalismo){
        super(nome, idade, temPelos, glandulasMamarias)    
        this.serRacional = serRacional;
        this.biPedalismo = biPedalismo;
}

pensar() {
    return 'Penso, logo existo.';
}}

const pessoinha = new Humano('Maria', 8, true, true, true, true)
console.log(pessoinha)
console.log(pessoinha.pensar())

class Medico extends Humano {
    trataDoencas;

    constructor(nome, idade, temPelos, glandulasMamarias, serRacional, biPedalismo, trataDoencas){
        super(nome, idade, temPelos, glandulasMamarias, serRacional, biPedalismo)
        this.trataDoencas = trataDoencas;

}}

class Advogado extends Humano {
    meteProcessinho;

    constructor(nome, idade, temPelos, glandulasMamarias, serRacional, biPedalismo,  meteProcessinho){
        super(nome, idade, temPelos, glandulasMamarias, serRacional, biPedalismo)
        this.meteProcessinho = meteProcessinho;
    }}

class DesenvolvedorWeb extends Humano {
    sabeCodar;
    constructor(nome, idade, temPelos, glandulasMamarias, serRacional, biPedalismo, saberCodar){
        super(nome, idade, temPelos, glandulasMamarias, serRacional, biPedalismo)
        this.saberCodar = saberCodar;
    }

codar() {
   return 'Deu bug' 
}}

const devJunior = new DesenvolvedorWeb('Joao', 28, true, true, true, true, true)
console.log(devJunior)
console.log(devJunior.codar())

class FrontEndDev extends DesenvolvedorWeb {
    centralizarDiv;

    constructor(nome, idade, temPelos, glandulasMamarias, serRacional, biPedalismo, saberCodar, centralizarDiv){
        super(nome, idade, temPelos, glandulasMamarias, serRacional, biPedalismo, saberCodar)
        this.centralizarDiv = centralizarDiv;
    }}


class BackEndDev extends DesenvolvedorWeb {
    integrarApi;

    constructor(nome, idade, temPelos, glandulasMamarias, serRacional, biPedalismo, saberCodar, integrarApi){
        super(nome, idade, temPelos, glandulasMamarias, serRacional, biPedalismo, saberCodar)
        this.integrarApi = integrarApi;
    }

    darDesculpa(){  
                       
        let numero = this.calculoNumero();
        console.log(numero);
               
        if(numero % 2 == 0){
            return ('Estranho! Na minha maquina funciona')
        } else {
            return ('Terminei. Falta só testar!')
        }
    }

    calculoNumero(){
        return Math.floor(Math.random() * 10  + 1);
    }
}

const pessoaDev = new BackEndDev ('Erica', 24, true, true, true, true, true, true);
console.log(pessoaDev)
console.log(pessoaDev.darDesculpa())