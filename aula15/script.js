let num = [4,5,6,7]

console.log(num)

num[3] = 10 // coloque o número 6 na posicao 3
num.push(11)  // coloca um novo valor no array
num.length // não é método, é atributo (caracteristica)
num.sort() // coloca os elementos em ordem crescente

for (i in num){
    console.log(num[i])

}

let pos = num.indexOf(5) // retorna onde esta determinado valor
console.log(pos)