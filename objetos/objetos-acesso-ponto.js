

const pessoa = {
    nome: 'Felipe',
    idade: 38,
    cpf: '111222333',
    email: 'felipe@teste.com'
}

console.log(pessoa.nome);
console.log (`O nome de cliente é ${pessoa.nome}, e o CPF é ${pessoa.cpf.substring(0,3)}XXXXX-XX`);