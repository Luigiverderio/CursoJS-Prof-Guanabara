let num = [8, 0, 6]; // Criando uma variável composta

// TODO : Adicionar um valor adicional ao vetor

num[3] = 12; // Adicionado o número 12 no índice 3 do vetor

console.log(`Nosso vetor é o ${num}`); // Exibindo o conteúdo da array

console.log(num.length)// Retornando a quantidade de elementos dentro do vetor

// document.getElementById('res').innerHTML= `O VETOR tem ${num.length} posições` ; // Mostrando a quantidade de posições
/*
Para acessarmos os valores individualmente usamos:
*/

console.log(`O primeiro valor do nosso vetor é ${num[0]}`)
console.log(`O segundo valor do nosso vetor é ${num[1]}`)
console.log(`O terceiro valor do nosso vetor é ${num[2]}`)

//!Estou usando várias extensões divertidas!

console.warn('Eu sou um aviso')

function soma(a,b){
  return(a+b)
}
console.log(soma(5,4))