"use strict";
/*
    необходимо написать функцию toString(), которая принимает любой тип и возвращает его строковое представление.
    Если не может, то возвращает undefined
*/
function toString(value) {
    if (Array.isArray(value)) {
        return value.toString();
    }
    switch (typeof value) {
        case 'string':
            return value;
        case 'number':
        case 'boolean':
        case 'symbol':
        case 'bigint':
        case 'function':
            return value.toString();
        case 'object':
            return JSON.stringify(value);
        default:
            return undefined;
    }
}
console.log(toString(123));
console.log(toString('123'));
console.log(toString(true));
console.log(toString({ a: 2, w: 4 }));
console.log(toString(['a', 'b', 'c']));
