const clientes = require("./clientes.json")

function filtraClienteSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const listaSemComplemento = filtraClienteSemComplemento(clientes);
console.log(listaSemComplemento);