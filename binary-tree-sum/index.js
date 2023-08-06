const tree = {
  value: 6,
  left: {
    value: 5,
    left: {
      value: 7,
    },
    right: {
      value: 10,
    },
  },
  right: {
    value: 3,
    left: {
      value: 8,
      left: {
        value: 4,
        left: {
          value: 5,
        },
        right: {
          value: 7,
        },
      },
      right: {
        value: 5,
      },
    },
    right: {
      value: 5,
    },
  },
};

console.log("Sum of tree is:", require("./binary-tree-sum.js")(tree));
