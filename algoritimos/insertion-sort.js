const livros = require('./lista-livros')
const switchItems = require('./switch')

function insertionSort(arr){
    for(let actual = 0; actual < arr.length; actual++ ){
        let subject = actual;
        while(subject > 0 && arr[subject].preco < arr[subject - 1].preco){
            switchItems(arr, subject);
            subject--
        }
    }

    console.log(arr);
}

insertionSort(livros);