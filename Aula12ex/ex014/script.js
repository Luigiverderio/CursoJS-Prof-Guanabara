function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom dia
        foto.src ='img/fotomanha.jpg'
        document.body.style.backgroundColor = '#E0B02A'
        msg.innerHTML += `<br>Bom dia!`
        
    } else if(hora >= 12 && hora <= 18){
        //Boa tarde
        foto.src ='img/fototarde.jpg'
        document.body.style.backgroundColor = '#B2581A'
        msg.innerHTML += ` <br>Boa tarde!`

    }else{
        //Boa noite
        foto.src ='img/fotonoite.jpg'
        document.body.style.backgroundColor = '#112138'
        msg.innerHTML += `<br>Boa noite!`

    }
}