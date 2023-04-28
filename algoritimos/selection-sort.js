const livros = require("./lista-livros");
const menorValor = require("./menor-valor");
const switchItems = require("./switch");


for (let atual = 0; atual < livros.length - 1; atual++){
    let menor = menorValor(livros, atual)
    switchItems(livros, menor)
}

console.log(livros)