/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

// Creo un numero random del pc tramite funzione
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) ;
}

const pcNumber = getRndInteger(1, 5);
console.log(pcNumber);

function EvenOrOdd(userNumber, pcNumber) {
    const resultToCheck = pcNumber + userNumber;
    console.log(pcNumber, "+", userNumber );

    if (resultToCheck % 2 === 0) {

        return true;

    } else {

        return false;

    }

}


// collego i due bottoni del DOM e gli assegno la funzione EvenOrOdd

document.getElementById('pari').addEventListener('click', function (e) {
    const inputUtenteDOM = document.getElementById('numero_utente').value;

    console.log(inputUtenteDOM);
    if (inputUtenteDOM < 1 || inputUtenteDOM > 5) {
        console.log("Hai inserito un numero troppo alto!");
        alert("Hai inserito un numero non compreso tra 1 e 5. Riprova!")
    }
    else if (EvenOrOdd(inputUtenteDOM, pcNumber)) {

        console.log('pari');
        document.getElementById('result').innerHTML = `Il numero del computer è: ${pcNumber}. Il risultato è pari. HAI VINTO!`

    } else {
        console.log('dispari');
        document.getElementById('result').innerHTML = `Il numero del computer è: ${pcNumber}. Il risultato è dispari. HAI PERSO!`
    }

})

document.getElementById('dispari').addEventListener('click', function (e) {
    const inputUtenteDOM = document.getElementById('numero_utente').value;

    console.log(inputUtenteDOM);
    if (inputUtenteDOM < 1 || inputUtenteDOM > 5) {
        console.log("Hai inserito un numero troppo alto!");
        alert("Hai inserito un numero non compreso tra 1 e 5. Riprova!")
    }
    else if (EvenOrOdd(inputUtenteDOM, pcNumber)) {

        console.log('pari');
        document.getElementById('result').innerHTML = `Il numero del computer è: ${pcNumber}. Il risultato è pari. HAI PERSO!`

    } else {
        console.log('dispari');
        document.getElementById('result').innerHTML = `Il numero del computer è: ${pcNumber}. Il risultato è dispari. HAI VINTO!`
    }
})


