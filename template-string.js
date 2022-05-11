// let é uma forma de declarar variáveis em JS moderno, substitui o var

let meuNome = 'Raphael';
let meuSobrenome = 'Goulart';
let minhaProfissao = 'Front-end Developer'

//sem template string 
console.log(
   'Olá, eu sou ' + 
    meuNome + 
   ' ' + 
     meuSobrenome + 
   ' minha profissão é: ' +
     minhaProfissao
);

//com uso de template string o texto será interpolado, não terá concatenação e o código fica mais legível.

console.log(`Olá meu nome é ${meuNome} ${meuSobrenome} e minha profissão é ${minhaProfissao}`);

console.log(`O resultado dessa conta 10 vezes 5 é  ${[10*5]/2} será? sim claro!`);


console.log(`O objeto json ${{ chave: 'valor' }}`) //aqui é criado um literal a partir de chaves 