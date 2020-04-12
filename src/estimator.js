/* eslint-disable max-len */
/* eslint-disable no-restricted-properties */
/* eslint-disable radix */
/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const getFactor = (time) => {
  const power = Math.trunc(time / 3);
  const result = Math.pow(2, power);
  return result;
};

const getNormalizedDays = (periodType, timeToElapse) => {
  switch (periodType) {
    case 'weeks':
      return timeToElapse * 7;
    case 'months':
      return timeToElapse * 30;
    default:
      return timeToElapse;
  }
};

const covid19ImpactEstimator = (data) => {
  let outputData = {
    data,
    impact: {
      currentlyInfected: 0,
      infectionsByRequestedTime: 0
    },
    severeImpact: {
      currentlyInfected: 0,
      infectionsByRequestedTime: 0
    }
  };
  const { reportedCases } = data;
  const { timeToElapse } = data;
  const { periodType } = data;
  const impactCurrentlyInfected = reportedCases * 10;
  const severeImpactCurrentlyInfected = reportedCases * 50;
  const impactInfectionsByRequestedTime = impactCurrentlyInfected * getFactor(getNormalizedDays(periodType, timeToElapse));
  const severeImpactInfectionsByRequestedTime = severeImpactCurrentlyInfected * getFactor(getNormalizedDays(periodType, timeToElapse));
  // outputData.impact.currentlyInfected = data.reportedCases * 10;
  // outputData.severeImpact.currentlyInfected = data.reportedCases * 50;
  // outputData.impact.infectionsByRequestedTime = outputData.impact.currentlyInfected * getFactor(data.timeToElapse);
  // outputData.severeImpact.infectionsByRequestedTime = outputData.severeImpact.currentlyInfected * getFactor(data.timeToElapse);
  return {
    data,
    impact: {
      currentlyInfected: impactCurrentlyInfected,
      infectionsByRequestedTime: impactInfectionsByRequestedTime
    },
    severeImpact: {
      currentlyInfected: severeImpactCurrentlyInfected,
      infectionsByRequestedTime: severeImpactInfectionsByRequestedTime
    }
  };
};

export default covid19ImpactEstimator;
