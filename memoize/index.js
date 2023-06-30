const memoize = require("./memoize.js");

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

const mFib = memoize(fib);

let start = new Date().getTime();
for (let i = 0; i <= 1000; i++) {
  fib(30);
}
let end = new Date().getTime();
console.log(`Unmemoized fibonacci 1000 calls finished in ${end - start} msec.`);

start = new Date().getTime();
for (let i = 0; i <= 1000; i++) {
  mFib(30);
}
end = new Date().getTime();
console.log(`Memoized fibonacci 1000 calls finished in ${end - start} msec.`);
