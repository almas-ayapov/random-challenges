function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.map((arg) => `${arg}:${typeof arg}`).join("|");
    let result = cache.get(key);
    if (!result) {
      result = fn(...args);
      cache.set(key, result);
    }
    return result;
  };
}

module.exports = memoize;
