import React from 'react';
import { FaFilter } from 'react-icons/fa';

function FilterBar({ filters, onFilterChange, onResetFilter }) {
  return (
    <div className="filter-bar">
      <div className="filter-section">
        <FaFilter className="filter-icon" />
        <span>Filter By</span>
      </div>

      <select 
        value={filters.date}
        onChange={(e) => onFilterChange('date', e.target.value)}
        className="filter-select"
      >
        <option value="">Date</option>
        <option value="today">Today</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
      </select>

      <select 
        value={filters.orderType}
        onChange={(e) => onFilterChange('orderType', e.target.value)}
        className="filter-select"
      >
        <option value="">User Type</option>
        <option value="new">Working Proffesional</option>
        <option value="renewal">Students</option>
      </select>

      <select 
        value={filters.orderStatus}
        onChange={(e) => onFilterChange('orderStatus', e.target.value)}
        className="filter-select"
      >
        <option value=""> Status</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>

      <button onClick={onResetFilter} className="reset-filter">
        Reset Filter
      </button>
    </div>
  );
}

export default FilterBar;