"use strict";

var _marked = [generatorNames].map(regeneratorRuntime.mark);

function generatorNames() {
    return regeneratorRuntime.wrap(function generatorNames$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 'Shahjada';

                case 2:
                    _context.next = 4;
                    return 'Talukdar';

                case 4:
                    _context.next = 6;
                    return 'MasooM';

                case 6:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var iterator = generatorNames();
var item = iterator.next();

console.log(item.value);

item = iterator.next();
console.log(item.value);