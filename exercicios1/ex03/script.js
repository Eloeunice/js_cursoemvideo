function contar() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    
    if (i == 0 || f == 0 || p == 0){
        window.alert("[ERRO] FALTAM DADOS!")
    } else {
         for(let c = i; c <= f;c += p){
            res.innerHTML += `${c} -> `
        }
    }
   
    

   
}
    