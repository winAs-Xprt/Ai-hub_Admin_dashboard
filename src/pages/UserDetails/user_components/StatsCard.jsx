import React from 'react';
import { FaGraduationCap, FaBook, FaFileAlt } from 'react-icons/fa';

const iconMap = {
  applications: FaFileAlt,
  colleges: FaGraduationCap,
  courses: FaBook
};

function StatsCard({ title, value, trend, type }) {
  const Icon = iconMap[type] || FaFileAlt;

  return (
    <div className="stats-card">
      <div className="stats-header">
        <h3>{title}</h3>
        <Icon className="stats-icon" />
      </div>
      <div className="stats-value">{value}</div>
      <div className={`stats-trend ${trend.includes('Rise') ? 'rise' : 'fall'}`}>
        <span className="trend-arrow">
          {trend.includes('Rise') ? '↑' : '↓'}
        </span>
        {trend}
      </div>
    </div>
  );
}

export default StatsCard;