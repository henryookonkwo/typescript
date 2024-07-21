//This add function is of type number
const add = (n1: number, n2: number) => {
  return n1 + n2;
};

//This printResult function is of tye void
const printResult = (num: number) => {
  console.log(`Result is: ${num}`);
};

printResult(add(2, 4));

// let someItem = undefined;

let combinedValues: (a: number, b: number) => number;

combinedValues = add;
// combinedValues = printResult;
console.log(combinedValues(5, 10));
