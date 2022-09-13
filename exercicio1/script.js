/*Exercicio 1

Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. 
“S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total.
Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

*/

let comer = prompt("Você gostaria de comer outra coxinha? \n S = \"Sim\" e N = \"Não\"")
const valor = 2.50
let conta = 0

while(comer !== "n"){
    if(comer === "s"){
        conta = conta + valor
        comer = prompt("Gostaria de mais uma coxinha?".toLowerCase())
    } else{
        alert("Resposta invalida!")
        comer = prompt("Gostaria de mais uma coxinha?".toLowerCase())
    }
}
console.log(`O valor da sua conta é: $ ${conta}`)
