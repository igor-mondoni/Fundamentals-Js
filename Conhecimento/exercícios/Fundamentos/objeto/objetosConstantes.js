// pessoa -> 123 -> {.....}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

/* pessoa -> 456 -> {.....}
pessoa = { nome: 'Ana'}*/

Object.freeze(pessoa) // a partir dessa linha nao se pode mais mexer no objeto o deixando constante

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Igor'})
pessoaConstante.nome = 'Caio'
console.log(pessoaConstante)