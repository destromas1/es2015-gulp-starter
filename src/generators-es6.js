"use strict";

function* generatorNames() {
    yield 'Shahjada';
    yield 'Talukdar';
    yield 'MasooM';
}

var iterator = generatorNames();
var item = iterator.next();

console.log(item.value);


item = iterator.next();
console.log(item.value);
