function tabuada(){ //!Criando a função
  let num = document.getElementById('txtn') //!Chamando o texto digitado pelo user
  let tab = document.getElementById('seltab') //!Chamando o select que a atabuada aparecerá
  if(num.value.length == 0 ){ //!Criando um IF caso o comprimento do texto seja 0
    window.alert('Por favor digite um número') //!Caso seja 0 aparecerá um mensagem
  }else{
    let n = Number(num.value)//!Definindo N como valor de num , Definindo C como contador
    let c = 1
    tab.innerHTML = '' //!Limpando o innerHTML do select
    while(c <= 10){ //! Enquanto C for menor que 10
      let item = document.createElement('option') //!Criando o item option
      item.text = `${n} x ${c} = ${n*c}` //!Atribuindo o texto dentro no item
      item.value = `tab${n}`//!Atribui o value tab+n para cada option criado
      tab.appendChild(item) //! Adiciona ao elemento -tab- o filho -item- na árvore DOM
      c++ //!Acrescenta 1 no valor do contador
    }
  }
}