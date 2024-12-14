import React, { useState } from 'react';
import StatsCard from './user_components/StatsCard';
import FilterBar from './user_components/FilterBar';
import ApplicationsTable from './user_components/ApplicationsTable';
import { statsData, applicationsData } from './data/mockData';
import './UserDetails.css';

function UserDetails() {
  const [filters, setFilters] = useState({
    date: '',
    orderType: '',
    orderStatus: ''
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleResetFilter = () => {
    setFilters({
      date: '',
      orderType: '',
      orderStatus: ''
    });
  };

  return (
    <div className="user-details">
      <h1 className="page-title"> User Details</h1>
      
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <FilterBar 
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilter={handleResetFilter}
      />

      <ApplicationsTable applications={applicationsData} />
    </div>
  );
}

export default UserDetails;