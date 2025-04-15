const {
  getTotalCost,
  getLowestCostProgram,
  getTotalNumberOfPrograms,
  addEnrollmentFee,
} = require("../src/geekdmy");

describe("getTotalCost testing ....", () => {
  test("should return array of two values , if membership is true", () => {
    const actual = getTotalCost(true, { diploma: 2, certificate: 2 });
    expect(actual).toStrictEqual([170, 11030]);
  });
  test("should return array of two values , if membership is false", () => {
    const actual = getTotalCost(false, { diploma: 1, certificate: 2 });
    expect(actual).toStrictEqual([0, 8500]);
  });
});


describe("getLowestCostProgram testing....",()=>{
    test("should return lowest program diploma",()=>{
       const actual = getLowestCostProgram({'diploma' : 1,'certificate' : 2})
       expect(actual).toStrictEqual('diploma')
    })

    test("should return lowest program certificate",()=>{
        const actual = getLowestCostProgram({'degree' : 1,'certificate' : 2})
        expect(actual).toStrictEqual('certificate')
     })
})


describe('getTotalNumberOfPrograms testing ....', () => {
    test("should return total number of program,if few program enrolled.",() => {
    const actual = getTotalNumberOfPrograms({'diploma' : 2,'certificate' : 4})
    expect(actual).toStrictEqual(6);
    })

    test("should return total number of program, if all programm enrolled", () => {
     const actual = getTotalNumberOfPrograms({'diploma' : 2,'certificate' : 2,'degree':2});
     expect(actual).toBe(6)
    })
})