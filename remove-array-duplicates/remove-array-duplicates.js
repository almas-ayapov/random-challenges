function removeArrayDuplicates(array) {
  const unique = Object.create(null);
  for (const item of array) {
    unique[item] = null;
  }
  return Object.keys(unique);
}

module.exports = removeArrayDuplicates;
