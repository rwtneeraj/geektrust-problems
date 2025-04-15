const {
  useCoupon1,
  useCoupon2,
  defaultCoupon,
  getCoupon,
  addCouponDiscount,
} = require("./../src/couponSegment");

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

describe("useCoupon1 testing....", () => {
  test("should return how much discount and total after adding discount", () => {
    const actual = useCoupon1(6000, "diploma");
    expect(actual).toStrictEqual(["B4G1 2500", 3500]);
  });

  test("should return how much discount and total after adding discount", () => {
    const actual = useCoupon1(9000, "certificate");
    expect(actual).toStrictEqual(["B4G1 3000", 6000]);
  });

  test("should return how much discount and total after adding discount", () => {
    const actual = useCoupon1(14000, "degree");
    expect(actual).toStrictEqual(["B4G1 5000", 9000]);
  });
});

describe("addCouponDiscount testing", () => {
  test("should return discount_amount and total_amount ", () => {
    const actual = addCouponDiscount(3, 7500, ["B4G1"], "diploma");
    expect(actual).toStrictEqual(["DEAL_G5 375", 7125]);
  });

  test("should return discount_amount and total_amount ", () => {
    const actual = addCouponDiscount(2, 6000, ["B4G1"], "certificate");
    expect(actual).toStrictEqual(["DEAL_G5 300", 5700]);
  });
});
