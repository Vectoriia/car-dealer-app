const getYearRange = (startYear: number, endYear: number): number[] => {
  const yearRange = Array.from({ length: endYear - startYear }, (_, i) => startYear + i);
  return yearRange;
};

export default getYearRange;