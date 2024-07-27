"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
user1 = new Person("Henry Okonkwo");
user1.greet("Hello, my name is");
console.log(user1);
//# sourceMappingURL=app.js.map