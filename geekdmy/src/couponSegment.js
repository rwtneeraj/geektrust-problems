const {programmePrices, prompt,confirm} = require('./utilites')

const getCoupon = async () => {
    console.log(
      "\n----------There are three coupon to add discount :  DEAL_G20 , DEAL_G5,  B4G1 ----------"
    );
    const coupons = [];
  
    do {
      const coupon = await prompt("\n***Please apply the coupon : ");
      coupons.push(coupon);
    } while (await confirm("\n***Do you want add more..."));
  
    return coupons;
  };

  const addCouponDiscount = (
    totalNumberOfProgram,
    sub_total,
    coupons,
    lowesetProgramm
  ) => {
    if (totalNumberOfProgram >= 4) {
      const coupon_discount = `B4G1 ${programmePrices[lowesetProgramm]}`;
      return [coupon_discount, sub_total - programmePrices[lowesetProgramm]];
    }
  
    if (sub_total >= 10000 && coupons.includes("DEAL_G20")) {
      const coupon_discount = `DEAL_G20 ${sub_total * 0.2}`;
      return [coupon_discount, sub_total - sub_total * 0.2];
    }
  
    const coupon_discount = `DEAL_G5 ${sub_total * 0.05}`;
  
    return [coupon_discount, sub_total - sub_total * 0.05];
  };

  module.exports = {getCoupon, addCouponDiscount}