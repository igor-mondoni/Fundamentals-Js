let peso, altura, resultado

function calcular() {
    peso = Number(frmImc.txtPeso.value);
    altura = Number(frmImc.txtAlt.value);
     resultado = peso / (altura * altura);
    //resultado = peso / (Math.pow(altura, 2));*/
    console.log(peso);
    console.log(altura);
    console.log(resultado);
    if (resultado < 17) {
        frmImc.txtImc.value = resultado.toFixed(2);
        document.querySelector("#imcImg").src = "imagens/imc1.png"
    } else if (resultado >= 17 && resultado < 18.5) {
        frmImc.txtImc.value = resultado.toFixed(2);
        document.querySelector("#imcImg").src = "imagens/imc2.png"
        
    } else if (resultado >= 18.5 && resultado < 24.99) {
        frmImc.txtImc.value = resultado.toFixed(2);
        document.querySelector("#imcImg").src = "imagens/imc3.png"
        
    } else if (resultado >= 25 && resultado < 29.9) {
        frmImc.txtImc.value = resultado.toFixed(2);
        document.querySelector("#imcImg").src = "imagens/imc4.png"
        
    } else if (resultado >= 30 && resultado < 34.99) {
        frmImc.txtImc.value = resultado.toFixed(2);
        document.querySelector("#imcImg").src = "imagens/imc5.png"
        
    } else if (resultado >= 35 && resultado < 39.99) {
        frmImc.txtImc.value = resultado.toFixed(2);
        document.querySelector("#imcImg").src = "imagens/imc6.png"
        
    } else if (resultado > 40) {
        frmImc.txtImc.value = resultado.toFixed(2);
        document.querySelector("#imcImg").src = "imagens/imc7.png"
        
    }
}