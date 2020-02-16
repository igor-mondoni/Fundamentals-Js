let receive
let sw1 = false;
let sw2 = false;

function sw(receive) {
    if (receive == 1 && sw1 == false) {
        document.querySelector('#sw1').src = 'imagens/swon.png'
        sw1 = true;

    } else if (receive == 2 && sw2 == false) {
        document.querySelector('#sw2').src = 'imagens/swon.png'
        sw2 = true;

    } else if (receive == 1 && sw1 == true) {
        document.querySelector('#sw1').src = 'imagens/swoff.png'
        sw1 = false;

    } else if (receive == 2 && sw2 == true) {
        document.querySelector('#sw2').src = 'imagens/swoff.png'
        sw2 = false;

    };

    if (sw1 == true && sw2 == true) {
        document.querySelector('#lamp').src = 'imagens/on.jpg';
        
    } else if (sw1 == false || sw2 == false) {
        document.querySelector('#lamp').src = 'imagens/off.jpg';
    };

}