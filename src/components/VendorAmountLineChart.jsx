import React from 'react';
import { Line } from 'react-chartjs-2';

const chartContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '400px', // Adjust as needed
};

const chartStyle = {
  marginTop: '70px',
  width: '500px', // Adjust as needed
  height: '500px', // Adjust as needed
};

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Amount Credited',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      data: [1000, 1500, 2780, 2100, 2000, 3200], // Demo data
    },
  ],
};

const VendorAmountLineChart = () => (
  <div style={chartContainerStyle}>
    <div style={chartStyle}>
      <h2 style={{ textAlign: 'center' }}>Amount Credited Over Months</h2>
      <Line data={data} />
    </div>
  </div>
);

export default VendorAmountLineChart;
