const numeros = [100, 200, 300, 400, 500, 600];

for(let numero of numeros){
    console.log(numero);
}


const listaDeNotas = [10, 6.5, 8, 7.5];

function calculaMedia(notas){
    let somaDasNotas = 0;
    for(let nota of notas){
        somaDasNotas += nota;
    }
    return somaDasNotas/notas.length;

}

console.log(`A média das notas é ${calculaMedia(listaDeNotas)}`)