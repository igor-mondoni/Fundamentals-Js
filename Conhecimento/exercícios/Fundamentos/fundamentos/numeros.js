const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
/*isInteger é uma função de teste que diz se o dado é um numero inteiro, nome variado de "INT"*/
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.645
const avaliacao2 = 7.534

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
/*toString converte a variavel para string e se colocar um numero nos parenteses da função, ele mostra os numeros bin do valor do dado*/
console.log(media.toString(2)) /*em binário */
console.log(typeof media)
