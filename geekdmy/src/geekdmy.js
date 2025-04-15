const {addMemberShipDiscount,doApplyProMemberShip} = require('./MemberShipSegment');
const {getCoupon,addCouponDiscount} = require('./couponSegment');
const {printBill} = require('./printBill');
const {prompt, DEGREE_COST,DIPLOMA_COST,CERTIFICATION_COST,confirm,programmePrices} = require('./utilites');

const programmeStructure = () => {
  console.log("\n\t\tGeekdmy Programme ..... \n");
  console.log("*".repeat(50));
  console.log("Diploma  : ", "Rs.", DIPLOMA_COST);
  console.log("Certification  : ", "Rs.", CERTIFICATION_COST);
  console.log("Degree : ", "Rs.", DEGREE_COST);
  console.log("*".repeat(50));

  console.log("\n");
};

const getProgrammeWithQty = async () => {
  const purchasedProgrammeWithQty = {};
  console.log(
    "----- selection of the programme and (how many programm do you want) ------"
  );

  do {
    const input =  await prompt(
      "\n*******Please type which programme do you want and and how many? : "
    )
    
    const [programme,Qty] = input.split(" ");

    purchasedProgrammeWithQty[programme] = Qty;

  } while ( await confirm("do you want to add more"));

  return purchasedProgrammeWithQty;
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


const startGeekdmy = async () => {
  programmeStructure();
  const purchasedProgramms  = await getProgrammeWithQty();
  const hasProMemberShip = await doApplyProMemberShip();
  const proMemberShipFee = hasProMemberShip ? 200 : 0.0;
  const coupons = await getCoupon();
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

// startGeekdmy();

module.exports = {getTotalCost,addEnrollmentFee,getTotalNumberOfPrograms,getLowestCostProgram,getProgrammeWithQty};