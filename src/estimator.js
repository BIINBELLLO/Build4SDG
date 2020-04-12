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
  const { reportedCases } = data;
  const { timeToElapse } = data;
  const { periodType } = data;
  const { totalHospitalBeds } = data;
  const impactCurrentlyInfected = reportedCases * 10;
  const severeImpactCurrentlyInfected = reportedCases * 50;
  const impactInfectionsByRequestedTime = impactCurrentlyInfected * getFactor(getNormalizedDays(periodType, timeToElapse));
  const severeImpactInfectionsByRequestedTime = severeImpactCurrentlyInfected * getFactor(getNormalizedDays(periodType, timeToElapse));
  const impactSevereCasesByRequestedTime = Math.trunc(impactInfectionsByRequestedTime * 0.15);
  const severeSevereCasesByRequestedTime = Math.trunc(severeImpactInfectionsByRequestedTime * 0.15);
  const impactHospitalBedsByRequestedTime = Math.trunc((totalHospitalBeds * 0.35) - impactSevereCasesByRequestedTime);
  const severeHospitalBedsByRequestedTime = Math.trunc((totalHospitalBeds * 0.35) - severeSevereCasesByRequestedTime);
  return {
    data,
    impact: {
      currentlyInfected: impactCurrentlyInfected,
      infectionsByRequestedTime: impactInfectionsByRequestedTime,
      severeCasesByRequestedTime: impactSevereCasesByRequestedTime,
      hospitalBedsByRequestedTime: impactHospitalBedsByRequestedTime
    },
    severeImpact: {
      currentlyInfected: severeImpactCurrentlyInfected,
      infectionsByRequestedTime: severeImpactInfectionsByRequestedTime,
      severeCasesByRequestedTime: severeSevereCasesByRequestedTime,
      hospitalBedsByRequestedTime: severeHospitalBedsByRequestedTime
    }
  };
};

export default covid19ImpactEstimator;
