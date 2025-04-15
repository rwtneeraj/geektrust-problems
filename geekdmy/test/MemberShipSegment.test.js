const { addMemberShipDiscount } = require("../src/MemberShipSegment");

describe("addMemberShipDiscount testing ...", () => {
  test("should return membership discount and total amount after discount", () => {
    const actual = addMemberShipDiscount({ diploma: 2, degree: 1 });
    expect(actual).toStrictEqual([200, { diploma: 4950, degree: 4850 }]);
  });
});

1;
