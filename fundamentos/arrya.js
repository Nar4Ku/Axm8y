const valores  = [7.7, 9.2, 6.3, 8.9]

console.log(valores[0], valores[3])
console.log(valores[4])
console.log(valores.length + ' length')

valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(typeof valores)