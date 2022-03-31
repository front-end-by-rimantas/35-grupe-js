/*
LOOP: for, while, for-in, for-of, foreach, ...
*/

const pazymiai = [10, 2, 8, 4, 6];
let suma = 0;

for (let i = 0; i < pazymiai.length; i++) {
    const pazymys = pazymiai[i];
    suma += pazymys;

    console.log(`${i}) pazymys ${pazymys} [${suma}]`);
}

const vidurkis = suma / pazymiai.length;
console.log('Vidurkis:', vidurkis);