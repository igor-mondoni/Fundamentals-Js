let brk = false;

function lampState() {
    document.querySelector("#lamp").src = 'broken.jpg';
    brk = true;
};



function pressSw() {

    let sw1 = false;

    document.querySelector('#sw').addEventListener('click', swi => {
        if (brk == false) {
            if (sw1 == false && brk == false) {
                document.getElementById('sw').src = 'imagens/swon.png'
                swi = document.querySelector('#lamp').src = "imagens/on.jpg"
                sw1 = true;
            } else {
                document.getElementById('sw').src = 'imagens/swoff.png'
                swi = document.querySelector('#lamp').src = "imagens/off.jpg"
                sw1 = false;
            }
        } else {
            if (sw1 == false) {
                document.getElementById('sw').src = 'imagens/swon.png'
                sw1 = true;
            } else {
                document.getElementById('sw').src = 'imagens/swoff.png'
                sw1 = false;
            }
        }
    });
}
pressSw();