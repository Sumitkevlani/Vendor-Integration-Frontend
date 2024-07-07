import React from 'react';
import { Bar } from 'react-chartjs-2';

const chartContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '400px', // Adjust as needed
};

const chartStyle = {
  width: '700px', // Adjust as needed
  height: '300px', // Adjust as needed
};

const data = {
  labels: ['Amazon', 'PayPal', 'Mastercard', 'Intuit', 'Cisco', 'Dell', 'SAP'],
  datasets: [
    {
      label: 'Amount Credited',
      backgroundColor: '#36A2EB',
      data: [5000, 3000, 4000, 7000, 2000, 8000, 6000], // Demo data
    },
  ],
};

const VendorAmountBarChart = () => (
  <div style={chartContainerStyle}>
    <div style={chartStyle}>
      <h2 style={{ textAlign: 'center' }}>Amount Credited by Vendor</h2>
      <Bar data={data} />
    </div>
  </div>
);

export default VendorAmountBarChart;
