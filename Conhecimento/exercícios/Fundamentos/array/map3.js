Array.prototype.map2 = function (callback) {
    const newArray = new Array
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]))
    }
    return newArray
}

//outra forma de resolver
/*Array.prototype.map2 = function(callblack){
    return this.map(callblack)
}*/

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}', //elemento 1
    '{"nome": "Caderno", "preco": 13.90}', //elemento 2
    '{"nome": "Kit de Lapis", "preco": 41.22}', //elemento 3
    '{"nome": "Caneta", "preco": 7.50}' //elemento 4
]

const paraObjeto = json => JSON.parse(json)

const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)