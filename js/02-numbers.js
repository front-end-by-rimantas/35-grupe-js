/*
NUMBERS:
- normalus:
    - sveikieji
    - desimtainiai
- nenormalus:
    - NaN (not-a-number)
    - Infinity; -Infinity
*/

const sveikasis = 5;
const desimtainis = 3.14;
const neigiamasDesimtainis = -3.14;
const neSkaicius = NaN;
const begalybe = Infinity;

const pirmas = 'Labas';
const antras = 'rytas';

const dalmuo = pirmas / antras;
console.log(dalmuo);

console.log('num; num');
console.log(7 + 5);
console.log(7 - 5);
console.log(7 * 5);
console.log(7 / 5);

console.log('num; string(num)');
console.log(7 + '5');
console.log(7 - '5');
console.log(7 * '5');
console.log(7 / '5');

console.log('string(num); num');
console.log('7' + 5);
console.log('7' - 5);
console.log('7' * 5);
console.log('7' / 5);

console.log('string(num); string(num)');
console.log('7' + '5');
console.log('7' - '5');
console.log('7' * '5');
console.log('7' / '5');

console.log('num; string');
console.log(7 + 'b');
console.log(7 - 'b');
console.log(7 * 'b');
console.log(7 / 'b');

console.log('string; num');
console.log('a' + 5);
console.log('a' - 5);
console.log('a' * 5);
console.log('a' / 5);

console.log('string; string');
console.log('a' + 'b');
console.log('a' - 'b');
console.log('a' * 'b');
console.log('a' / 'b');

console.log('num; true');
console.log(7 + true);
console.log(7 - true);
console.log(7 * true);
console.log(7 / true);

console.log('num; false');
console.log(7 + false);
console.log(7 - false);
console.log(7 * false);
console.log(7 / false);

console.log('true; num');
console.log(true + 7);
console.log(true - 7);
console.log(true * 7);
console.log(true / 7);

console.log('false; num');
console.log(false + 7);
console.log(false - 7);
console.log(false * 7);
console.log(false / 7);