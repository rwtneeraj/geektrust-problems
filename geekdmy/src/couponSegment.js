const {programmePrices, prompt,confirm} = require('./utilites')
const MagicNumber = 10000;

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
   
  const useCoupon1 = (sub_total,lowesetProgramm) => {
    const coupon_discount = `B4G1 ${programmePrices[lowesetProgramm]}`;
    return [coupon_discount, sub_total - programmePrices[lowesetProgramm]];
  }

  const useCoupon2 = (sub_total) => {
    const coupon_discount = `DEAL_G20 ${sub_total * 0.2}`;
    return [coupon_discount, sub_total - sub_total * 0.2];
  }
  const defaultCoupon = (sub_total) => {
    const coupon_discount = `DEAL_G5 ${sub_total * 0.05}`;
    return [coupon_discount, sub_total - sub_total * 0.05];
  }

  const addCouponDiscount = (totalNumberOfProgram,sub_total,coupons,lowesetProgramm) => {
    if (totalNumberOfProgram >= 4) {
       return useCoupon1(sub_total,lowesetProgramm)
    }
  
    if (sub_total >= MagicNumber && coupons.includes("DEAL_G20")) {
      return useCoupon2(sub_total)
    }
  
   return defaultCoupon(sub_total)
  };

  module.exports = {useCoupon1,useCoupon2,defaultCoupon,getCoupon, addCouponDiscount}