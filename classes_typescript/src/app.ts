interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  //   age: number;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
    // this.age = a;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

// user1 = {
//   name: "Henry",
//   //   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

user1 = new Person("Henry Okonkwo");
// user1.name = "Test";

user1.greet("Hello, my name is");
console.log(user1);
