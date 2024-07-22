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
// combinedValues = printResult; This gives an error because we have defined the variable to have a function type which
//takes two number arguements and returns a value of type number and this does not meet that criteria
console.log(combinedValues(5, 10));

//Function Types and callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
