// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Chiedere all'utente chilomentri e età del passeggero
const userKm = parseInt(prompt("Quanti kilometri devi percorrere?"));
console.log(userKm);

const userAge = parseInt(prompt("Quanti anni ha il passeggero?"));
console.log(userAge);

// Se i km oppure l'età non è valore numerico, non faccio calcolo
if (isNaN(userKm) || isNaN(userAge)) {
    // eccezione, errore
    alert("I dati che hai inserito non sono corretti");
} else {
    // Calcolare il prezzo base del biglietto
    let price = userKm * 0.21;
    let discount = 0;
    console.log(price);

    // Calcolare lo sconto
    // Se l'utente è minorenne -> applico lo sconto di 20%
    // altrimeti se è over 65 applico lo sconto del 40%

    if (userAge < 18) {
        discount = price * 0.2
    } else if (userAge > 65) {
        discount = price * 0.4
    }

    price = price - discount;
    console.log(price);

    // scrivere output
    document.getElementById('price').innerHTML = `Il prezzo del biglietto è € ${price.toFixed(2)}`;
}
