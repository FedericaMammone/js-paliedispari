let inputUtente = prompt("scegli pari o dispari");
console.log("L'utente ha scelto " + inputUtente);

let userNumber = parseInt(prompt("scegli un numero da 1 a 10"))
console.log(userNumber);








let numeroPC = generaNumeroRandomPc (1,10);

function generaNumeroRandomPc (min,max) {

    let number = Math.floor(Math.random() * (max - min)) + min;
    console.log("Il numero generato per il pc è " + number);

    return number
    
}

let solution = sum (numeroPC,userNumber);

function sum (numeroPC,userNumber) {

    let somma = (numeroPC + userNumber);
    console.log("La somma dei due numeri è " + somma);
    
    

    if (somma % 2 === 0) {
     risultato = "pari";
     console.log(risultato);

    } else {
        risultato = "dispari";
        console.log(risultato);
    }

    return sum
}





