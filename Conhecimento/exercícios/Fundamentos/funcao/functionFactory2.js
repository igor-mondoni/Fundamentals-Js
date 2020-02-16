//minha versão
const Pessoa = function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    }
}

const doJoao = Pessoa('João', 'Madruga')

console.log(doJoao)

//versão professor
/*function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Iphone', 5004.49))*/