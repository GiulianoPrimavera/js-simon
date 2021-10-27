"use strict"

/* 
//-genero 5 numeri random
   // -function generateRandomNum
   // -creo un array con i numeri random
   //-li mando a schermo con un alert
//-avvio un timer di 30s
-chiedo con un prompt all'utente di inserire i numeri che ha visto prima a schermo
*/

/**
 * funzione che genera un certo numero di numeri random sulla base 
 * del numero massimo e minimo che gli viene dato, questi due valori definiscono
 * il range dei numeri random che vengono generati 
 * @param {number} min - rappresenta il numero minimo che il random può raggiungere
 * @param {number} max - rappresenta il numero massimo che il random può raggiungere 
 * @returns {number} numeriRandom
 */

 function getRandomNumber(max = 100, min = 0 ){
    const numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);

    return numeroRandom;
}   

//creo un array che contiene i numeri random generati randomicamente
let numeriRandom = [];
//per 5 volte eseguo il push di un numero random all'interno dell'array
for (let i = 0; i < 5; i++){
    numeriRandom.push(getRandomNumber())
}
console.log("numeri random", numeriRandom);
//mando a schermo l'array contenente i numeri random
alert("memorizza questi numeri ->  " + numeriRandom);


setTimeout(() => {
    //chiedo all'utente di inserire i numeri che verranno salvati come stringa 
    let stringaUtente = prompt("inserisci i numeri che hai visto prima separati da virgole");
    //divido la stigna in un array di stringhe
    const arrayUtenteString = stringaUtente.split(",")
    
    //creo un array di numeri
    let arrayUtenteNumbers = [];
    for (let i = 0; i < arrayUtenteString.length; i++){
        //per ogni elemento all'interno dell'array di stringhe pusho il relativo numero
        arrayUtenteNumbers.push(parseInt(arrayUtenteString[i]))
    }
    console.log("array dell'utente", arrayUtenteNumbers);

    //se le lunghezze dell'array dei numeri indovinati e dell'array dei numeri random sono diverse mostro questo messaggio
    if (numeriRandom.length !== arrayUtenteNumbers.length){
        alert("devi inserire solo e soltanto 5 numeri")
    }else{
        //creo un array che conterrà i numeri indovinati dall'utente
        let arrayNumeriIndovinati = [];

        //ciclo sull'array dei numeri inseriti dall'utente
        for(let i = 0; i < arrayUtenteNumbers.length; i++){
            //se il numero (nella posizione [i]) inserito dall'utente è incluso nell'array dei numeri generati randomicamente
            if(numeriRandom.includes(arrayUtenteNumbers[i])){
                //eseguo il push del numero all'interno dell'array dei numeri indovinati
                arrayNumeriIndovinati.push(arrayUtenteNumbers[i]);
            }
        }

        //creo una stringa a partire dall'array dei numeri indovinati, che sarà inserità nell'alert finale
        const numeriIndovinatiString = arrayNumeriIndovinati.join(", ")
        
        if(arrayNumeriIndovinati.length === 0){
            alert("non hai indovinato nessun numero :(")
        }else{
            //mando a schermo il messaggio di quanti numeri sono stati indovinati e quali
            alert("hai indovinato " + arrayNumeriIndovinati.length + " numeri, e sono " + numeriIndovinatiString)
        }
    } 
}, 300);