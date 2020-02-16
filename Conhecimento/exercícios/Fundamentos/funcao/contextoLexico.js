const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() //O javascript pega do local de declaração da função e não valores da onde ele foi executado
    console.log(valor)
}

minhaFuncao()
exec()