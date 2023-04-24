const nomes = ['Felipe', 'Natasha', 'Sinara']

nomes.forEach(function(nome){
    console.log(nome);
})

//using arrow function
nomes.forEach((nome) => {
    console.log(nome)
})


//calling functions
function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);