const { getCoupon, addCouponDiscount } = require("./../src/couponSegment");

// test("should collect coupons from user input until they stop",()=>{
//   const prompt = () => {
//     return 'DEAL_G20'
//   }
//   const confirm = () => true;

//     expect(getCoupon()).toEqual(['DEAL_G20'])
// })

// test("should collect coupons from user input until they stop",()=>{
//     const prompt = () => {
//       return 'B4G1'
//     }
//     const confirm = () => false;
//       expect(getCoupon()).toEqual(['B4G1'])
//   })

describe("addCouponDiscount testing", () => {
  test("should return discount_amount and total_amount ", () => {
    const actual = addCouponDiscount(3, 7500, ["B4G1"], "diploma");
    expect(actual).toStrictEqual(["DEAL_G5 375", 7125]);
  });
});
