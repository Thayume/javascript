function contar(){

    var num1 = document.getElementById('inum1')

    var num2 = document.getElementById('inum2')

    var passo = document.getElementById('ip1')

    // "var" pode ser ecrita como "let"

    result = document.getElementById('result')

    
    if (num1.value.length == 0 || num2.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam Dados')
    }else{
        result.innerHTML = 'contando: '

        var um = Number(num1.value)
        var dois = Number(num2.value)
        var p = Number(passo.value)
    

        //vai começar no início (num1) e enquanto "c" for menor ou igual ao (num2) o "c" vai receber ele mesmo mais o "passo"

        for (var c = um; c <= dois; c += p){
        result.innerHTML += ` ${c}`
        }
    }





}