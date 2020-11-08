// Tarea 1

function esPar(num){
    return (num % 2 == 0) ? 'Par' : 'Impar'
}
console.log(esPar(12))

function posicion(letra){
    return 'abcdefghijklmnñopqrstuvwxyz'.indexOf(letra)
}
console.log(posicion('e'))

function sumIva(monto){
    return monto + (monto * 0.19)
}
console.log(sumIva(1000))

function sumIva(monto){
    return monto + (monto * 0.19)
}

function nuevoDado(nombre){
    return function (){
        console.log(nombre + " tiró un dado y salió " + (Math.floor(Math.random() * (6 - 1 + 1)) + 1))
    }
}

var dadoHector = nuevoDado('Hector')
dadoHector()
dadoHector()
dadoHector()
dadoHector()
dadoHector()
dadoHector()