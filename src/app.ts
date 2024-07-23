const button = document.querySelector("button");

// button?.addEventListener("click", () => {
//   console.log("Button Clicked!!!");
// });

const add = (a: number, b: number) => a + b;
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

// if (button) {
//   button.addEventListener("click", (output) => console.log(output));
// }

printOutput(add(3, 9));
