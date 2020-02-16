const sequencia = {
    _valor: 1, // convenção para outras pessoas pelo "_" para dizer que é "privado"
    get valor() { return this._valor++},
    set valor(valor) { 
        if(valor > this.valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)