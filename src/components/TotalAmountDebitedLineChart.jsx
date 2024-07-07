import React from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);

const chartContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '700px', // Adjust as needed
};

const chartStyle = {
  width: '500px', // Adjust as needed
  height: '700px', // Adjust as needed
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Total Amount Debited',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(255, 159, 64, 0.4)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(255, 159, 64, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 159, 64, 1)',
      pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [45, 39, 50, 61, 46, 40], // Demo amounts over months
    },
  ],
};

const TotalAmountDebitedLineChart = () => (
  <div style={chartContainerStyle}>
    <div style={chartStyle}>
      <h2 style={{ textAlign: 'center' }}>Total Amount Debited Over Months</h2>
      <Line data={data} />
    </div>
  </div>
);

export default TotalAmountDebitedLineChart;
