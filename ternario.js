let isValid = 10 //variavel booleana

// sem ternário
function verify(isValid) {
    if (isValid < 15) { // se quiser saber se é falso coloque a ! na frente da variavel, não é necessário perguntar se é == igual
    return true;
    } else {
    return false;
    }
}

console.log(verify(isValid));

//com ternário

const result = isValid ? true : false;

let zero = 0;

const numeroResultado = zero == 0 ? 0 : -1;

console.log(numeroResultado);