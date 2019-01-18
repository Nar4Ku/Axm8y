const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10: case 9:
            console.log(`Quadro de Honra com nota ${nota}!`)
            break
        case 8: case 7:
            console.log(`Aprovado com nota ${nota}`)
            break
        case 6: case 5: case 4:
            console.log(`Recuperação com nota ${nota}`)
            break
        case 3: case 2: case 1:  case 0:
            console.log(`Reprovado com nota ${nota}`)
            break

        default:
            console.log(`Esse valor "${nota}" é uma nota inválida!`)
    }
}

imprimirResultado(0)
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(5.6)
imprimirResultado(-1)