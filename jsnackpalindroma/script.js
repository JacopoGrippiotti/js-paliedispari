let userWord = prompt('inserisci la parola per verificare se è palindroma')


function reverseString(str) {
    return str.split("").reverse().join("");
}

function isPalyndrome(wordToVerify){

    if(wordToVerify === reverseString(wordToVerify)){

        return true
    }
}

if(isPalyndrome(userWord)){
    console.log('la parola è palindroma,', userWord)
}
