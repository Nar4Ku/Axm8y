// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade } = pessoa
console.log(nome,idade)

const {nome: n, idade: i} = pessoa
console.log(n, 1)

//a parti de array

const [n1, ,n3, n5, n6] = [10, 7, 8, 9]
console.log(n1, n3, n5, n6 )

function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([]))
