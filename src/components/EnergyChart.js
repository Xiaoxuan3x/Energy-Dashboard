import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './EnergyChart.css';

const EnergyChart = ({ label, values, type }) => {
  const chartOptions = {
    chart: {
      id: 'energy-chart',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: label,
    },
  };

  const chartSeries = [
    {
      name: `${type} Energy`,
      data: values,
    },
  ];

  return (
    <div className="chart-container">
      <div className="chart-title">
        <h2>{`${type} Energy Consumption`}</h2>
      </div>
      <div className="chart">
        <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
      </div>
    </div>
  );
};

export default EnergyChart;
