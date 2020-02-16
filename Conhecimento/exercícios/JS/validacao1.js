function validacao() {
    let formulario = document.forms.frmCadastro
    let nome = formulario.txtNome.value
    let cpf = formulario.txtCpf.value
    let sexo = formulario.sexo.value
    let perfil = formulario.txtPerfil.value
    // alert(nome + ' - ' + cpf + ' - ' + sexo + ' - ' + perfil)
    let erro = false
    if (nome.indexOf(' ') === -1) {
        alert('Preencha seu nome completo')
        erro = true
    }
    if (cpf.length != 11) {
        alert("Preencha um CPF válido")
        erro = true
    }
    if (perfil.length < 20) {
        alert("Você não utilizou o minimo de espaço requerido")
        erro = true
    }
    if (erro === true) {
        return false
    } else {
        return true
    }
}
