var showName = (name) => {
  return "Mr. " + name;
};

console.log(showName("Shahjada"));

var showName1 = name =>  "Mr. " + name;
console.log(showName1("Shahjada"));

var person = {
  name: "Shahjada",
  sayHelloHandler : function (hi , callback) {
    callback(hi);
  },
  sayHelloR : function () {
    this.sayHelloHandler("Hi ", greetings => console.log(greetings  + this.name));
  },
  sayHelloW : function () {
    this.sayHelloHandler("Hi", function (greetings) {
      console.log(greetings + this.name);
    });
  }
}

person.sayHelloR();
person.sayHelloW();
