function fatorial (n){
    let fat = 1
    //5! = 5x4x3x2x1 = 120
    //enquanto contador for maor que 1, contador perde 1
    for (let c = n; c > 1; c-- ){
        //fat vai receber fatorial * c
        fat *= c
    }
    return fat 
}
console.log(fatorial(5))