const prod1 = {}

prod1.nome = 'Celular Ultra mega '
prod1.preco = 499.90
prod1['Desconto Legal'] = 0.4 //evitar atributos com espaço


console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{
        tipo: 'typeof',
        obj: 'pode ter'
    }
}
console.log(prod2)