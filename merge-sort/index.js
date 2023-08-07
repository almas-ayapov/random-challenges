const mergeSort = require("./merge-sort.js");

function output() {
  return `[${Object.values(arguments).join(
    "] and ["
  )}] merged and sorted: [${mergeSort(...arguments)}].`;
}

console.log(output([1, 6, 2, 5], [7, 4, 7, 4], [5, 5, 0, 3, 1, 7]));
