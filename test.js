let who = process.argv[2];
let greeting = `${who} Hello`;
console.log(greeting);

class User {
  constructor(a) {
    this.a = a;
  }

  get() {
    console.log(a);
    console.log(this.a);
  }
};

let a = new User('asd');

a.a

a.get();