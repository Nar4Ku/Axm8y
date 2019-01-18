//funcao sem retorno
 function imprimirSoma(a, b){
     console.log(a+b)
 }
 imprimirSoma(2, 3)
 imprimirSoma(2)

//  funcao com retorno 
function soma(a, b = 3) {
    return a + b
}

console.log(soma(2, 2))

//Armazenando uma função em uma variavel
const printSoma = function (a, b){
    console.log(a +b)
}

printSoma(2, 3)

const subtracao = (a, b) => a - b

console.log(subtracao(53, 1))