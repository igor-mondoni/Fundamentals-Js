let resultadoPc
let resultado = 0;
let placarPc = 0;
let placarJogador = 0;
function playGame() {
    if (document.getElementById('pedra').checked === true) {
        resultado = 1
    }
    else if (document.getElementById('papel').checked === true) {
        resultado = 2
    }
    else if (document.getElementById('tesoura').checked === true) {
        resultado = 3
    }

    if (resultado != 0) {
        resultadoPc = document.querySelector('#pc').value = Math.floor(Math.random() * 3 + 1);
        switch (resultadoPc) {
            case 1:
                document.querySelector('#pc').src = "imagens/pcpedra.png";
                break;
            case 2:
                document.querySelector('#pc').src = "imagens/pcpapel.png";
                break;
            case 3:
                document.querySelector('#pc').src = "imagens/pctesoura.png";
                break;
        }

        if (resultado == 1 && resultadoPc == 1 || resultado == 2 && resultadoPc == 2 || resultado == 3 && resultadoPc == 3) {
            document.getElementById('resultado').innerHTML = "Empate";

        } else if (resultado == 1 && resultadoPc == 3 || resultado == 2 && resultadoPc == 1 || resultado == 3 && resultadoPc == 2) {
            document.getElementById('resultado').innerHTML = "Ganhou";
            placarJogador = Number(placarJogador + 1);

        } else if (resultado == 1 && resultadoPc == 2 || resultado == 2 && resultadoPc == 3 || resultado == 3 && resultadoPc == 1) {
            document.getElementById('resultado').innerHTML = "PERDEU";
            placarPc = Number(placarPc + 1);
        }
    } else {
        document.querySelector("#pc").src = "pc.png";
        alert("Selecione uma opção")
    }
    console.log(placarJogador, '-', placarPc);
    resultPc.value = placarPc;
    resultPl.value = placarJogador;
}


function resetar() {
    document.querySelector("#pc").src = "imagens/pc.png";
    placarPc = 0;
    placarJogador = 0;
    document.getElementById('resultPc').value = "0";
    document.getElementById('resultPl').value = "0";
    document.getElementById('pedra').checked = false;
    document.getElementById('papel').checked = false;
    document.getElementById('tesoura').checked = false;
}

