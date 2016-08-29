"use strict";

var functions = [];

for (var index = 0; index < 5; index++) {
  functions.push(function () {
    console.log(index);
  })  
}


functions.forEach(function(funct) {
  funct();
});


functions = [];

for (let index = 0; index < 5; index++) {
  functions.push(function () {
    console.log(index);
  })  
}


functions.forEach(function(funct) {
  funct();
});
