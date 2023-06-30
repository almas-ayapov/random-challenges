const removeDuplicateChars = require("./remove-duplicate-chars");

const inputOne = "abcabcabc";

function output() {
  return `Removing duplicate chars from "${
    arguments[0]
  }" (allowed duplicates is ${arguments[1]}): "${removeDuplicateChars(
    arguments[0],
    arguments[1]
  )}".`;
}

console.log(output("abcabcabc", 2));
console.log(output("aabbcc", 1));
