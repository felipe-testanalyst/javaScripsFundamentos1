const livros = require("./lista-livros");
const menorValor = require("./menor-valor");


for (let atual = 0; atual < livros.length - 1; atual++){
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual];
    let livroMaisBarato = livros[menor];

    livros[atual] = livroMaisBarato;
    livros[menor] = livroAtual;
}

console.log(livros)