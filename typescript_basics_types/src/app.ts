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

const hobbies = ["running", "swimming"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  name: "Henry",
  age: 302,
};
//spread parameter
const copiedPerson = { ...person };
console.log(copiedPerson);

//rest parameter - a feature for accepting unlimited amounts of documents
const addMultipleNumbers = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
printOutput(addMultipleNumbers(4, 5, 6, 2, 5, 6, 2));
