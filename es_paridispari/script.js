/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/


//Creo una variabile per il numero dell'utente
const userNumberDOM = document.getElementById('numero-utente');

// Aggiungo un event listener ai due bottoni nel DOM

document.getElementById('pari').addEventListener('click',function(e){

    e.preventDefault();
    console.log(userNumberDOM.value);
})

document.getElementById('dispari').addEventListener('click',function(e){

    e.preventDefault();
    console.log(userNumberDOM.value);
})
//Controlliamo se l'utente ha scelto un numero fino a 5 con una condizione

//Creiamo una funzione per generare il numero del computer

//Creo una funzione che sommi il numero dell'utente e il numero del computer 

//Stampo in console/pagina il vincitore

