function valueByKeyPath(obj, path) {
  const arr = path.split(".");
  const key = arr.shift();
  const val = obj[key];
  if (val && arr.length > 0) return valueByKeyPath(val, arr.join("."));
  return val;
}

module.exports = valueByKeyPath;
