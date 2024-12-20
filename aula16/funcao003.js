function fatorial(n){
    let fat = 1
    for(let c = n; c > 1 ; c--){  // comeca com o numero do parametro, e vai ate ele ser maior que um, diminuindo 1 
        fat *= c // 1 vai sendo multiplicando e recebeno o valor de c 
    }
    return fat
}

console.log(fatorial(5))