    // function lightOn(){
    //     document.querySelector('#lamp').src = 'on.jpg'
    // };
    // function lightOff(){
    //     document.querySelector('#lamp').src = 'off.jpg'
    // };

    let recebe

    function controlar(recebe){
        if (recebe == 1){
            document.querySelector('#lamp').src = 'imagens/on.jpg'
        }else {
            document.querySelector('#lamp').src = 'imagens/off.jpg'
        }
    }