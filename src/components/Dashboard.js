import React, { useState } from 'react';
import EnergyChart from './EnergyChart';
import PercentageIncrease from './PercentageIncrease';
import './Dashboard.css'
const Dashboard = ({ data }) => {
  const [activeTab, setActiveTab] = useState('Northampton');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h1>Cres Dashboard</h1>
      <div>
        <button onClick={() => handleTabChange('Northampton')}>Northampton</button>
        <button onClick={() => handleTabChange('Radbroke')}>Radbroke</button>
      </div>
      <div className="charts-section">
        {activeTab === 'Northampton' && (
          <div>
            <h2>Northampton</h2>
            <div className="chart-container">
              <div className="chart">
                <EnergyChart label={data.Northampton.solar.label} values={data.Northampton.solar.value} type="Solar" />
              </div>
              <div className="chart">
                <EnergyChart
                  label={data.Northampton.electric.label}
                  values={data.Northampton.electric.value}
                  type="Electric"
                />
              </div>
            </div>
          </div>
        )}
        {activeTab === 'Radbroke' && (
          <div>
            <h2>Radbroke</h2>
            <div className="chart-container">
              <div className="chart">
                <EnergyChart label={data.Radbroke.solar.label} values={data.Radbroke.solar.value} type="Solar" />
              </div>
              <div className="chart">
                <EnergyChart
                  label={data.Radbroke.electric.label}
                  values={data.Radbroke.electric.value}
                  type="Electric"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="percentage-section">
        <PercentageIncrease
          solarValues={activeTab === 'Northampton' ? data.Northampton.solar.value : data.Radbroke.solar.value}
          electricValues={activeTab === 'Northampton' ? data.Northampton.electric.value : data.Radbroke.electric.value}
        />
      </div>
    </div>
  );
};

export default Dashboard;
