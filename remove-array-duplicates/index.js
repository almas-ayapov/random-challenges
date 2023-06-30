const removeArrayDuplicates = require("./remove-array-duplicates.js");

const array = [1, 1, 2, 3, 4, 5, 5];

console.log(
  `Removing array duplicates from [${array}], with result [${removeArrayDuplicates(
    array
  )}]`
);
