let dado 

function jogarDado(){
    document.querySelector("#playButton").addEventListener('click',  dado =>{
    dado = Math.floor(Math.random() * 6 + 1);
    console.log(dado)
switch (dado){
    case 1:
    document.querySelector('#dado').src = "imagens/face1.png"
    break;

    case 2:
    document.querySelector('#dado').src = "imagens/face2.png"
    break;

    case 3:
    document.querySelector('#dado').src = "imagens/face3.png"
    break;

    case 4:
    document.querySelector('#dado').src = "imagens/face4.png"
    break;

    case 5:
    document.querySelector('#dado').src = "imagens/face5.png"
    break;

    case 6:
    document.querySelector('#dado').src = "imagens/face6.png"
    break;
    
    default:
    alert ("Refaça a operação")
    document.querySelector('#dado').src = "imagens/wrong.png"
    break;
}
});
}
jogarDado()