import React from 'react';
import VendorAmountBarChart from './VendorAmountBarChart';
import VendorAmountPieChart from './VendorAmountPieChart';
import TotalAmountDebitedLineChart from './TotalAmountDebitedLineChart';
import VendorAmountLineChart from './VendorAmountLineChart';

const Analytics = () => (
  <div>
    <h1>Analytics</h1>
    
    <div className="chart-container">
      <VendorAmountBarChart />
    </div>
    
    <div className="chart-container">
      <VendorAmountPieChart />
    </div>
    
    <div className="chart-container">
      <VendorAmountLineChart />
    </div>
    
    <div className="chart-container">
      <TotalAmountDebitedLineChart />
    </div>
  </div>
);

export default Analytics;
