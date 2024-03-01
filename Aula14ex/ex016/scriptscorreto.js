function contar(){
    var inicio = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim') //! Não precisa definir como Number AQUI nem pegar o VALUE 
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ){ //!Caso o comprimento do valor seja 0 vai dar erro
        //TODO - AQUI PODE COLOCAR ASSIM PRA FACILITAR NA HORA DE PEGAR OS VALUEs
        res.innerHTML = "Impossível contar"
        //window.alert('ERRO: DADOS FALTANDO')
    } else{
        res.innerHTML = `Contando: <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value) //! Definindo as variáveis para poder usar as contas mais faceis  
        let p = Number(passo.value)
        if(p==0){
            window.alert('ERRO : Considerando o p = 1') //! Caso o -p- seja igual a 0 o navegador vai travar
            p = 1
        }
        if(i<f){
            for(let c = i;c <= f; c+=p){
                res.innerHTML += `${c} \u{1F449}` //! Contagem PROGRESSIVA
            }
        } else{ 
            for(let c = i; c >= f; c-= p){
                res.innerHTML += `${c} \u{1F449}` //!Contagem REGRESSIVA
            }
        }
    }
    res.innerHTML += `\u{1F3C1}` //!Bandeira
}  