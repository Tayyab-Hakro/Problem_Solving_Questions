function countCoveredPoints(nums) {
    const covered = new Set();
  
    for (const [start, end] of nums) {
        console.log(end)
      for (let i = start; i <= end; i++) {
        covered.add(i);
      }
    }
  
    // return covered.size;
  }
  
  // Example usage:
  const nums = [[1, 3], [5, 8]];
  console.log(countCoveredPoints(nums)); // Output: 7
  