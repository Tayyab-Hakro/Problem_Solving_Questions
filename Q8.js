function trimMean(arr) {
    arr.sort((a, b) => a - b); // Sort in ascending order
    const n = arr.length;
    const trim = Math.floor(n * 0.05); // 5% trimmed count
    const trimmedArr = arr.slice(trim, n - trim); // Remove smallest and largest 5%
    console.log(trimmedArr)
    const sum = trimmedArr.reduce((acc, val) => acc + val, 0);
    return sum / trimmedArr.length;
  }
  
console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]))