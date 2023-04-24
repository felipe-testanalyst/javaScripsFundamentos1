const arrayOriginal = [7, 7, 8, 9];

function alteraArray(array) {
  array.push(10);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray([...arrayOriginal]);

//----

const numeros = [1, 2, 3, 4, 5];
const novosNumeros = [0, ...numeros, 6];
console.log(`Os numeros originais sao ${numeros}`);
console.log(`Os novos numeros sao ${novosNumeros}`);