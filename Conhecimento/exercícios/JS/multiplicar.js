for (let i = 1; i <= 10; i++){
    // document.write(valor + ' x ' + i + " = " + (valor * i) + "<br>")
    document.write('<b><p>Tabuada do ' + i + '</p></b>' )

    for (let j = 1; j <= 10 ; j++){
        document.write(i  + ' x ' + j + " = " + (j * i) + "<br>")
    }
}