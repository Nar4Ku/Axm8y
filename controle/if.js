function soBoaNotica(nota){
    if(nota >= 7){
        console.log(`Aprovado com ${nota}`)
    }
}

soBoaNotica(8.1)

function seForVerdade(valor){
    if(valor){
        console.log(`É verdade ${valor}`)
    }
}

seForVerdade()
seForVerdade(-1)
seForVerdade(0)
seForVerdade('')

const imprimirResultado = function(nota){
    if (nota >= 7){
        console.log('Aprovado!')
    } else{
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('epa') //cuidado 


Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultadoNum = function(nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de Honra!')
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota Inválida')
    }
}

imprimirResultadoNum(10)
imprimirResultadoNum(8.9)
imprimirResultadoNum(6.5)
imprimirResultadoNum(3)
imprimirResultadoNum(-1)