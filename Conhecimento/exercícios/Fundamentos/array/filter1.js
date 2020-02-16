const produtos = [
    {nome: 'Notebook', preco: 3499, fragil: true},
    {nome: 'iPad', preco: 2499 , fragil: true},
    {nome: 'Copo de vidro', preco:1.99 , fragil: true},
    {nome: 'Copo de plastico', preco: 2.99 , fragil: false}
]

const produtoCaro = produto => produto.preco >= 2000

const produtoFragil = produto => produto.fragil

console.log(produtos.filter(produtoCaro).filter(produtoFragil))
