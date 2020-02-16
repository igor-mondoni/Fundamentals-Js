// usando a notação literal
const obj1 = {}
console.log(obj1)

// Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0,25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return Number((salarioBase / 30) * (30 - faltas)).toFixed(2)
        }
    }
}

const s1 = criarFuncionario('Igor', 1500.00, 3)
const s2 = criarFuncionario('Pedro', 2500.00, 10)

console.log(s1.getSalario(), s2.getSalario())

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// um função famosa que retorne objeto .........
const fromJSON = JSON.parse('{"info": "Sou o JSON"}')
console.log(fromJSON.info)