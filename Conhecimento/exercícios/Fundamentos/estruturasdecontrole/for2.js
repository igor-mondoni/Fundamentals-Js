const notas = [6.7,7.4,9.8,1.8,9.9]

for (let i in notas){
    console.log(i,notas[i])
}

const pessoa = {
    nome: 'Igor',
    sobrenome: 'Henrique',
    idade: 20,
    peso: 74
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(atributo)