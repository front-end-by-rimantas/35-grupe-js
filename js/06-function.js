/*
Visi mokiniai turi TIK 4 pazymius ir reikia suskaiciuoti vidurki.
*/
const petras = [10, 10, 8, 2];
const maryte = [5, 9, 7, 6];
const jonas = [7, 7, 8, 2];
const ona = [1, 5, 7, 10];

function vidurkis(pazymiuSarasas) {
    let pazymiuSuma = 0;
    pazymiuSuma += pazymiuSarasas[0];
    pazymiuSuma += pazymiuSarasas[1];
    pazymiuSuma += pazymiuSarasas[2];
    pazymiuSuma += pazymiuSarasas[3];
    return pazymiuSuma / pazymiuSarasas.length;
}

const petroVidurkis = vidurkis(petras);
console.log('Petras:', petroVidurkis);

const marytesVidurkis = vidurkis(maryte);
console.log('Maryte:', marytesVidurkis);

const jonoVidurkis = vidurkis(jonas);
console.log('Jonas:', jonoVidurkis);

const onosVidurkis = vidurkis(ona);
console.log('Ona:', onosVidurkis);