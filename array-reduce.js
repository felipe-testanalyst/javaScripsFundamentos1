const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma) //170

//----------------------
const notas = [10, 9, 7, 5, 9, 7]

function calculaMedia (notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acc, nota) => {
        return acc + nota;
    }, 0);
    const media = somaDasNotas/notasDaSala.length;
    return media;
}

console.log (`A media da sala é ${calculaMedia(notas)}`)