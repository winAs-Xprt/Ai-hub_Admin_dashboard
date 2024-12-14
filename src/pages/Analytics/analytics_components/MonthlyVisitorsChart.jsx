import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MonthlyVisitorsMountainChart = ({ data }) => {
  // Data for the mountain graph
  const chartData = {
    labels: data.map(item => item.month), // Months as labels
    datasets: [
      {
        label: 'Monthly Visitors',
        data: data.map(item => item.visitors), // Visitors data
        fill: true, // This makes the line chart a filled area chart
        backgroundColor: 'rgba(30, 144, 255, 0.2)', // Light blue fill color
        borderColor: '#1E90FF', // Line color
        borderWidth: 2,
        tension: 0.4, // Makes the curve smooth
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Monthly Visitors Insight',
        font: { size: 20 },
      },
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: Math.max(...data.map(item => item.visitors)) + 50, // Ensure the y-axis accommodates the data
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default MonthlyVisitorsMountainChart;
