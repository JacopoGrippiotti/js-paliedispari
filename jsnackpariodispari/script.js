let pariOdispari = prompt('scegli pari o dispari')


if(pariOdispari === "pari"){
    console.log('hai scelto pari')
}else if(pariOdispari === "dispari"){
    console.log('hai scelto dispari')
}else{
    console.log('hai scelto un valore non valido')
    pariOdispari = prompt('scegli pari o dispari')
}

let userNumber = prompt('scegli un numero tra 1 e 5')

console.log('hai scelto: ', userNumber)

function randomNumber(max,min){

   const random = Math.floor(Math.random()*(max - min +1) + min)

   return random
}

let computerNumber = randomNumber(5,1)

let sum = userNumber + computerNumber

let isSumPariOdispari

if(sum % 2 === 0){
    isSumPariOdispari = "pari"
} else{
    isSumPariOdispari = "dispari"
}

if (isSumPariOdispari === pariOdispari){
    console.log('bravo hai vinto. Hai scelto', pariOdispari,'e il risultato della somma è venuto', isSumPariOdispari)
}else{
    console.log('ritenta e sarai più fortunato')
}
console.log(computerNumber)