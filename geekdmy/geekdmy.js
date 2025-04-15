const prompt = require('prompt-sync')();
const CERTIFICATION_COST = 3000;
const DEGREE_COST = 5000;
const DIPLOMA_COST = 2500;

const programmePrices = {
  certificate: CERTIFICATION_COST,
  degree: DEGREE_COST,
  diploma: DIPLOMA_COST,
};

const membershipDiscountForIndividual = {
  certificate: 0.02,
  diploma: 0.01,
  degree: 0.03,
};

const programmeStructure = () => {
  console.log("\n\t\tGeekdmy Programme ..... \n");
  console.log("*".repeat(50));
  console.log("Diploma  : ", "Rs. ", DIPLOMA_COST);
  console.log("Certification  : ", "Rs. ", CERTIFICATION_COST);
  console.log("Degree : ", "Rs. ", DEGREE_COST);
  console.log("*".repeat(50));

  console.log("\n");
};

const getProgrammeWithQty = () => {
  const purchasedProgrammeWithQty = {};
  
  console.log(
    "----- selection of the programme and (how many programm do you want) ------"
  );

  do {
    const [programme, Qty] = prompt(
      "\nPlease type which programme do you want and and how many? : "
    ).split(" ");

    purchasedProgrammeWithQty[programme] = Qty;

  } while (confirm("do you want to add more"));

  return purchasedProgrammeWithQty;
};

const doApplyProMemberShip = () => {
  const apply = confirm(
    " \n Do you want to apply pro membership for getting discount ??..."
  );

  return apply;
};

const getCoupon = () => {
  console.log(
    "\n There are three coupon to add discount :  DEAL_G20 , DEAL_G5,  B4G1 "
  );
  const coupons = [];

  do {
    const coupon = prompt("\n Please apply the coupon");
    coupons.push(coupon);
  } while (confirm(" \n Do you want add more..."));

  return coupons;
};

const addMemberShipDiscount = (purchasedProgramms) => {
  const discountProgramms = {};
  let totalProDiscount = 0;

  for (const key in purchasedProgramms) {
    const netPrice = programmePrices[key] * purchasedProgramms[key];
    const discountPrice = netPrice * membershipDiscountForIndividual[key];
    discountProgramms[key] = netPrice - discountPrice;
    totalProDiscount += discountPrice;
  }

  console.log(discountProgramms);
  return [totalProDiscount, discountProgramms];
};

const getTotalCost = (hasProMemberShip, purchasedProgramms) => {
  let total = 0;

  if (hasProMemberShip) {
    const [totalProDiscount, addedMemberShipPrices] =
      addMemberShipDiscount(purchasedProgramms);
    total = Object.values(addedMemberShipPrices).reduce((sum, price) => {
      sum += price;
      return sum;
    }, 0);

    total += 200;
    return [totalProDiscount, total];
  }

  for (const key in purchasedProgramms) {
    total = total + Number(purchasedProgramms[key]) * programmePrices[key];
  }

  return [0.0, total];
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

const getLowestCostProgram = (purchasedProgramms) => {
  if ("diploma" in purchasedProgramms) {
    return "diploma";
  }

  if ("certificate" in purchasedProgramms) {
    return "certificate";
  }

  return "degree";
};

const getTotalNumberOfPrograms = (purchasedProgramms) => {
  return Object.values(purchasedProgramms).reduce((sum, qty) => {
    sum += Number(qty);
    return sum;
  }, 0);
};

const addEnrollmentFee = (cost) => {
  return cost + 500;
};

const printBill = (
  sub_total,
  coupon_discount,
  totalProDiscount,
  proMemberShipFee,
  enrollementFee,
  total
) => {
  console.log("\n\n");
  console.log("SUB_TOTAL ", sub_total);
  console.log("COUPON_DISCOUNT ", coupon_discount);
  console.log("TOTAL_PRO_DISCOUNT ", totalProDiscount);
  console.log("PRO_MEMBERSHIP_FEE ", proMemberShipFee);
  console.log("ENROLLMENT_FEE", enrollementFee);
  console.log("TOTAL ", total);
};

const startGeekdmy = () => {
  programmeStructure();
  const purchasedProgramms = getProgrammeWithQty();
  const hasProMemberShip = doApplyProMemberShip();
  const proMemberShipFee = hasProMemberShip ? 200 : 0.0;
  const coupons = getCoupon();
  const [totalProDiscount, sub_total] = getTotalCost(
    hasProMemberShip,
    purchasedProgramms
  );
  const totalNumberOfProgram = getTotalNumberOfPrograms(purchasedProgramms);
  const lowestCostProgramm = getLowestCostProgram(purchasedProgramms);
  const [coupon_discount, discountAddedfee] = addCouponDiscount(
    totalNumberOfProgram,
    sub_total,
    coupons,
    lowestCostProgramm
  );

  const enrollementFee = discountAddedfee < 6666 ? 500 : 0;
  const total = discountAddedfee + enrollementFee;
  printBill(
    sub_total,
    coupon_discount,
    totalProDiscount,
    proMemberShipFee,
    enrollementFee,
    total
  );
};

startGeekdmy();
