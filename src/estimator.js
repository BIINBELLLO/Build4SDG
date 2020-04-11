/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
let outputData = {
  data: {
  },
  impact: {
    currentlyInfected: 0,
    infectionsByRequestedTime: 0
  },
  severImpact: {
    currentlyInfected: 0,
    infectionsByRequestedTime: 0
  }
};
const covid19ImpactEstimator = (data) => {
  outputData.impact.currentlyInfected = data.reportedCases * 10;
  outputData.severImpact.currentlyInfected = data.reportedCases * 50;
  outputData.impact.infectionsByRequestedTime = outputData.impact.currentlyInfected * 512;
  outputData.severImpact.infectionsByRequestedTime = outputData.severImpact.currentlyInfected * 512;
};
export default covid19ImpactEstimator;
