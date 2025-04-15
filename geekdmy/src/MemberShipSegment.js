const {confirm,programmePrices,membershipDiscountForIndividual} = require('./utilites');

const doApplyProMemberShip = async () => {
    const apply = await confirm(
      "\n*****Do you want to apply pro membership for getting discount ??..."
    );
  
    return apply;
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
  
    return [totalProDiscount, discountProgramms];
  };

  module.exports = {doApplyProMemberShip, addMemberShipDiscount};