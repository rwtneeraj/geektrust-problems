"use strict";

var printBill = function printBill(sub_total, coupon_discount, totalProDiscount, proMemberShipFee, enrollementFee, total) {
  console.log("\n\n");
  console.log("SUB_TOTAL ", sub_total);
  console.log("COUPON_DISCOUNT ", coupon_discount);
  console.log("TOTAL_PRO_DISCOUNT ", totalProDiscount);
  console.log("PRO_MEMBERSHIP_FEE ", proMemberShipFee);
  console.log("ENROLLMENT_FEE", enrollementFee);
  console.log("TOTAL ", total);
};
module.exports = {
  printBill: printBill
};