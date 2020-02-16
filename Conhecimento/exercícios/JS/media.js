/**
 * Calculo da media
 * @author Igor Henrique Mondoni
 */

 let nota1, nota2, media


function calcular(){
    nota1 = Number(frmMedia.txtNota1.value.replace(",","."));
    nota2 = Number(frmMedia.txtNota2.value.replace(",","."));
    media = ((nota1 + nota2) /2);
    frmMedia.resultado.value = media.toFixed(2);
    if(media < 5){
        frmMedia.txtSit.value = "Reprovado";
    } else {
        frmMedia.txtSit.value = "Aprovado";
    }
}