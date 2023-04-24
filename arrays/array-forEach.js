const numeros = [100, 200, 300, 400, 500, 600];

numeros.forEach(function(numero){
    console.log(numero)
})


const listaDeNotas = [10, 6.5, 8, 7.5];

function calculaMedia(lista){
    let somaDasNotas = 0;
    listaDeNotas.forEach(function(nota){
        somaDasNotas += nota;
    });
    return somaDasNotas/listaDeNotas.length;
}

console.log(`A média das notas é ${calculaMedia(listaDeNotas)}`)


const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma) //15

