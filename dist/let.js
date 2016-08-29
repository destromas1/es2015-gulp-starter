"use strict";

var functions = [];

for (var index = 0; index < 5; index++) {
  functions.push(function () {
    console.log(index);
  });
}

functions.forEach(function (funct) {
  funct();
});

functions = [];

var _loop = function _loop(_index) {
  functions.push(function () {
    console.log(_index);
  });
};

for (var _index = 0; _index < 5; _index++) {
  _loop(_index);
}

functions.forEach(function (funct) {
  funct();
});