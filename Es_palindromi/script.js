/*
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

//creo le variabili e collego gli elementi del DOM
const wordToCheckInput = document.getElementById("input");
const wordCheckBtn = document.getElementById("button_check");
const palindromeResult = document.getElementById("result");

let word = "";


//Creo la funzione reverse per leggere il valore massimo della stringa (i) e sottraggo la [i] fino a raggiungere lo 0 , poi aggiungo a una nuova variabile i valordi della [i] ottenendo la stringa al contrario
function reverse(wordToCheck) {

    let reverseWord = "";

    console.log(wordToCheck.length)

    for (let i = wordToCheck.length - 1; i >= 0; i--) {

        reverseWord += wordToCheck[i]

    };

    return reverseWord

}

// Controllo se la parola inserita è un palindromo (quindi controllo se word è uguale a reverseWord)
function palindromeCheck(word1, reverseWord1) {

    if (word1 == reverseWord1) {

        console.log("Il testo inserito è un palindromo");
        result.innerHTML = "Typed text is a palindrome"

    } else {

        console.log("Il testo inserito non è un palindromo");
        result.innerHTML = "Typed text is not a palindrome"

    }

}


//Aggiungo un eventListener al bottone, al click mi dirà se la parola è un palindromo o meno tramite la funzione creata in precedenza. 
wordCheckBtn.addEventListener("click", function () {

    let word = wordToCheckInput.value;

    let reverseResult = reverse(word);

    palindromeCheck(word, reverseResult);

})