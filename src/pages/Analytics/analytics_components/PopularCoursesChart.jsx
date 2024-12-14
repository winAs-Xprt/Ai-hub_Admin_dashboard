import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the required components of Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PopularCoursesChart = ({ data }) => {
  // Colors for each bar (can be dynamic or a fixed set)
  const colors = [
    '#4CAF50', '#FF5722', '#2196F3', '#FF9800', '#9C27B0', '#607D8B', '#3F51B5'
  ];

  // Data for the bar chart
  const chartData = {
    labels: data.map(course => course.name), // Course names as labels
    datasets: [
      {
        data: data.map(course => course.popularity), // Popularity score
        backgroundColor: data.map((_, index) => colors[index % colors.length]), // Cycle through colors
        borderColor: data.map((_, index) => colors[index % colors.length]), // Border colors
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Popular Courses',
      },
      legend: {
        display: false, // Hide the legend as it's not needed anymore
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="pop-chart-container">
      <h2 className="chart-title">Popular Courses</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default PopularCoursesChart;
