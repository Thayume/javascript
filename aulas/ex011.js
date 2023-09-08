var idade = 22

console.log(`Você tem ${idade} anos portanto:`)

if (idade < 16){
    console.log('não vota')
}else if(idade < 18 || idade >65){
    console.log('voto opcional')
} else {(idade >= 18) 
    console.log('voto obrigatório')
}