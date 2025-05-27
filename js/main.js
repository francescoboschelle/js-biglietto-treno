const distance = Number(prompt("Quanti chilometri vuoi percorrere?"));

if (!distance || isNaN(distance)) {
  alert("Devi selezionare un numero valido!");
}

const age = Number(prompt("Che etá hai?"));

if (!age || isNaN(age)) {
  alert("Devi selezionare un numero valido!");
}

let cost = Math.floor(0.21 * distance);

if (age < 18) {
  cost = cost * 0.8;
} else if (age > 65) {
  cost = cost * 0.6;
}

alert(`Il biglietto costerá approssimativamente: ${cost.toFixed(2)} `);
