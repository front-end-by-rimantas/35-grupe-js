function numSize(num) {
    if (typeof num !== 'number'
        || !isFinite(num)) {
        return 'ERROR: netinkamas tipas';
    }

    const numAsString = '' + num;
    let size = numAsString.length;

    // nustatome ar skaicius yra desimtainis (turi kableli)
    if (num % 1 !== 0) {
        size--;
    }

    // jei skaicius neigiamas
    if (num < 0) {
        size--;
    }

    return size;
}

console.log(numSize(true), '-->', 'ERROR.');
console.log(numSize('asd'), '-->', 'ERROR.');
console.log(numSize(NaN), '-->', 'ERROR.');
console.log(numSize(Infinity), '-->', 'ERROR.');
console.log(numSize(-Infinity), '-->', 'ERROR.');
console.log(numSize(true), '-->', 'ERROR.');
console.log(numSize([]), '-->', 'ERROR.');
console.log(numSize([1]), '-->', 'ERROR.');
console.log(numSize(), '-->', 'ERROR.');
console.log(numSize(numSize), '-->', 'ERROR.');

console.log(numSize(5), '-->', 1);
console.log(numSize(781), '-->', 3);
console.log(numSize(37060123456), '-->', 11);
console.log(numSize(3.14), '-->', 3);
console.log(numSize(2.727), '-->', 4);
console.log(numSize(-5), '-->', 1);
console.log(numSize(-5.745), '-->', 4);

console.log('EXTRA... (galvos skausmas)');
console.log(numSize(0.0000001), '-->', 8);
console.log(numSize(1000000000000000000000), '-->', 22);