function sumaIntervale(nuo, iki) {
    let suma = 0;
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }
    return suma;
}

console.log(sumaIntervale(0, 0), '-->', 0);
console.log(sumaIntervale(0, 1), '-->', 1);
console.log(sumaIntervale(0, 2), '-->', 3);
console.log(sumaIntervale(0, 3), '-->', 6);
console.log(sumaIntervale(0, 4), '-->', 10);
console.log(sumaIntervale(10, 14), '-->', 60);
console.log(sumaIntervale(0, 100), '-->', 5050);
console.log(sumaIntervale(574, 815), '-->', 168069);
console.log(sumaIntervale(-50, 50), '-->', 0);
console.log(sumaIntervale(-70, 30), '-->', -2020);