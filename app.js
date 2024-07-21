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
// combinedValues = printResult; This gives an error because we have defined the variable to have a function type which
//takes two number arguements and returns a value of type number and this does not meet that criteria
console.log(combinedValues(5, 10));
//Function Types and callbacks
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
