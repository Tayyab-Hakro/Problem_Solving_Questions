const arr = [1, 2, 3];
const subArrays = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    subArrays.push(arr.slice(i, j + 1));
  }
}

console.log(subArrays);
// Output: [ [1], [1,2], [1,2,3], [2], [2,3], [3] ]
