const prod1 = {}
prod1.nome = 'Celular daora'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 /*evitar atributos com espaço*/

console.log(prod1)
console.log(typeof prod1)

const prod2 = {
    nome: 'Cigarro ofa',
    preco: 79.90
}

prod2['Desconto mais legal'] = 0.90
console.log(prod2)