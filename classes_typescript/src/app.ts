//decorator factories
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log();
  };
}

@Logger("LOGGING- PERSON")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);
