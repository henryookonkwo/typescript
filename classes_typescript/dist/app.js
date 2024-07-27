"use strict";
class Person {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
user1 = new Person("Henry", 49);
user1.greet("Hello, my name is");
console.log(user1);
//# sourceMappingURL=app.js.map