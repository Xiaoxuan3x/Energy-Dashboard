import React from 'react';
import './PercentageIncrease.css'; 

const PercentageIncrease = ({ solarValues, electricValues }) => {
  const calculatePercentageIncrease = (values) => {
    const percentageIncrease = ((values[values.length - 1] - values[0]) / values[0]) * 100;
    return percentageIncrease.toFixed(2);
  };

  return (
    <div className="percentage-container">
      <h2>Monthly Percentage Increase</h2>
      <p>Solar: {calculatePercentageIncrease(solarValues)}%</p>
      <p>Electric: {calculatePercentageIncrease(electricValues)}%</p>
    </div>
  );
};

export default PercentageIncrease;

