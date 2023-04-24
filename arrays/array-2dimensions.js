//Array com duas dimencoes

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(listaDeAlunosEMedias);

//para acessar primeira posicao e a posicao da lista, e depois a posicao do item
console.log(`O nome da aluna é ${listaDeAlunosEMedias[0][1]}, e sua nota é ${listaDeAlunosEMedias[1][1]}`);