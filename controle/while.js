function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
 }

 let opcao = 0

 while (opcao != -1){
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi: ${opcao}.`)
 }

 console.log('Até a próxima!')

//  do while

function getRandon(max, min){
    const num = Math.random() * (max - min) + min
    return Math.floor(num)

}

let flag = -1

do {
    flag = getRandon(-1, 10)
    console.log(`Opções escolhidas foram: ${flag}.`)
} while(flag != -1)

console.log('Fim Do While')