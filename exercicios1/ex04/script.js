function gerar() {
    var numero = document.getElementById("num")
    var num = Number(numero.value)
    
    if (num == 0){
        window.alert("[ERRO] FALTAM DADOS!")
    } else {
         for(let c = 1; c <= 10; c++ ){
            // Multiplicar c pelo for de 1 a 10
            let res = num * c
            resultado.innerHTML += `${num} x ${c} = ${res}`
            // Criar um paragrafo para cada multiplicação
            let linha = document.createElement("p");
            resultado.appendChild(linha)
            
            
            
           
        }
    }
   
    

   
}
    