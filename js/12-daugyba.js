function daugyba(a, b) {
    // jei a nera skaicius -> ERROR
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if (isNaN(a)) {
        return 'ERROR: pirmas parametras turi buti tikras skaicius';
    }

    // jei b nera skaicius -> ERROR
    if (typeof b !== 'number') {
        return 'ERROR: antras parametras turi buti skaicius';
    }
    if ('' + b === 'NaN') {
        return 'ERROR: antras parametras turi buti tikras skaicius';
    }

    return a * b;
};

console.log('ERROR', '-->', daugyba(7.7, 'labas'));
console.log('ERROR', '-->', daugyba('labas', 5));
console.log('ERROR', '-->', daugyba(7.7, ''));
console.log('ERROR', '-->', daugyba('', 5));
console.log('ERROR', '-->', daugyba(7, true));
console.log('ERROR', '-->', daugyba(true, 5));
console.log('ERROR', '-->', daugyba(7, false));
console.log('ERROR', '-->', daugyba(false, 5));
console.log('ERROR', '-->', daugyba(7, []));
console.log('ERROR', '-->', daugyba([], 5));
console.log('ERROR', '-->', daugyba(7, [1, 2, 3]));
console.log('ERROR', '-->', daugyba([1, 2, 3], 5));
console.log(daugyba(7, NaN));
console.log(daugyba(NaN, 5));

console.log(daugyba(7, 5));
console.log(daugyba(-7, 5));
console.log(daugyba(-7, -5));
console.log(daugyba(7, -5));
console.log(daugyba(7.7, -5));
console.log(daugyba(7, Infinity));
console.log(daugyba(Infinity, 5));