//This add function is of type number
var add = function (n1, n2) {
    return n1 + n2;
};
//This printResult function is of tye void
var printResult = function (num) {
    console.log("Result is: ".concat(num));
};
printResult(add(2, 4));
// let someItem = undefined;
var combinedValues;
combinedValues = add;
// combinedValues = printResult;
console.log(combinedValues(5, 10));
