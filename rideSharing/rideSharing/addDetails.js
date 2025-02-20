export const driversDetals = {};
export const riderIntialPos = {};

export const ADD_DRIVER = (driveId, xPositon, yPosition) => {
  if (!(driveId in driversDetals)) {
    driversDetals[driveId] = { xPositon, yPosition };
  }
};

// add rider Details
export const ADD_RIDER = (riderId, xPos, yPos) => {
  if (!(riderId in riderIntialPos)) {
    riderIntialPos[riderId] = { xPos, yPos };
  }
};
