
function menorValor(arrayProd, posicaoInicial){
    let maisBarato = posicaoInicial;
    
    for(let atual = posicaoInicial; atual < arrayProd.length; atual++){
        if(arrayProd[atual].preco < arrayProd[maisBarato].preco){
            maisBarato = atual;
        }
    }
    return maisBarato;
}


module.exports = menorValor;