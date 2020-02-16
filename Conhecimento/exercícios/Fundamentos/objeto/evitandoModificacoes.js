// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Algo', preco: 1.88, tag:'promotion'
})

console.log('Exntensivel', Object.isExtensible(produto))

produto.nome = 'Controle'
produto.descricao = 'Alguma coisa'

delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {nome: 'Igor', idade: 20}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 54
console.log(pessoa)

// Object.freeze = selado + valores constantes