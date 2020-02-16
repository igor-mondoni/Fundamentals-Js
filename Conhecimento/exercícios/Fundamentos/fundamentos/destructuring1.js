// novo rec do ES2015

const pessoa = {
    nome: 'Igor',
    idade: 5,
    end: {
        logradouro: 'Rua ABC',
        numero: 9999
    }
}


const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa

console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { end: { logradouro, numero, cep = true}} = pessoa
console.log(logradouro, numero, cep)