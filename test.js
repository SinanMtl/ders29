class Comp {
  constructor () {
    this.count = 0;
  }

  get message() {
    return this.count * 2;
  }

  set message(val) {
    this.count = val;
  }
}

const counter = new Comp();

counter.message();
