
//*Verificador de dia da semana
//O comando switch é uma estrutura que serve para verificação de dados integros
//!Lembre se colocar o --break--, caso contrário será mostrado todos os blocos de comandos apartir do case que der true

var diaDaSem = new Date()
var dia = diaDaSem.getDay()
switch(dia){
    case 0: console.log(`Hoje é Domingo!`)
    break
    case 1: console.log(`Hoje é Segunda`)
    break
    case 2: console.log(`Hoje é Terça`)
    break
    case 3: console.log(`Hoje é Quarta`)
    break
    case 4: console.log(`Hoje é Quinta`)
    break
    case 5: console.log(`Hoje é Sexta`)
    break
    case 6: console.log(`Hoje é Sábado`)
    break
    default: console.log(`ERRO: Dia inválido`)
    break
}