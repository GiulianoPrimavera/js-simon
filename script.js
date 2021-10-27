"use strict"

/* 
//-genero 5 numeri random
   // -function generateRandomNum
   // -creo un array con i numeri random
   //-li mando a schermo con un alert
-avvio un timer di 30s
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
//mando a schermo l'array contenente i numeri random
alert("memorizza questi numeri ->  " + numeriRandom);