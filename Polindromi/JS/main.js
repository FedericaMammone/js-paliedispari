// chiediamo all'utente di inserire una parola

let parolaUser = prompt("inserisci una parola");
console.log(parolaUser);



let parolaInversa = invertiParola(parolaUser);

// creiamo condizione
// verificare se la parola è palindroma
if(parolaUser == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
}

// aggiungere una funzione per la verifica
function invertiParola(word){
    let parolaInversa = '';
  
    let i = word.length - 1;
  
    while (i >= 0) {
      parolaInversa += word[i];
      i--;
    }
  
    return parolaInversa;
  }
  