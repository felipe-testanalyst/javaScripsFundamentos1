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

function verificaEndereco(cliente){
    const objectKeys = Object.keys(cliente)
    if(!objectKeys.includes("endereco")){
        console.error('Endereço nao providenciado')
    }else{
        console.log(cliente.endereco)
    }
}

verificaEndereco(cliente)