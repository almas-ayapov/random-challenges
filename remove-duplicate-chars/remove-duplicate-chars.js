function removeDuplicateChars(str, numberOfAllowedDuplicates) {
  const charCounter = Object.create(null);
  let result = "";
  for (char of str) {
    if (!charCounter[char]) {
      charCounter[char] = 1;
      continue;
    } else {
      if (charCounter[char] <= numberOfAllowedDuplicates) {
        result = result + char;
        charCounter[char]++;
      }
    }
  }
  return result;
}

module.exports = removeDuplicateChars;
