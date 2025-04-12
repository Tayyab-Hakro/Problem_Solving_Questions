var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    return (arrivalTime + delayedTime) % 24;
};

console.log(findDelayedArrivalTime(15 ,5))
console.log(findDelayedArrivalTime(13, 11))
console.log(findDelayedArrivalTime(14, 8))
