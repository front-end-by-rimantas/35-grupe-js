/*
KINTAMIEJI

Iniciavimo budas:
const - default iniciavimo budas
let - antrinis budas inicijuoti, kai zinome, jog reiksme tures keistis
var - pats seniausias ir geriau niekada nenaudoti, jei rupi saugumas

Duomenu tipas: 
- number (skaicius)
- string (tekstas)
- boolean (logine reiksme: true | false)
- array (masyvas, sarasas, matrica*)
*/

const myLuckyNumberIs = 7;
console.log('Lucky number:', myLuckyNumberIs);

let pinigine = 0;
console.log('Pinigine:', pinigine);

pinigine = 5;
console.log('Pinigine:', pinigine);

pinigine = 10;
console.log('Pinigine:', pinigine);

const vardas = 'Maryte';
const pasisveikinimas = 'Laba diena, ' + vardas + '.';
console.log(pasisveikinimas);

const arVedes = true;
const arTuriVaiku = false;
const arMeluojaDelVaiku = true;
console.log('Ar meluoja?', arMeluojaDelVaiku);
console.log('Ar vedes?', arVedes);
console.log('Turi vaiku?', arTuriVaiku);

console.log(2 + 2 * 2);
console.log('2 + 2 * 2');

console.log(true, false);
console.log('true', 'false');

const pazymiai = [10, 2, 8, 4, 6];
console.log('Pazymiai:', pazymiai);

const studentai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(studentai);

const booleanList = [true, false, true, false, true, false];
console.log(booleanList);