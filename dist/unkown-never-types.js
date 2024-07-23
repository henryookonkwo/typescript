"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
}
generateError("An error occurred!", 500);
const button1 = document.querySelector("button");
button1 === null || button1 === void 0 ? void 0 : button1.addEventListener("click", () => {
    console.log("Button Clicked!!!");
});
