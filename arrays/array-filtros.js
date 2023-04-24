const alunos = ['Joao', 'Pedro', 'Natasha', 'Felipe'];
const notas = [ 10, 8, 9, 5]

const reprovados = alunos.filter((aluno, index) => {
    return notas[index] < 7;
})


console.log(reprovados);