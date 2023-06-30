const objectValueByKeyPath = require("./object-value-by-key-path");

const obj = {
  a: {
    b: {
      c: "d",
    },
    e: "f",
  },
};

function output() {
  return `Value of ${JSON.stringify(arguments[0])} on path "${
    arguments[1]
  }" is ${JSON.stringify(objectValueByKeyPath(obj, arguments[1]))}.`;
}

console.log(output(obj, "a.b"));
console.log(output(obj, "a.b.c"));
console.log(output(obj, "a.e"));
console.log(output(obj, "r"));
