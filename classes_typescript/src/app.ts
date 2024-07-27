interface Greetbale {
  name: string;
  //   age: number;

  greet(phrase: string): void;
}

class Person implements Greetbale {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetbale;

// user1 = {
//   name: "Henry",
//   //   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

user1 = new Person("Henry", 49);

user1.greet("Hello, my name is");
console.log(user1);
