import { driversDetals, riderIntialPos } from "./addDetails.js"

export const matchlist = [];

export const findDistance = ([x1, y1], [x2, y2]) => {
  return Math.floor(Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2)));
};

export const MATCH = (riderId) => {
  const riderPosition = Object.values(riderIntialPos[riderId]);

  for (const driveId in driversDetals) {
    const driverPosition = Object.values(driversDetals[driveId]);
    const distance = findDistance(riderPosition, driverPosition);

    if (distance <= 5) {
      matchlist.push(driveId);
    }
  }

  if (matchlist.length > 0) {
    console.log(`DRIVERS_MATCHED  ${matchlist.join(" ")}`);
    return true;
  }

  console.log(`NO_DRIVERS_AVAILABLE`);
  return false;
};
