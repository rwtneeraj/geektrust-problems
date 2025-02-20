import {findDistance} from "./match.js"
import { rideDetails } from "./startAndStopRide.js";
import { riderIntialPos } from "./addDetails.js";

const totalBill = (totalFare, timeTaken) => {
  const totalBill = 50 + totalFare * 6.5 + timeTaken * 2;
  return totalBill + totalBill * 0.2;
};

export const billGenerate = (rideId) => {
  if (rideId in rideDetails) {
    const { riderId, driveId, xDest, yDest, timeTaken } = {
      ...rideDetails[rideId],
    };
    const { xPos, yPos } = { ...riderIntialPos[riderId] };
    const totalFare = findDistance([xDest, yDest], [xPos, yPos]);
    const finalAmount = totalBill(totalFare, timeTaken);

    return `BILL ${rideId} ${driveId} ${finalAmount}`;
  }

  return "RIDE_NOT_COMPLETED";
};

