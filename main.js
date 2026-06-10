/*
let numero = Number(prompt("Digite um numero para fazer a tabuada do 1 até 10:"))
let tabuada = 1

while (tabuada < 11) {
    let resultador = numero * tabuada;
    console.log(resultador)
    tabuada = tabuada + 1;
}
*/
let num = 1
for(let tentativas = 3 ; tentativas >= 1; tentativas = tentativas - 1){
    ten = Number(prompt("digite um numero. obs vc tem 3 tentativas"))
    if (ten == num) {
        alert("ganhou")
        tentativas = 0
    }else{
        alert("tente denovo")
    }
}
if (ten != num) {
    alert("Mentira kkkkkkkkkkkk, voce perdeu")
}