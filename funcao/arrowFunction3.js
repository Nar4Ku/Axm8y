let compraComThis = function (param){
    console.log(this === param)
}
compraComThis(global)

const obj = {}
compraComThis = compraComThis.bind(obj)

compraComThis(global)
compraComThis(obj)

let compraComThisArrow = param => console.log(this === param)
compraComThisArrow(global)
compraComThisArrow(module.exports)

compraComThisArrow = compraComThisArrow.bind(obj)
compraComThisArrow(obj)
compraComThisArrow(module.exports)
