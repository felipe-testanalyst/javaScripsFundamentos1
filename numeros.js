let a = 0;
let b = 0 ;
console.log(a/b);

const restoDaFrase = 'para concatenar frases,'
const templateStringExample = `Eu utilizo template string ${restoDaFrase} \u2705`;
console.log(templateStringExample);


const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(inputMinusculo); // true
console.log(inputMinusculo.length)

function minimizaPalavra(palavra){
    palavra = palavra.toLowerCase();
    return palavra
}

const palavraMenor = minimizaPalavra(input);
console.log(palavraMenor);