
const livros = require("./lista-livros");
const menorValor = require("./menor-valor");

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)

    let livroAtual = livros[indice];
    let livroMaisBarato = livros[menor];

    livros[indice] = livroMaisBarato;
    livros[menor] = livroAtual;
})

console.log(livros)