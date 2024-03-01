function verificar(){
    var data = new Date()
    var anoatual = data.getFullYear()
    var anonasc = window.document.getElementById(`txtano`)
    var res = document.getElementById(`res`)
    if(Number(anonasc.value) > anoatual || anonasc.value.length == 0 || Number(anonasc.value) < 1920){

        alert(`Insira uma data válida`)
    
    }else{

        var sex = document.getElementsByName(`radsex`)

        idade = anoatual - Number(anonasc.value)

        var gênero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sex[0].checked){

            gênero = 'Homem'

            if(idade >= 0 && idade < 10){
                //Criança
            img.setAttribute('src', 'img/bebehomem.jpg')

            }else if(idade <21){
                //Jovem
            img.setAttribute('src', 'img/jovemhomem.jpg')

            }else if(idade < 50){
                //Adulto
            img.setAttribute('src', 'img/adultohomem.jpg')

            }else{
                //Idoso
            img.setAttribute('src', 'img/idosohomem.jpg')

            }

        }else if(sex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'img/bebemulher.jpg')

            }else if(idade <21){
                //Jovem
            img.setAttribute('src', 'img/jovemmulher.jpg')

            }else if(idade < 50){
                //Adulto
            img.setAttribute('src', 'img/adultomulher.jpg')

            }else{
                //Idoso
            img.setAttribute('src', 'img/idosomulher.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
        
    }
}
