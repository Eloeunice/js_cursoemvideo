// ANALISADOR DE NÚMEROS 
let lista = []

function adicionar() {
    // Guardar o numero
    let num = document.getElementById("num")
    let n = Number(num.value)
  
    // Verificar se o numero esta entre 1 e 100
    if (0 > n || n > 100 || n == 0) {
        window.alert(`Numero fora do intervalo de 1 a 100!`)
        
    } else{
         // Salvar na lista
            lista.push(n)
         // imprimir na box
            let linha = document.createElement('p') // corpo um novo paragrafo
            logs.appendChild(linha) // coloco esse paragrafo dentro de uma div
            linha.innerHTML = `O número ${n} foi adicionado a lista` // defino o texto desse paragrafo

    }
     num.value = ''
     num.focus()
}
     
/* No Finalizar
     Linha para a quantidade de numeros na lista
     Linha para o maior numero
     Linha para o menor numero
     Linha para a soma dos valores
     Linha para a media dos valores

     funcion
*/
function finalizar(){

        let maior = Math.max(lista)
        let menor = Math.min(lista)
        function soma(){
            let res = 0
            for (i in lista){
                res += lista[i]
            } return res
        } 

        function media(){
            let media = soma(lista) / lista.length
            return media
        }
        
        let htmlContent = `
        <p>Ao todo temos ${lista.length} elementos</p>  
        <p>O maior número é ${maior}</p>
        <p>O menor número é ${menor}</p>
        <p>A soma de todos os valores é ${soma(lista)}</p>
        <p>A média dos valores é ${media(lista)}</p>
    `

        resultado.innerHTML = htmlContent;
}
  