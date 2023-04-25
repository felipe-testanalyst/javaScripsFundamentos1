

const pessoa = {
    nome: 'Luma',
    profissao: 'Engenheira',
    sexo: 'Feminino',
}

const pessoaNova = {
    nome: 'Joao',
    profissao: 'Palhaço',
}

pessoa.telefone = '99988-8777';

//console.log(pessoa)

pessoa.nome = 'Luma de Oliveria';
//console.log(pessoa)

function deletaSexo(objeto){
    if (pessoa["sexo"]){
        delete pessoa.sexo
        console.log("Sexo deletado")
    }else{
        console.log("Atributo nao existente")
    }
}

deletaSexo(`Teste${pessoa}`);
deletaSexo(`Teste${pessoaNova}`);