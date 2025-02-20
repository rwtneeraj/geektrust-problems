//add driver details

import { ADD_DRIVER, ADD_RIDER } from "./addDetails.js";
import { START_RIDE, STOP_RIDE } from "./startAndStopRide.js";
import { MATCH } from "./match.js";
import { billGenerate } from "./bill.js";

const execute = (rider) => {
  if (MATCH(rider)) {
    console.log(START_RIDE("RIDE-001", 2, "R1"));
    console.log(STOP_RIDE("RIDE-001", 4, 5, 32));
    console.log(billGenerate("RIDE-001", "R1"));
  }

  return;
};

const main = () => {
  ADD_DRIVER("D1", 1, 1);
  ADD_DRIVER("D2", 4, 5);
  ADD_DRIVER("D3", 2, 2);
  ADD_RIDER("R1", 0, 0);
  execute("R1");
};

main();
