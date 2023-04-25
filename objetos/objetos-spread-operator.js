const cliente = {
    nome: "Felipe",
    idade: 45,
    telefone: ["11 888488488", "11 999888777"]
}

cliente.endereco = [{
    rua: "Alguma",
    numero: 445,
    apartamento: true,
    complemento: "ap 44",
}]

const encomenda = {
    destinatario: cliente.nome, 
    ...cliente.endereco[0]
};
console.log(encomenda)