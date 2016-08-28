class HumanBeing {
  constructor() {
    this.lang = '';
  }
  setLang(message) {
    this.lang = message;
  }
  showLang() {
    console.log(this.lang);
  }
}


const human = new HumanBeing();
human.setLang("Bengali!!!");
human.showLang();
