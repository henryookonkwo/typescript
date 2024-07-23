"use strict";
const button = document.querySelector("button");
// button?.addEventListener("click", () => {
//   console.log("Button Clicked!!!");
// });
const add = (a, b) => a + b;
const printOutput = (output) => console.log(output);
// if (button) {
//   button.addEventListener("click", (output) => console.log(output));
// }
printOutput(add(3, 9));
