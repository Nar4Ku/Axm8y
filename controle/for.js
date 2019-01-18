let i = 1
while(i <= 10){
    console.log(`Contador = ${i}`)
    i++
}

for(let i = 1; i <= 10; i++){
    console.log(`Contador FOR: ${i}`)
}

const nota = [6.7, 7.4, 9.8, 7.7]
for(let i = 0; i < nota.length; i++){
    console.log(`Notas = ${nota}.`)
}

// FOR/IN 

const notas = [5.6, 7.8, 9.2, 3.5]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 61
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
