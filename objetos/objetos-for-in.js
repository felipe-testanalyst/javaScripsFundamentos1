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

for(let key in cliente){
    let tipo =  typeof cliente[key];
    if(tipo !== 'function' &&  tipo !== 'object'){
        console.log(`A chave ${key} tem valor ${cliente[key]}`);
    }
}
