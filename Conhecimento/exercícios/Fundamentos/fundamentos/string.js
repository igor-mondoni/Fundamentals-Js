const escola = "Cod3r"

console.log(escola.charAt(4)) /*charAt busca a letra na posição definida no parenteses*/
console.log(escola.charCodeAt(3)) /*retorna o valor em ASC UNICODE*/
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola'.concat(escola).concat("!"))
console.log('Escola' + escola + "!")
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) /*gera um array baseado nas informações separadas pelo "separador"*/
