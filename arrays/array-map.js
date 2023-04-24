const notas = [10, 9.5, 6, 7, 8]

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 > 10 ? nota : nota + 1;
})

console.log(notasAtualizadas);

//Map com strings
const nomes = ['PEDro SilvA', 'bia Camoes', 'Juliana LARA']
const nomesTratados = nomes.map((nome) =>{
    return nome.toUpperCase();
})

console.log(nomesTratados);

//arrow function returning simple result cn be written
const nomesTratados2 = nomes.map((nome) => nome.toUpperCase())

console.log(nomesTratados2);