import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const CourseCompletionChart = ({ data }) => {
  const chartData = {
    labels: ['Completed', 'In Progress'],
    datasets: [
      {
        data: data, 
        backgroundColor: ['#4CAF50', '#FF9800'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="course-completion-chart">
      <Pie data={chartData} />
    </div>
  );
};

export default CourseCompletionChart;
