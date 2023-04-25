const cliente = {
    nome: "Felipe",
    idade: 45,
    telefone: ["11 888488488", "11 999888777"],
    saldo: 200,
    efetuaPagamento: function (valor){
        if(valor > this.saldo){
            console.log('Valor indisponível')
        }else{
            this.saldo -= valor;
            console.log(`Compra efetuada com sucesso. Novo saldo ${this.saldo}`) 
        }
    }
}

cliente.efetuaPagamento(200);