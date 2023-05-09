// chiediamo all'utente di scegliere tra pari e dispari

let inputUtente = prompt("scegli pari o dispari");
console.log("L'utente ha scelto " + inputUtente);

// chiediamo all'utente di scegliere un numero da 1 a 10
let userNumber = parseInt(prompt("scegli un numero da 1 a 10"))
console.log(userNumber);






// aggiungiamo funzione per creare numero random pc
let numeroPC = generaNumeroRandomPc (1,10);

function generaNumeroRandomPc (min,max) {

    let number = Math.floor(Math.random() * (max - min)) + min;
    console.log("Il numero generato per il pc è " + number);

    return number
    
}

// aggiungiamo funzione per fare la somma tra numero utente e numero pc

let soluzione = sum (numeroPC,userNumber);

function sum (numeroPC,userNumber) {

    let somma =(numeroPC + userNumber);
    console.log("La somma dei due numeri è " + somma);
    
    
    // aggiungiamo condizione
    // se la somma dei numeri è pari o dispari
    if (somma % 2 === 0) {
     risultato = "pari";
     console.log(risultato);

    } else {
        risultato = "dispari";
        console.log(risultato);
    }

    return risultato
}


// dichiariamo chi ha vinto
if (inputUtente === soluzione) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}





