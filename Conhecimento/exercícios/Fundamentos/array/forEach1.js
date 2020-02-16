//foreach pode receber 3 parametros por padrão: o valor, indice e o array

const aprovados = ['Agatha','Igor','Daniel','Diego','Maria','João']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)