const cliente = {
    nome: "Felipe",
    idade: 45,
    telefone: ["11 888488488", "11 999888777"]
}

console.log(cliente.telefone[0]);
console.log("-----------------")

cliente.endereco = [{
    rua: "Alguma",
    numero: 445,
    apartamento: true,
    complemento: "ap 44",
}]

console.log(cliente.endereco);
console.log("-----------------")

cliente.endereco.push({
    rua: "Outra",
    numero: 455,
    apartamento: false
})

console.log(cliente)
console.log("-----------------")

const listaDeApartamentos = cliente.endereco.filter((endereco) => endereco.apartamento === true )
console.log(listaDeApartamentos)
console.log("-----------------")