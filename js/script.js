let numeroKm = parseInt (prompt('quanti chilometri vuoi percorrere?'));
console.log(numeroKm);

let userAge = parseInt (prompt('quanti anni hai?'));
console.log(userAge);

let ticketPrice = (numeroKm * 0.21);
console.log(ticketPrice);

let scontoSenior = (ticketPrice / 100 * 40);
let scontoMinore = (ticketPrice / 100 * 20);

if (userAge >= 65){
    document.getElementById('output').innerHTML = (ticketPrice - scontoSenior)+ '€';
    console.log(ticketPrice - scontoSenior);

}else if (userAge < 18){
    document.getElementById('output').innerHTML = (ticketPrice - scontoMinore) + '€';
    console.log(ticketPrice - scontoMinore);
    
}else 
  document.getElementById('output').innerHTML = ticketPrice + '€';
  console.log(ticketPrice);
   
    



// A[Chiedo all'utente il numero di km] --> B[Chiedo all'utente l'età del passeggero]
// B --> C[Calcolo il prezzo del biglietto a 0.21 al km]
// C --> D{L'età del passeggero è <= a 18 o >= a 65}
// D -->|vero| E[sconto del 20% se <= a 18, sconto del 40% se >= a 65]
// D -->|falso| F[Nessuno sconto]
// E --> G[output finale]
// F --> G[output finale]

