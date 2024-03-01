var momento = new Date()
var hora= momento.getHours()
var hora = hora
console.log(`Agora são exatamanete ${hora} horas.`)
if (hora <= 12){
    console.log(`Bom dia!`)
}else if(hora <= 18){
    console.log(`Boa tarde!`)
}else{
    console.log(`Boa noite!`)
}