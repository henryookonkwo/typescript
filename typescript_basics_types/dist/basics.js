"use strict";
const add = (num1, num2, showResult, phrase) => {
    //   if (typeof num1 !== "number" || typeof num2 !== "number") {
    //     throw new Error("Incorrect input!");
    //   }
    const result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
};
const number1 = 3;
const number2 = 15.4;
const printResult = true;
const resultPhrase = "The result is ";
const result = add(number1, number2, printResult, resultPhrase);
