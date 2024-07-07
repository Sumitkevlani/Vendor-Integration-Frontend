import React from 'react';
import { Pie } from 'react-chartjs-2';

const chartContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '400px', // Adjust as needed
};

const chartStyle = {
  width: '300px', // Adjust as needed
  height: '300px', // Adjust as needed
};

const data = {
  labels: ['Amazon', 'PayPal', 'Mastercard', 'Intuit', 'Cisco', 'Dell', 'SAP'],
  datasets: [
    {
      label: 'Amount Credited',
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
        '#FF6633',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
        '#FF6633',
      ],
      data: [30, 20, 15, 10, 8, 12, 5], // Demo percentages
    },
  ],
};

const VendorAmountPieChart = () => (
  <div style={chartContainerStyle}>
    <div style={chartStyle}>
      <h2 style={{ textAlign: 'center' }}>Amount Credited Distribution</h2>
      <Pie data={data} />
    </div>
  </div>
);

export default VendorAmountPieChart;
