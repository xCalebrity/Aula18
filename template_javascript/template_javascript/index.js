/*
Exercícios de interpretação de código
=============================
(1)
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

Este código soma os valores inseridos na variavel "i", 
até o quinto valor, 0 + 1 + 2 + 3 + 4 = 10.

==============================
(2)

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

(a) O código irá imprimir os números listados que forem maiores do que 18.
(B) Para listar os índices do array podemos criar um for...of... com um
console.log que chame o numero.
Ex.:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

console.log("índices do array")

for (let numero of lista){
    console.log(numero)
}

================================
(3)

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

O resultado impresso no console será 4 linhas, cada linha
com um asterisco, que é somado mais um asterisco a cada nova linha.

Exercícios de escrita de código
=============================
(1)

const quantidade = Number(prompt("Quantos bichinhos de estimação você tem?"))
if (quantidade === 0){
    console.log("Que pena! Você pode adotar um pet!")
} else if (quantidade >0){
    const nomesPet = []
    for(let i = 0; i < quantidade; i++){
        const nomePet = prompt(`Digite o nome do seu pet #${i + 1}:`);
        nomesPet.push(nomePet);
    }
    console.log(nomesPet)
}

============================
(2)

const arrayOriginal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for( let i = 0; i < arrayOriginal.length; i++){
    console.log(arrayOriginal[i])
}

for( let i = 0; i < arrayOriginal.length; i++){
    console.log(arrayOriginal[i]/10)
}

const arrayPares = []

for(const numero of arrayOriginal){
    if (numero % 2 === 0) {
        arrayPares.push(numero)
    }
}

console.log("Números pares do array")
console.log(arrayPares)

const novoArray = []

for(let i = 0; i <arrayOriginal.length; i++){
    const elemento = `O elemento do índice: ${i} é ${arrayOriginal[i]}`
    novoArray.push(elemento)
}

console.log(novoArray)


let maior = arrayOriginal[0]
let menor = arrayOriginal[0]

for (let i = 1; i < arrayOriginal.length; i++) {
  if (arrayOriginal[i] > maior) {
    maior = arrayOriginal[i]
  }
  if (arrayOriginal[i] < menor) {
    menor = arrayOriginal[i]
  }
}

console.log("O maior número é:", maior);
console.log("O menor número é:", menor);

*/
