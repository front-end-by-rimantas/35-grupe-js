/*
IF

Sablonai:
- if () {}
- if () {} else {}
- if () {} else if {}
- if () {} else if {} else {}
- if () {} else if {} ...  else if {}
- if () {} else if {} ...  else if {} else {}

Palyginimo operatoriai:
- visi: >, <, <=, >=, ==, !=, ===, !==
- naudotini: >, <, <=, >=, ===, !==
- NEnaudotini: ==, !=
*/

const a = 7;
const b = '5';

if (a !== b) {
    console.log('A yra lygu B');
} else {
    console.log('A nera lygu B');
}

console.log('-----------------');
const day = 4;

if (day === 1) {
    console.log('pirmadienis');
} else if (day === 2) {
    console.log('antradienis');
} else if (day === 3) {
    console.log('treciadienis');
} else if (day === 4) {
    console.log('ketvirtadienis');
} else if (day === 5) {
    console.log('penktadienis');
} else if (day === 6) {
    console.log('sestadienis');
} else if (day === 7) {
    console.log('sekmadienis');
} else {
    console.log('tokia diena savaiteje neegzistuoja');
}

console.log('-------------');
const akiuSpalva = 'raudona';

if (akiuSpalva === 'zalia') {
    console.log('Zaliaakiai yra zalciai!');
} else {
    if (akiuSpalva === 'melyna') {
        console.log('Melynakiai megsta melynes.');
    } else {
        if (akiuSpalva === 'ruda') {
            console.log('Rudaakiai yra melagiai.');
        } else {
            if (akiuSpalva === 'raudona') {
                console.log('Raudonakis?.. Tu turbut programuotojas...');
            } else {
                console.log('O tu turi akis?..');
            }
        }
    }
}

console.log('-------------');

const temperatura = -25;
const nuoKadaLaikomeJogSilta = 15;
const arYraKrituliu = false;

if (arYraKrituliu) {
    // siuo metu lyja
    if (temperatura >= nuoKadaLaikomeJogSilta) {
        console.log('Varyk su maike 🦈🦈');
    } else {
        console.log('Tau reikes kailiniu 🎅');
    }
} else {
    // siuo metu ne lyja
    if (temperatura >= nuoKadaLaikomeJogSilta) {
        console.log('Gali eiti nuogas 🌞');
    } else {
        console.log('Be striukes neapsieisi ❄');
    }
}