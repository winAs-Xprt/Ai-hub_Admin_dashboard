import React from 'react';
import { Pie } from 'react-chartjs-2'; // Import Pie chart
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const UserSatis = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.level), // Satisfaction levels (e.g., Excellent, Good, etc.)
    datasets: [
      {
        data: data.map(item => item.percentage), // Percentage of students in each satisfaction level
        backgroundColor: ['#4CAF50', '#FFEB3B', '#FF9800', '#F44336'], // Different colors for each level
        borderColor: '#FFFFFF', // Border color for the chart
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display:false,
        text: 'User Satisfaction Levels',
      },
      legend: {
        position: 'top',
      },
    },
    maintainAspectRatio: false, // To make the chart responsive
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">User Satisfaction Levels</h2>
      <Pie data={chartData} options={chartOptions} height={250} width={400} />
    </div>
  );
};

export default UserSatis;
