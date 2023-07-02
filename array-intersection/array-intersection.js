function arrayIntersection(...arrays) {
  return [...new Set(...arrays)];
}

module.exports = arrayIntersection;
