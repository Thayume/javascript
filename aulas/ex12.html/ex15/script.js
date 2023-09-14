function verificar(){

   var data = new Date()

   var ano = data.getFullYear()

   var fano = document.getElementById('itxtano')

   var res = document.querySelector('div#result')

   var resimg = document.querySelector('div#resultimg')

   if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] verifique os dados novamente! Coloque um ano válido')
    
   }else {

    
    var fsex = document.getElementsByName('radsex')
    
    var idade = ano - Number(fano.value)

    var genero = ''

    var img = document.createElement('img')

    img.setAttribute('id', 'foto') // este código pode ser feito no HTML colocando um id diretamente por lá, ou por aqui usando este código

    if (fsex[0].checked){
        genero = 'Homem'
            if (idade >=0 && idade < 10) {// criança
                img.setAttribute('src', 'bebehomi.jpg')
            } else if (idade >=10 &&idade < 21){
                //jovem
                img.setAttribute('src', 'jovemhomi.jpg')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src', 'adultohomi.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'veiohomi.jpg')
            }

    }else if (fsex[1].checked) {
        genero = 'mulher'
            if (idade >=0 && idade < 10) {// criança
                img.setAttribute('src', 'bebemuie.jpg')
            } else if (idade >=10 &&idade < 21){
                //jovem
                img.setAttribute('src', 'jovemmuie.jpg')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src', 'adultamuie.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'veiamuie.jpg')
            }
            
    }

    res.style.textAlign = 'center'

    res.innerHTML = ` Detectamos ${genero} com ${idade} anos`
     

    resimg.appendChild(img)

    

    
   
   }
}
