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
// generateError("An error occurred!", 500);
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("Button Clicked!!!");
});
