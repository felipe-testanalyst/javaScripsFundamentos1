let a = 0;
let b = 0 ;
console.log(a/b);

//Template string

const restoDaFrase = 'para concatenar frases,'
const templateStringExample = `Eu utilizo template string ${restoDaFrase} \u2705`;
console.log(templateStringExample);

// type string
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

//Conversao implicita
const numero = 455;
const numeroString = "455";
console.log(numero == numeroString) //true pois "==" compara valores da variavel
console.log(numero === numeroString) //false pois "===" compara valores e tipo da variavel
console.log(numero + numeroString)
 
//conversao explicita
console.log(numero + Number(numeroString))


//Operador ternário

const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima){
    console.log("Cerveja");
}else{
    console.log("suco");
}

console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco") //Suco - Exemplo com operador ternario

