const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const reducer = (totalBatteries, currentBatch) => totalBatteries + currentBatch;

const totalBatteries = batteryBatches.reduce(reducer, 0);

console.log(totalBatteries);

module.exports = totalBatteries;