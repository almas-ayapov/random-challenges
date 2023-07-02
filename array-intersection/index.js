const arrayIntersection = require("./array-intersection");

function output() {
  return `[${arguments}] intersection is ${arrayIntersection(...arguments)}`;
}

console.log(output([1, 2, 3, 8], [1, 2, 4, 5, 6, 7, 8]));
