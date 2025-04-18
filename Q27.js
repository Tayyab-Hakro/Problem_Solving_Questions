let unique = new Set();
for (let num of nums) {
    if (num !== 0) unique.add(num);
}
return unique.size; // that's our answer
