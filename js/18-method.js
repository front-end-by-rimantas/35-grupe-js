/*
NUMBER
*/
console.log('--------------');
console.log('skaiciaus konvertavimas i string');
console.log((5215).toString());
console.log('' + 5215);

console.log('--------------');
console.log('desimtaines dalies "nukirpimas"');
console.log((3.1415).toFixed(0));
console.log((3.1415).toFixed(1));
console.log((3.1415).toFixed(2));
console.log((3.1415).toFixed(3));
console.log(typeof (3.1415).toFixed(3));

console.log('--------------');
console.log('is teksto konvertavimas i skaiciu');
console.log(parseInt('17.53'));
console.log(typeof parseInt('17.53'));
console.log(parseFloat('17.53'));
console.log(typeof parseFloat('17.53'));
console.log(+'17.53');                  // casting
console.log(parseFloat('labas'));
console.log(parseInt('labas'));
console.log(+'labas');
console.log('-------');
console.log(parseFloat('labas17.53'));
console.log(parseFloat('labas17.53labas'));
console.log(parseInt('labas17.53'));
console.log(parseInt('labas17.53labas'));
console.log(+'17.53labas');
console.log(+'labas17.53');
console.log(+'labas17.53labas');
console.log(+'17.53labas17.53');
console.log('-------');
console.log(parseFloat('17.53labas17.53'));
console.log(parseInt('17.53labas17.53'));
console.log(parseFloat('17.53labas'));
console.log(parseInt('17.53labas'));

console.log('--------------');
console.log('Math class');
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.abs(-7));
console.log('apvalinimas');
console.log(Math.round(1.49999));
console.log(Math.floor(1.49999));
console.log(Math.ceil(1.49999));
console.log(Math.round(1.5));
console.log(Math.floor(1.5));
console.log(Math.ceil(1.5));
console.log(Math.round(1.0001));
console.log(Math.floor(1.0001));
console.log(Math.ceil(1.0001));
console.log(Math.round(1.9999));
console.log(Math.floor(1.9999));
console.log(Math.ceil(1.9999));
console.log('random skaicius: [0..1)');
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log('min-max');
console.log(Math.min(1, 5, 7, -4, 3));
console.log(Math.max(1, 5, 7, -4, 3));

/*
STRING
*/
console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');
const labas = 'Labas rytas, Lietuva!';
console.log(labas.length);

console.log('ar stringe yra kitas sub-string');
console.log(labas.includes('y'));
console.log(labas.includes('rytas'));
console.log(labas.includes('rytas '));
console.log(labas.includes('x'));

console.log('kur stringe yra kitas sub-string');
console.log(labas.indexOf('L'));
console.log(labas.indexOf('L', 1));
console.log(labas.indexOf('y'));
console.log(labas.indexOf('rytas'));
console.log(labas.indexOf('rytas '));
console.log(labas.indexOf('x'));

console.log('"sukarpyti" string i dalis');
console.log(labas.split(' '));
console.log(labas.split('a'));
console.log(labas.split('!'));
console.log(labas.split('L'));

console.log('kartojimas');
console.log('Steve'.repeat(3));
console.log('a'.repeat(20));
console.log(labas.charAt(2));
console.log(labas[2]);
console.log(labas.slice(labas.indexOf('r')));
console.log(labas.slice(6, 11));
console.log(labas.slice(labas.indexOf('r'), labas.indexOf('s', labas.indexOf('r')) + 1));

console.log('teksto konvertavimas');
console.log(labas.toLowerCase());
console.log(labas.toUpperCase());

console.log('teksto "apvalimas" nuo tarpu');
console.log('    Labas    rytas!    '.trimStart() + '.');
console.log('    Labas    rytas!    '.trimEnd() + '.');
console.log('    Labas    rytas!    '.trim() + '.');
console.log('Elon Musk'.trim() + '.');
console.log('    Elon Musk    '.trim() + '.');

console.log('replace');
console.log(labas.replace('rytas', 'vakaras'));
console.log(labas.replace('a', '_'));
console.log(labas.replace(/a/gi, '_'));
// console.log(labas.replaceAll('a', '_'));

/*
BOOLEAN
*/
console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');

console.log(true.toString());

/*
ARRAY
*/
console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');

const rytas = ['Labas', 'rytas', 'Lietuva'];
console.log(rytas.length);

console.log('sujungti');
console.log(rytas.join(' '));
console.log(rytas.join(', '));
console.log(rytas.join(' -=- '));

console.log('paieska');
console.log(rytas.includes('a'));
console.log(rytas.includes('rytas'));
console.log(rytas.includes('Rytas'));
console.log(rytas.indexOf('a'));
console.log(rytas.indexOf('Rytas'));
console.log(rytas.indexOf('Labas'));
console.log(rytas.indexOf('rytas'));
console.log(rytas.indexOf('Lietuva'));

