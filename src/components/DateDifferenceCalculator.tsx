//DateDifferenceCalculator.tsx
import React from 'react';
import DateInput from './DateInput';
import CalculateButton from './CalculateButton';
import useDateDifferenceCalculator from '../hooks/useDateDifferenceCalculator';

const DateDifferenceCalculator: React.FC = () => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    dateDifference,
    calculateDifference
  } = useDateDifferenceCalculator();

  return (
      <div>
          <DateInput label="Start Date" value={startDate} onChange={setStartDate} />
  <DateInput label="End Date" value={endDate} onChange={setEndDate} />
  <CalculateButton
  calculateDifference={calculateDifference}
  />
  {dateDifference !== null && <div>Difference: {dateDifference} days</div>}
  </div>
  );
};

export default DateDifferenceCalculator;
