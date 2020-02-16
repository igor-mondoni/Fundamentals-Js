/*
* Codigo escrito por:
* @author Igor Henrique Mondoni
*/

document.write("Hello world");

function alerta(){
    let alertaUrgente = alert('Hello world');
    let frase = "Não tens nada aqui!"
    console.log(frase + ' Ou sera que tem?');
    };
    alerta();

function helloWorld(){
    let nome = prompt('Qual é o seu nome?');
    console.log(nome);
    document.querySelector('.evento').addEventListener('click', n =>{
        
        alert ('Hello ' + nome);    
    })

    
}
helloWorld();