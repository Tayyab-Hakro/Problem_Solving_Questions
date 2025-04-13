class UndergroundSystem {
    constructor() {
      this.checkInMap = new Map(); // id -> { stationName, time }
      this.travelMap = new Map();  // "start:end" -> { totalTime, tripCount }
    }
  
    checkIn(id, stationName, t) {
      this.checkInMap.set(id, { stationName, time: t });
    }
  
    checkOut(id, endStation, t) {
      const { stationName: startStation, time: startTime } = this.checkInMap.get(id);
      const routeKey = `${startStation}:${endStation}`;
      const travelTime = t - startTime;
  
      if (!this.travelMap.has(routeKey)) {
        this.travelMap.set(routeKey, { totalTime: 0, tripCount: 0 });
      }
  
      const routeData = this.travelMap.get(routeKey);
      routeData.totalTime += travelTime;
      routeData.tripCount += 1;
  
      // Optional: remove user check-in data after checkout
      this.checkInMap.delete(id);
    }
  
    getAverageTime(startStation, endStation) {
      const routeKey = `${startStation}:${endStation}`;
      const { totalTime, tripCount } = this.travelMap.get(routeKey);
      return totalTime / tripCount;
    }
  }
  const undergroundSystem = new UndergroundSystem();

  undergroundSystem.checkIn(1, "A", 3);
  undergroundSystem.checkOut(1, "B", 8); // Travel time = 5
  
  undergroundSystem.checkIn(2, "A", 10);
  undergroundSystem.checkOut(2, "B", 16); // Travel time = 6
  
  console.log(undergroundSystem.getAverageTime("A", "B")); // Output: 5.5
    