console.log(rytas.push('PUSH'));
console.log(rytas);
console.log(rytas.unshift('UNSHIFT'));
console.log(rytas);
console.log(rytas.pop());
console.log(rytas);
console.log(rytas.shift());
console.log(rytas);

console.log('extra');
console.log(rytas.reverse());

// map, filter, sort, reduce, every, flat, forEach
const marks = [10, 2, 8, 4, 6];
console.log('map - individualiu reiksmiu konvertavimas');
console.log(marks.map(item => item));
console.log(marks.map(item => 2 * item));
console.log(marks.map(item => item % 3));
console.log(marks.map(item => item - 0.5));

console.log('filter');
console.log(marks.filter(item => item));
console.log(marks.filter(item => item > 5));
console.log(marks.filter(item => item <= 5));
console.log(marks.filter(item => item > 5 && item % 3 === 0));

console.log('reduce - sutraukia visas reiksmes i viena reiksme');
console.log(marks.reduce((total, item) => total + item, 0));
console.log(marks.reduce((total, item) => total + item));
console.log(marks.reduce((total, item) => total * item, 1));
console.log(marks.reduce((total, item) => total * item));
console.log(marks.reduce((total, item) => total - item, 0));
console.log(marks.reduce((total, item) => total - item));
console.log(marks.reduce((total, item) => total / item, 0));
console.log(marks.reduce((total, item) => total / item));

console.log('sort');
const nums = [1, 2, 3, 10, 20, 30, 11, 21, 31];
console.log(marks.sort());
console.log(nums.sort());
console.log(nums.sort((a, b) => a - b));
console.log(nums.sort((a, b) => b - a));

const texts = ['asd', 'qw', 'asdas', 's'];
console.log(texts.sort());
console.log(texts.sort().reverse());
console.log(texts.sort((a, b) => a.length - b.length));
console.log(texts.sort((a, b) => b.length - a.length));

console.log('flat');
const matrix = [
    [1, 2, [7, 8]],
    [11, [9, 10], 22],
    [[11, 12], 3, 4],
];
console.log(matrix.flat());
console.log(matrix.flat(2));

console.log('... - spread operator');
console.log(Math.min(1, 5, 7, -4, 10));
console.log(Math.max(1, 5, 7, -4, 10));
const minMax = [1, 5, 7, -4, 10];
console.log(Math.min(...minMax));
console.log(Math.max(...minMax));

const m1 = [1, 2];
const m2 = [3, 4];
const m3 = [5, 6];
const m123 = [...m1, 123, ...m2, ...m3];
const m132 = [...m1, ...m3, 132, ...m2];
const m321 = [...m3, ...m2, ...m1, 321];
console.log(m123);
console.log(m132);
console.log(m321);

/*
OBJECT
*/
console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true
}

console.log(person.name);
console.log(person.age);
console.log(person.isMarried);
console.log(person['name']);
console.log(person['age']);
console.log(person['isMarried']);

console.log('automatinis visu objekto raktazodziu istraukimas');
const personKeys = Object.keys(person);
console.log(personKeys);

console.log('automatinis visu objekto reiksmiu istraukimas');
for (const key of personKeys) {
    console.log(key, ':', person[key]);
}

console.log('FOR-IN');
for (const key in person) {
    console.log(key, ':', person[key]);
}

console.log('... - spread operator (naudojimas objekte)');
console.log({ ...person });
console.log({ ...person, car: 'Tesla' });
console.log({ color: 'red', ...person });
console.log({ ...person, isMarried: false });
console.log({ isMarried: false, ...person });

const objA = {
    a: 'a',
    c: 'c',
    b: 'bbbbbb'
}
const objB = {
    b: 'b',
    d: 'd'
}

const objAB = { ...objA, ...objB };
const objBA = { ...objB, ...objA };
console.log(objAB);
console.log(objBA);

/*
DESTRUCTURING - destrukturizavimas
*/
console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');

const skaiciai = [10, 2, 8, 6, 4, 2, 8, 6, 4];
const pirmasSkaicius = skaiciai[0];
const antrasSkaicius = skaiciai[1];
const treciasSkaicius = skaiciai[2];
console.log(pirmasSkaicius, antrasSkaicius, treciasSkaicius);

const [pirmas, antras, trecias, ...kita] = skaiciai;
console.log(pirmas, antras, trecias, kita);

const skaiciai2 = [9999]
const [xx1, ...xxx] = skaiciai2;
console.log(xx1, xxx);

const car = {
    name: 'Tesla',
    model: 'X',
    color: 'red'
}
const carName = car.name;
const carModel = car.model;
const carColor = car.color;
console.log(carName, carModel, carColor);

const { name, color, model } = car;
console.log(name, color, model);

console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');
console.log('--------------');

const random = Math.floor(Math.random() * 10);  // [0..9]
console.log(random);

function randomNumber(nuo = 0, iki = 9) {
    return nuo + Math.floor(Math.random() * (iki - nuo + 1));
}

for (let i = 0; i < 20; i++) {
    console.log(randomNumber(0, 10));
}