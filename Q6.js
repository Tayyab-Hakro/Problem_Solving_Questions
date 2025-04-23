function maximumUnits(boxTypes, truckSize) {
    // Step 1: Sort by units per box, descending
    boxTypes.sort((a, b) => b[1] - a[1]);
    console.log(boxTypes +"box")
    let totalUnits = 0;

    // Step 2: Load boxes greedily
    for (let [boxes, units] of boxTypes) {
        let take = Math.min(truckSize, boxes); // take as many as possible
        totalUnits += take * units;
        truckSize -= take;
        if (truckSize === 0) break; // truck is full
    }

    return totalUnits;
}


console.log(maximumUnits([[1,3],[2,2],[3,1]],  4))