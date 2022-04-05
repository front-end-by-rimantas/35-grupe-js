function bigNum(list) {
    // VALIDATION
    if (typeof list !== 'object') {
        return 'ERROR: netinkamas tipas';
    }
    if (list.length === 0) {
        return 'ERROR: sarasas negali buti tuscias';
    }

    // LOGIC
    let biggestNumber = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        // INNER VALIDATION
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;
        }
        // INNER LOGIC
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    // RESULT VALIDATION
    if (biggestNumber === -Infinity) {
        return 'ERROR: sarase nera nei vieno normalaus skaiciaus';
    }

    // RESULT RETURN
    return biggestNumber;
}

console.log(bigNum('pomidoras'), '-->', 'ERROR');
console.log(bigNum([]), '-->', 'ERROR');
console.log(bigNum(['x']), '-->', 'ERROR');
console.log(bigNum(['x', true, [], -Infinity, NaN, Infinity]), '-->', 'ERROR');

console.log(bigNum([5]), '-->', 5);
console.log(bigNum([1, 2, 3]), '-->', 3);
console.log(bigNum([1, 3, 2]), '-->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '-->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '-->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '-->', -1);

console.log(bigNum([1, 2, 3, 'x']), '-->', 3);
console.log(bigNum([1, 2, 'x', 3]), '-->', 3);
console.log(bigNum([1, 'x', 2, 3]), '-->', 3);
console.log(bigNum(['x', 1, 2, 3]), '-->', 3);

