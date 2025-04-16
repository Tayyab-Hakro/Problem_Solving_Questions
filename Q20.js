function countTestedDevices(batteryPercentages) {
    let count = 0;
    let n = batteryPercentages.length;
  
    for (let i = 0; i < n; i++) {
      if (batteryPercentages[i] > 0) {
        count++;
        for (let j = i + 1; j < n; j++) {
          batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
        }
      }
    }
  
    return count;
  }
  console.log(countTestedDevices([1, 1, 2, 1, 3])); // Output: 3
  console.log(countTestedDevices([0, 0, 0]));       // Output: 0
    