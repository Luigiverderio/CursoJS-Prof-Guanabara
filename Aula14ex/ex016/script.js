function contar(){
    var inicio = Number(window.document.getElementById('txtini').value)
    var fim = Number(window.document.getElementById('txtfim').value)
    var passo = Number(window.document.getElementById('txtpasso').value)
    var res = window.document.getElementById('res')
    if(inicio == 0){
        alert('Preencha todos os campos')
    } else if(fim == 0){
        alert('Preencha todos os campos')
    } else if(passo == 0){
        alert('Preencha todos os campos')
    } else if(inicio > fim){
        res.innerHTML = "Contando: <br>"
        for(inicio;inicio > fim;inicio-=passo){
            res.innerHTML += ` ${inicio}  \u{1F449}`
        }
        res.innerHTML += ` \u{1F3C1}`
    } else if(passo > fim){ 
        alert('O passo não pode ser maior que o fim!')
    } else{
        res.innerHTML = "Contando:"
        for(inicio;inicio < fim;inicio+=passo){
            res.innerHTML += ` ${inicio} \u{1F449}`
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}   