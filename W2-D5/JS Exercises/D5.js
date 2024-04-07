/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for(let i = 0; i<pets.length; i++){
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort(); //la funzione sort mi permette di ordinare un array
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
let dimmax = pets.length; 

for(let i = dimmax - 1; i >=0;i--) {
  console.log(pets[i]);
}
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let firstelement = pets.shift();  //prende il primo elemento dell'array e lo salva nella variabile
pets.push(firstelement);

console.log(pets);


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

function generateLicensePlate(){
  const lettere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const num = '0123456789';
  let plate = '';

//genero tre lettere casuali
  for(let i = 0; i< 3 ;i++){
    plate += lettere.charAt(Math.floor(Math.random() * lettere.length));
  }

//genero tre numeri casuali
  for(let i = 0; i< 3 ;i++){
    plate += num.charAt(Math.floor(Math.random() * num.length));
  }
  return plate;
}

//per ogni elemento macchina aggiungo la proprietà licensePlate
cars.forEach(car => {
  cars.licensePlate = generateLicensePlate();
});

console.log(cars);


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newauto = {
    brand: 'Ferrari',
    model: 'F430',
    color: 'red',
    trims: ['life', 'style', 'r-line'],
};

cars.push(newauto);

for(let i = 0; i < cars.length;i++){
  const car = cars[i];
  car.trims.pop();
}

console.log(cars);


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for(let i = 0; i<cars.length;i++){
  const primotrims = cars[i].trims[0];
  justTrims.push(primotrims);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for(let i = 0; i < cars.length ; i++){
  const primalettera = cars[i].color.charAt(0);
        if(primalettera.toLowerCase === 'b'){
          console.log("Fizz");
        } else {
          console.log("Buzz");
        }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let y = 0;

while(y < numericArray.length && numericArray[y] !== 32){
      console.log(numericArray[y]);
      y++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const alfabeto = ['a' , 'b' , 'c' , 'd', 'e' , 'f', 'g' , 'h' , 'i' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't', 'u' , 'v' , 'z'];

const resultArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const char = charactersArray[i];
  switch (char) {
      case 'a':
          resultArray.push(1);
          break;
      case 'b':
          resultArray.push(2);
          break;
      case 'c':
          resultArray.push(3);
          break;
      case 'd':
          resultArray.push(4);
          break;
      case 'e':
          resultArray.push(5);
          break;
      case 'f':
          resultArray.push(6);
          break;
      case 'g':
          resultArray.push(7);
          break;
      case 'h':
          resultArray.push(8);
          break;
      case 'i':
          resultArray.push(9);
          break;
      case 'l':
          resultArray.push(10);
          break;
      case 'm':
          resultArray.push(11);
          break;
      case 'n':
          resultArray.push(12);
          break;
      case 'o':
          resultArray.push(13);
          break;
      case 'p':
          resultArray.push(14);
          break;
      case 'q':
          resultArray.push(15);
          break;
      case 'r':
          resultArray.push(16);
          break;
      case 's':
          resultArray.push(17);
          break;
      case 't':
          resultArray.push(18);
          break;
      case 'u':
          resultArray.push(19);
          break;
      case 'v':
          resultArray.push(20);
          break;
      case 'z':
          resultArray.push(21);
          break;
      default:
          console.log("Caratteri inseriti invalidi");
          break;
  }
}

console.log(resultArray); 

