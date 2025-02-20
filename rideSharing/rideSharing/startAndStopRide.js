import { matchlist } from "./match.js";

const rideDetails = {};

const START_RIDE = (rideId, N, riderId) => {
  if (matchlist.length < N && !rideId in rideDetails) {
    return `INVALID_RIDE`;
  }

  rideDetails[rideId] = { riderId, driveId: matchlist[N - 1] };
  return `RIDE_STARTED  ${rideId}`;
};

const STOP_RIDE = (rideId, xDest, yDest, timeTaken) => {
  if (rideId in rideDetails) {
    rideDetails[rideId] = { ...rideDetails[rideId], xDest, yDest, timeTaken };
    return `RIDE_STOPPED  ${rideId}`;
  }

  return `INVALID_RIDE`;
};

export {rideDetails, START_RIDE, STOP_RIDE };
