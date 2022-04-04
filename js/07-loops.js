/*
LOOP: for, while, for-of, foreach, ...
OBJECT-LOOP: for-in
*/

const pazymiai = [10, 2, 8, 4, 6];

// FOR
let sumaFor = 0;
for (let i1 = 0; i1 < pazymiai.length; i1++) {
    const pazymys = pazymiai[i1];
    sumaFor += pazymys;
    console.log(`${i1}) pazymys ${pazymys} [${sumaFor}]`);
}

// WHILE
console.log('-----------');
let sumaWhile = 0;
let i2 = 0;
while (i2 < pazymiai.length) {
    const pazymys = pazymiai[i2];
    sumaWhile += pazymys;
    console.log(`${i2}) pazymys ${pazymys} [${sumaWhile}]`);
    i2++;
}

// FOR-OF
console.log('-----------');
let sumaForOf = 0;
let i3 = 0;
for (const pazymys of pazymiai) {
    sumaForOf += pazymys;
    console.log(`${i3++}) pazymys ${pazymys} [${sumaForOf}]`);
}

// FOREACH
console.log('-----------');
let sumaForEach = 0;
pazymiai.forEach((pazymys, i4) => {
    sumaForEach += pazymys;
    console.log(`${i4}) pazymys ${pazymys} [${sumaForEach}]`);
});