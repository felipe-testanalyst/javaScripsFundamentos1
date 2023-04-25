const dados = require("./cliente.json");

console.log(dados);

const objetoEmString = JSON.stringify(dados);
console.log(objetoEmString);

const objetoEmJson = JSON.parse(objetoEmString );
console.log(objetoEmJson);