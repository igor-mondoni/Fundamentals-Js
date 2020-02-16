// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preço = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

/////////////////////////////////////////////////////
const carro = {
    modelo: 'Civic',
    valor: 110000,
    proprietario:{
        nome: "Igor",
        idade: 21,
        endereco: {
            logradouro: 'Rua João Tauler',
            numero: 55
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Juliana',
        idade: 25
    }],
    calcularValorSeguro: function(){
        let a = carro.proprietario.idade / 2
        console.log(a)
        
    }
}

carro.proprietario.endereco.numero = 1355
carro['proprietario']['endereco']['logradouro'] = 'Ave anhaia'
console.log(carro)
carro.calcularValorSeguro()

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
