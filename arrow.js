const multiplica = function (x, y) { //função criada dentro da constante
    return x * y;
};

console.log(multiplica(2, 10));


const dividir = (x, y) => { //arrow function você cria uma função secreta dentro de uma constante
    return x / y;
};

console.log(dividir(10, 2));


const objeto = () => ({ nome: "Raphael", sobrenome: "Goulart"});

console.log(objeto(objeto.nome, objeto.sobrenome));