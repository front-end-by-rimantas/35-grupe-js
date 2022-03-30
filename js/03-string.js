/*
STRING

kabutes:
- viengubos (')
- dvygubos (")
- backtick'as (`)

Teksto simboliu kiekis: .length
*/

const name = 'Petras';
console.log(name);

const lastname = "Petraitis";
console.log(lastname);

const viegubaKabute = "viengubos (')";
console.log(viegubaKabute);

const dvygubaKabute = 'dvygubos (")';
console.log(dvygubaKabute);

const viegubaKabute12 = 'Cia yra vienguba (\') ir dvyguba (") kabutes.';
console.log(viegubaKabute12);

const dvygubaKabute12 = "Cia yra vienguba (') ir dvyguba (\") kabutes.";
console.log(dvygubaKabute12);

const kabute12 = "Cia yra vienguba (\') ir dvyguba (\") kabutes.";
console.log(kabute12);

const clientName = 'Maryte';
const clientAge = 87;
// Client Maryte is 87 years old.
const clientSentence = 'Client ' + clientName + ' is ' + clientAge + ' years old.';
console.log(clientSentence);

const backtickClient = `Client ${clientName} is ${clientAge} years old.`;
console.log(backtickClient);

const n1 = 7;
const n2 = 5;
const rez = n1 + n2;
// 7 + 5 = 12
const ats = `${n1} + ${n2} = ${rez}`;
console.log(ats);

const abc = 'ab"cd\'e\\\\f';
const abcDydis = abc.length;
console.log(`Abeceles "${abc}" dydis yra ${abcDydis} simboliu.`);