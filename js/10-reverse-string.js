function reverseString(text) {
    let reverse = '';

    for (let i = 0; i < text.length; i++) {
        const position = text.length - 1 - i;
        reverse += text[position];
    }

    return reverse;
}

console.log(reverseString('abcdef'), '-->', 'fedcba');
console.log(reverseString('labas'), '-->', 'sabal');
console.log(reverseString('sula'), '-->', 'alus');

function reverseString2(text) {
    let reverse = '';

    for (let i = 0; i < text.length; i++) {
        reverse = text[i] + reverse;
    }

    return reverse;
}
console.log('----------');
console.log(reverseString2('abcdef'), '-->', 'fedcba');
console.log(reverseString2('labas'), '-->', 'sabal');
console.log(reverseString2('sula'), '-->', 'alus');

function reverseString3(text) {
    let reverse = '';

    for (let i = text.length - 1; i >= 0; i--) {
        reverse += text[i];
    }

    return reverse;
}
console.log('----------');
console.log(reverseString3('abcdef'), '-->', 'fedcba');
console.log(reverseString3('labas'), '-->', 'sabal');
console.log(reverseString3('sula'), '-->', 'alus');