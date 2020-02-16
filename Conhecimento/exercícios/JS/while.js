let i = 1
let j = 1


while(i <= 10){
    document.write("<p>" + "Tabuada do " + i + "</p>")
    while(j <= 10){
    document.write('<p>' , i ,' x ', j , ' = ', (i * j), '</p>')
    j++
    }
    j = 1
    i++
}