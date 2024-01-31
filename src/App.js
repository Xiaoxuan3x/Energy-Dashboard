import React from 'react';
import Dashboard from './components/Dashboard';
import energyData from './data/energyData';
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <div className="app-container">
      <Dashboard data={energyData} />
    </div>
  );
};

export default App;

