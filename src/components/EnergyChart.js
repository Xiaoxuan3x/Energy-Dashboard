import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './EnergyChart.css';

const EnergyChart = ({ label, values, type }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the existing chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: label,
        datasets: [
          {
            label: `${type} Energy Consumption`,
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Customize the color as needed
            borderColor: 'rgba(75, 192, 192, 1)', // Customize the color as needed
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            labels: label,
          },
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          title: {
            display: true,
            text: `${type} Energy Consumption`,
          },
        },
      },
    });

    return () => {
      // Cleanup code if needed
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [label, values, type]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef} height={350}></canvas>
    </div>
  );
};

export default EnergyChart;

