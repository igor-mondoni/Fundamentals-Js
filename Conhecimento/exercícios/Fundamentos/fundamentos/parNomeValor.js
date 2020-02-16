//par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' //contexto lexico 2
    return saudacao
}

// Objeto são grupos aninhados de pares nomes/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 95,
    end: {
        logradouro: "Rua Muito Chata",
        numero: 55
    }
}


console.log(saudacao)
console.log(exec())
console.log('Informações do cliente:', cliente)