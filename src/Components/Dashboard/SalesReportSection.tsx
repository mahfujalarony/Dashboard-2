import React from 'react';
import SalesBarChart from './SalesBarChart';

const SalesReportSection: React.FC = () => {
  const weeklyStatistics = '$7,650';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full"> 
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales Report</h2>

      <div className="mb-6"> 
        <p className="text-gray-600 text-sm">This Week Statistics</p>
        <p className="text-3xl font-bold text-gray-800">{weeklyStatistics}</p>
      </div>
      <SalesBarChart />
    </div>
  );
};

export default SalesReportSection;