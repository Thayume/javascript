let num = document.getElementById('inum')

let lista = document.getElementById('numres')

let res = document.getElementById('res')

let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }

}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function Adicionar(){
    //só vai adicionar se for um número e se não estiver na lista

    // a exclamação em !in Lista significa não em JS
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))

        let item = document.createElement('option')

        item.text = `valor ${num.value} adicionado`

        lista.appendChild(item)

        // quando um novo elemento for adicionado na lista já existente vai ser limpa a tela:

        res.innerHTML = ''
        } else{
            window.alert('valor inválido ou já encontrado na lista!')
        }

        // para apagar sozinho e não precisar ficar clicando para apagar utilizar:

        num.value = ''
        num.focus()
}

    function fim(){
        if (valores.length == 0){
            window.alert('adicione valores antes de finalizar')
        }else{

            let tot = valores.length

            let maior = valores[0]

            let menor = valores [0]

            let soma = 0

            let media = 0

            for (let pos in valores){


                soma += valores[pos]   

                if (valores [pos] > maior ) maior = valores [pos]

                if (valores[pos] < menor) menor = valores[pos]
            }

            media = soma / tot


            res.innerHTML = ''
            res.innerHTML += `<p> ao todo temos ${tot} números cadastrados </p> `

            res.innerHTML += `<p> O maior valor informado foi foi: ${maior}.</p> `

            res.innerHTML += `<p> O menor valor informado foi foi: ${menor}.</p> `

            res.innerHTML += `<p> Somando todos os valores temos: ${soma}.</p> `

            res.innerHTML += `<p> a média dos valores é: ${media}.</p> `

        }
    }




























































/* if (num.value.length == 0 || num.value.length >= 100 ){
    window.alert('[ERRO] digite um número!')
} else {

    let n = Number(num.value)

    let c = 0

    while (c <= 100){

        let item = document.createElement('option')

        item.text = `Valor ${n} adicionado`

        result.appendChild(item)

        c++
    }
} 



  for ( let result = 0; n > 0; n++){
    result.innerHTML += `Valor ${n} adicionado`
}  

}

function fim(){
    let num = document.getElementById('inum')

    let n = Number(num.value)

    let result = document.getElementById('numres')

    for (var c = 1; n <= 100; n++){
        result.innerHTML= ``

    }


}
 */