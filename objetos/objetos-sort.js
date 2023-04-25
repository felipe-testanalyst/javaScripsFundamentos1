const clientes = require("./clientes.json")

function sortClients(array, param, ordem = "Ascending"){
    const results = array.sort((a, b) => {
        if(a[param] < b[param]){
            return -1
        }
        if(a[param] > b[param]){
            return 1
        } 
        return 0
    });

    if(ordem !== "Ascending"){
        results.reverse();
    }
    return results;
}

const sortedList = sortClients(clientes, "nome", "Descending");
console.log(sortedList);