const pessoa = {
    nome: 'Igor',
    idade: 8,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})
//defineProperty tem por objetivo o mesmo que o object.freeze porem podendo desemembrar um dado especifico
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: 01/01/2019
})

pessoa.dataNascimento = '03/04/2020'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const objetoDestino = { a: 1}
const o1 = { b: 2}
const o2 = {c:3, a: 4}
const obj = Object.assign(objetoDestino, o1, o2)

console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)