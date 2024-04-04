/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 2;
let num2 = 5;

if(num1 > num2){
  console.log("num1 è più grande di num2");
} else if ( num1 == num2){
  console.log("num1 è uguale a num2");
} else {
  console.log("num2 è più grande di num1");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num3 = 4;

if(num3 != 5){
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if(num2 % 5 == 0){
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let intero1 = 4;
let intero2 = 4;

if(intero1 == 8){
  console.log("Il valore del primo intero è uguale a 8"); 
} else if(intero2 == 8){
  console.log("Il valore del secondo intero è uguale a 8")
} else if(intero1 + intero2 == 8){
  console.log("L'addizione dei due interi è uguale a 8");
}else if ((intero1 - intero2 == 8)&& (intero2 - intero1 == 8)){
  console.log("La sottrazione dei due interi è uguale a 8");
}




/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = 50; //modificare il valore per verificare il funzionamento
let costoSpedizione = 10;

if(totalShoppingCart > 50){
  console.log("L'utente ha diritto alla spedizione gratuita");
}else if(totalShoppingCart <=50){
  console.log("L'utente non ha diritto alla consegna gratuita, la spedizione avrà un costo fisso pari a 10€\n");
  totalShoppingCart = totalShoppingCart + costoSpedizione;
  console.log("Il nuovo totale è di:" + totalShoppingCart);
}
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//modificare il valore per verificare il funzionamento
let totalShoppingCart = 50; 
let costoSpedizione = 10;
let totale = 0;
let sconto = totalShoppingCart/100 * 20;

if(totalShoppingCart > 50){
  console.log("L'utente ha diritto alla spedizione gratuita");
  totale = totalShoppingCart - sconto;
  console.log("Il totale con lo sconto applicato è:"+ totale);
}else if(totalShoppingCart <=50){
  console.log("L'utente non ha diritto alla consegna gratuita, la spedizione avrà un costo fisso pari a 10€\n");
  totale = totalShoppingCart + costoSpedizione - sconto;
  console.log("Il nuovo totale è di:" + totale);

}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val1 = 5;
let val2 = 4;
let val3 = 6;

if (val1 >= val2) {
  if (val3 >= val1) {
    console.log(val3, val1, val2);
  } else {
    if (val3 >= val2) {
      console.log(val1, val3, val2);
    } else {
      console.log(val1, val2, val3);
    }
  }
} else {
  if (val3 >= val2) {
    console.log(val3, val2, val1)
  } else {
    if (val3 >= val1) {
      console.log(val2, val3, val1)
    } else {
      console.log(val2, val1, val3)
    }
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore = 'Kebab';

if(typeof valore == 'number'){
  console.log("il valore inserito è un numero");
} else {
  console.log("Il valore inserito non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 35;

if(numero1 % 2 == 0){
  console.log("Il numero è pari");
}else if(numero1 % 2 == 1){
  console.log("Il numero è dispari");
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
  if (val < 5) {
      console.log("Il valore inserito è minore di 5");
    } else if (val < 10) {
      console.log("Il valore inserito è minore di 10");
    } else {
      console.log("Il valore inserito è maggiore di 5 e maggiore o uguale a 10");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */


  me.city = 'Toronto';
  console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let array = [];
//utilizziamo la funzione push
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
array[9]= 100;
console.log(array);
/* SCRIVI QUI LA TUA RISPOSTA */
