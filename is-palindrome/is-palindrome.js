const isPalindrome = (str) => {
  let headIndex = 0;
  let tailIndex = str.length - 1;

  while (headIndex < tailIndex) {
    const HEAD = str[headIndex];
    const TAIL = str[tailIndex];

    if (HEAD.toLowerCase() === HEAD.toUpperCase()) {
      ++headIndex;
      continue;
    }

    if (TAIL.toLowerCase() === TAIL.toUpperCase()) {
      --tailIndex;
      continue;
    }

    if (HEAD.toLowerCase() !== TAIL.toLowerCase()) return false;

    ++headIndex;
    --tailIndex;
  }

  return true;
};

module.exports = isPalindrome;
