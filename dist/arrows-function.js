"use strict";

var showName = function showName(name) {
  return "Mr. " + name;
};

console.log(showName("Shahjada"));

var showName1 = function showName1(name) {
  return "Mr. " + name;
};
console.log(showName1("Shahjada"));

var person = {
  name: "Shahjada",
  sayHelloHandler: function sayHelloHandler(hi, callback) {
    callback(hi);
  },
  sayHelloR: function sayHelloR() {
    var _this = this;

    this.sayHelloHandler("Hi ", function (greetings) {
      return console.log(greetings + _this.name);
    });
  },
  sayHelloW: function sayHelloW() {
    this.sayHelloHandler("Hi", function (greetings) {
      console.log(greetings + this.name);
    });
  }
};

person.sayHelloR();
person.sayHelloW();