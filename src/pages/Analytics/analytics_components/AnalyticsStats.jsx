import React from 'react';
import { FaGraduationCap, FaBook, FaFileAlt, FaCodepen, FaSchool } from 'react-icons/fa';

const iconMap = {
  users: FaFileAlt,
  colleges:FaSchool,
  tutors: FaGraduationCap,
  courses: FaBook
};

function AnalyticsStats({ title, value, trend, type }) {
  const Icon = iconMap[type] || FaFileAlt;

  return (
    <div className="ana-stats-card">
      <div className="ana-stats-header">
        <h3>{title}</h3>
        <Icon className="ana-stats-icon" />
      </div>
      <div className="ana-stats-value">{value}</div>
      <div className={`ana-stats-trend ${trend.includes('Rise') ? 'rise' : 'fall'}`}>
        <span className="ana-trend-arrow">
          {trend.includes('Rise') ? '↑' : '↓'}
        </span>
        {trend}
      </div>
    </div>
  );
}

export default AnalyticsStats;