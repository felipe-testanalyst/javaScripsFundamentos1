
const pessoa = {
    nome: 'Felipe',
    idade: 38,
    cpf: '111222333',
    email: 'felipe@teste.com'
}

console.log (`O nome de cliente é ${pessoa["nome"]}, e o CPF é ${pessoa["cpf"].substring(0,3)}XXXXX-XX`);


// Utilizada caso nao tenhamos informacoes sobre as propriedades do objeto.

const propriedades = ["nome", "idade", "cpf", "email"]

propriedades.forEach((prop) => {
    console.log(`O valor da ${prop} tem valor ${pessoa[prop]}`);
})
