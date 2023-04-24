console.log('Calculando media')
const notas = [10, 6.5, 8, 7.5];
const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length 
console.log(`Valor da media é ${media} \n`)

//push
console.log('Calculando media com push')
const notasDois = [10, 6.5, 8];
notasDois.push(7.5)
console.log(notasDois)
const mediaDois = (notasDois[0] + notasDois[1] + notasDois[2] + notasDois[3])/notas.length 
console.log(`Valor da media com push é ${mediaDois} \n`)

//pop - remove last item
console.log('Calculando media com pop')
const notasTres = [10, 6.5, 8, 7.5, 5];
notasTres.pop()
console.log(notasTres)
const mediaTres = (notasTres[0] + notasTres[1] + notasTres[2] + notasTres[3])/notas.length 
console.log(`Calculando media com pop ${mediaTres} \n`)

//array esparso
console.log('Exemplo de array esparso')
const arrayVazia = [,,,];
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length)

