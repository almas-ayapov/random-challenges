const mergeSort = (...args) => {
  return args.flat().sort((a, b) => Number(a) - Number(b));
};

module.exports = mergeSort;
