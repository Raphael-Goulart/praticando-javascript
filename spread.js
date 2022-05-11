let lista = [1, 2, 5];
let listaIncluir = [3, 4];

console.log(lista);
console.log(listaIncluir);

for(let i = 0; i < listaIncluir.length; i++){
    for(let j = 0; j < lista.length; j++){
        if(lista[j] >= listaIncluir[i]){
            lista.splice(j, 0, listaIncluir[i]);
            j++;
        }
    }

}

console.log(lista);


//mesma coisa de cima só que utilizando spread operator
const listResult = [1, 2, ...listaIncluir, 5] //esse spread ... ele pega valores e se adapata a onde está sendo aplicado ele pode concatenar com objetos ou trabalhar só com números

console.log(listResult)


//

let arr = ['a', 'b', 'c'];

let arr2 = [...arr];

arr.push('d');

console.log(`arr = ${arr}`);
console.log(`arr2 = ${arr2}`);