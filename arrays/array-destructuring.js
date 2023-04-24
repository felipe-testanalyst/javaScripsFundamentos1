const alunos = ['Ana', 'Felipe', 'Natasha'];
const medias = [10, 8, 9];
const listaDeAlunosEMedias = [alunos, medias]


//abaixo usando a lista de  alunos e medias para fazer a busca
function exibeAlunoENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        console.log('Aluno cadastrado');
        const [alunos , medias] = listaDeAlunosEMedias; 
        const indexDoAluno = alunos.indexOf(aluno)
        const mediaDoAluno = medias[indexDoAluno];

        console.log(`A média de ${aluno} é ${mediaDoAluno}`)
        
    }else{
        console.log('Aluno não cadastrado');
    }
}

exibeAlunoENota('Ana')