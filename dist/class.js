"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HumanBeing = function () {
  function HumanBeing() {
    _classCallCheck(this, HumanBeing);

    this.lang = '';
  }

  _createClass(HumanBeing, [{
    key: "setLang",
    value: function setLang(message) {
      this.lang = message;
    }
  }, {
    key: "showLang",
    value: function showLang() {
      console.log(this.lang);
    }
  }]);

  return HumanBeing;
}();

var human = new HumanBeing();
human.setLang("Bengali!!!");
human.showLang();