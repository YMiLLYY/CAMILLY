
let nota1 = Number(prompt("digite sua primeira nota1"))
let nota2 = Number(prompt("digete sua segunda nota2 "))
let nota3 = Number(prompt("digite sua terceira nota3"))
let media = (nota1 + nota2 + nota3)/3
if(media < 7 ){
   alert(`voce reprovou com media ${media.toFixed(2)}`)
} else {
alert(`voce esta aprovado com media ${media.toFixed(2)}`)
}

console.log(`codigo novo`)