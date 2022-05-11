const pessoa = {
    nome: 'Raphael',
    sobrenome: 'Goulart',
    idade: '34',
    profissao: 'Engenheiro Civil'

};

console.log(pessoa);

//let nome = pessoa.nome;
//let sobrenome = pessoa.sobrenome;
//let idade = pessoa.idade;
//let profissao = pessoa.profissao;

//console.log(pessoa.nome);

let { nome, sobrenome, idade, profissao} = pessoa; //forma desestruturada que está olhando para o objeto
console.log(nome, sobrenome, idade, profissao);