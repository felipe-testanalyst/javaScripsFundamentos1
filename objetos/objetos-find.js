const lista = require("./clientes.json");


function encontra(array, key, value){
   return array.find((item) => item[key].includes(value));
}

const encontrado = encontra(lista, "nome", "Kirby");
console.log(encontrado)

const encontrado2 = encontra(lista, "telefone", "5193301028");
console.log(encontrado2)

