//Expressao de funcao

//Neste exemplo com funcao voce pode chamar a funcao antes de ser declarada por JS primeirament le todas as funçoes
imprimeTexto("Olá")

function imprimeTexto(texto){
    console.log(texto);
}

//NEste exemplo usando expressao de funcao nao podemos chamar a funcao antes de ser inicializada
const soma = function(num1, num2) {return num1 + num2}
console.log(soma(1,1));
