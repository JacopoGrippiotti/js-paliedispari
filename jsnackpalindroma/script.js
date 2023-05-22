let userWord = prompt('inserisci la parola per verificare se è palindroma')

function reverseString(string){

    let reversedWord = ""
    for(let i = (userWord.length - 1); i >= 0; i--){

        reversedWord += string[i]

    }

    return reversedWord
}

console.log(reverseString(userWord))

function isPalyndrome(wordToVerify){ 

    if(wordToVerify === reverseString(wordToVerify)){
        return true
    }
}

if (isPalyndrome(userWord)){
    console.log('la parola è palindroma,', userWord)
}
