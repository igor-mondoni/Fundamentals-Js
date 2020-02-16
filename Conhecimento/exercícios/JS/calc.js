let idade
let resultado
function calcular() {
    idade = Math.floor(Number(document.querySelector("#idade").value))
    if (idade < 16) {
        resultado = Math.floor(Number(document.querySelector("#result").innerHTML = "PROIBIDO VOTAR"))
        result.style.color = "red"
    } else if (idade == 16 || idade == 17 || idade >= 70) {
        resultado = Math.floor(Number(document.querySelector("#result").innerHTML = "VOTO FACULTATIVO"))
        result.style.color = "yellow"
    } else {
        resultado = Math.floor(Number(document.querySelector("#result").innerHTML = "VOTO OBRIGATÓRIO"))
        result.style.color = "green"
    }
    
}