"use strict";
let user1;
user1 = {
    name: "Henry",
    age: 30,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Hello, my name is");
//# sourceMappingURL=app.js.map