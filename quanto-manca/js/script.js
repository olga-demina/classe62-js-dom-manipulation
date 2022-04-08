// quanto manca: utilizzando le funzioni dell'oggetto Date, stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.

// calcolare l'ora attuale
const now = new Date();
console.log(now);
const nowMinutes = now.getMinutes();
console.log(nowMinutes);

// calcolare i minuti rimanenti: 60 - minuti in ora attuale
const remainingMinutes = 60 - nowMinutes;
console.log(remainingMinutes);