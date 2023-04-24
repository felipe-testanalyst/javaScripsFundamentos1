//Arrow function

const imprimeApresentacao = nome => console.log(`Olá meu nome é ${nome}`);
imprimeApresentacao("Felipe");

//Quando a funcao tem mais de uma linha de comando e necessario utilizar chaves{} e return

const calculaNumeroPequeno = (num1, num2) =>{
    if(num1 > 9 || num2 >9){
        return console.error("Aceita somente numeros de 0 a 9");
    }else{
        return console.log(num1 + num2);
    }
} 

calculaNumeroPequeno(9,9);