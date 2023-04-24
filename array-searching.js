

const alunos = ['Ana', 'Felipe', 'Natasha'];
const medias = [10, 8, 9];

function exibeAlunoENota(aluno){
    if(alunos.includes(aluno)){
        console.log('Aluno cadastrado');
        const indexDoAluno = alunos.indexOf(aluno)
        const mediaDoAluno = medias[indexDoAluno];

        console.log(`A média de ${aluno} é ${mediaDoAluno}`)
        
    }else{
        console.log('Aluno não cadastrado');
    }
}

exibeAlunoENota('Ana')

//veja array-destructuring para procura de array de 2 dimensoes