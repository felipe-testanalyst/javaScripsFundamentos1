//slice - nao altera array inicial. Recebe[posicao inicial, posicao final]
const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
alunos.slice(0, 10);
console.log(alunos);

const primeraSala = alunos.slice(0, alunos.length/2);
const segundaSala = alunos.slice(alunos.length/2);
console.log(primeraSala);
console.log(segundaSala);


//splice - altera array inicial. Recebe[pocisao inicial, numero de itens ser removido, opcional valor a substituir items removidos]
const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
nomes.splice(1, 2, "Rodrigo");
console.log(nomes)
