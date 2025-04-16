let stack = [];

// Push items
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack); // [10, 20, 30]

// Pop item
let lastItem = stack.pop();
console.log(lastItem); // 30
console.log(stack);    // [10, 20]
