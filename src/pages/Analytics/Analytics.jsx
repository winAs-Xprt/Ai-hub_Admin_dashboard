import React from 'react';
import AnaStatsCard from './analytics_components/AnalyticsStats';
import PopularCoursesChart from './analytics_components/PopularCoursesChart'; // Popular courses chart
import UserSatis from './analytics_components/UserSatis'; // User satisfaction chart
import MonthlyVisitorsChart from './analytics_components/MonthlyVisitorsChart'; // Monthly Visitors chart
import { statsData, popularCoursesData, userSatisfactionData, monthlyVisitorsData } from './data/analyticsdata';
import './analytics.css';

function Analytics() {
  return (
    <div className="analytics-container">
      <h1 className="ana-page-title">Analytics</h1>

      <div className="ana-stats-container">
        {statsData.map((stat, index) => (
          <AnaStatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="charts-container">
        {/* Popular Courses on the left */}
        <div className="chart-item">
          <PopularCoursesChart data={popularCoursesData} />
        </div>

        {/* User Satisfaction on the right */}
        <div className="chart-item">
          <UserSatis data={userSatisfactionData} />
        </div>
      </div>

      <div className="mon-charts-container">
        <div className="mon-chart-item">
          <h2 className="Chart Title">Monthly Visitors Insights</h2>
          <MonthlyVisitorsChart data={monthlyVisitorsData} />
        </div>
      </div>

    </div>
  );
}

export default Analytics;
