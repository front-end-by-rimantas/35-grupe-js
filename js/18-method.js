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

/*
OBJECT
*/