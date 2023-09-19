function verificar(){

let num = document.getElementById('inum')

let tabu= document.getElementById('tabu')

if (num.value.length == 0){
    window.alert('digite um número')
} else {
    let n = Number(num.value)

    let c = 1

    // antes de começar a tabuada o código abaixo vai rodar para não ficar acomulando tabuadas anteriores:

    tabu.innerHTML = ''

    //vai começar no let c

    while (c <=10){
        // para criar qualquer elemento dentro de JS podemos fazer diretamente no HTML como o exemplo lá ou utilizar:

        // dentro do select para eu ter opções precisamos das options

        let item = document.createElement('option')

        item.text = `${n} x ${c} = ${n*c}`

        //para a tabuada aparecer precisamos utilizar o código de adicionar um elemnto filho:

        tabu.appendChild(item)

        c++

    }

   
}


}