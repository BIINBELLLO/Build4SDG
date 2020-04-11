/* eslint-disable no-restricted-properties */
/* eslint-disable radix */
/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const getFactor = (time) => {
  const power = parseInt((time / 3).toFixed());
  const result = Math.pow(2, power);
  return result;
};

const covid19ImpactEstimator = (data) => {
  let outputData = {
    data,
    impact: {
      currentlyInfected: 0,
      infectionsByRequestedTime: 0
    },
    severImpact: {
      currentlyInfected: 0,
      infectionsByRequestedTime: 0
    }
  };
  outputData.impact.currentlyInfected = data['reportedCases'] * 10;
  outputData.severImpact.currentlyInfected = data['reportedCases'] * 50;
  outputData.impact.infectionsByRequestedTime = outputData.impact.currentlyInfected * getFactor(data.timeToElapse);
  outputData.severImpact.infectionsByRequestedTime = outputData.severImpact.currentlyInfected * getFactor(data.timeToElapse);
  return outputData;
};


// const getPowerValue()
export default covid19ImpactEstimator;
