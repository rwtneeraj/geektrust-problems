const readline = require('readline');
// const prompt = require('prompt-sync')();

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

const prompt = (question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

 const confirm = async (question) =>  {
  const answer = await prompt(`${question} (y/n): `);
  return answer.trim().toLowerCase() === 'y';
}


module.exports  = {prompt,confirm,CERTIFICATION_COST, DEGREE_COST, DIPLOMA_COST, membershipDiscountForIndividual, programmePrices};