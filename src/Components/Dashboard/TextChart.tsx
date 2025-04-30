import React from 'react';
import SingleLineChart from './SingleLineChart'; 

const TextChart: React.FC = () => {
  const financeGrowth = '+45.14%';
  const expensesRatio = '0.58%';
  const businessRisk = 'Low';
  
  
  const weeklyChange = '+2.5%';
  const monthlyAverage = '38.6%';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-gray-800">Financial Overview</h3>
        <div className="bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-600">
          Q4 2024
        </div>
      </div>
      
    
      <div className="mb-6 border-b border-gray-100 pb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-2 h-8 bg-green-500 rounded-sm mr-3"></div>
            <p className="text-gray-700 text-sm font-medium">Company Finance Growth</p>
          </div>
          <div className="flex items-center">
            <p className="text-green-600 font-semibold">{financeGrowth}</p>
            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">{weeklyChange}</span>
          </div>
        </div>

    
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-2 h-8 bg-blue-500 rounded-sm mr-3"></div>
            <p className="text-gray-700 text-sm font-medium">Company Expenses Ratio</p>
          </div>
          <div>
            <p className="text-gray-800 font-semibold">{expensesRatio}</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-2 h-8 bg-green-500 rounded-sm mr-3"></div>
            <p className="text-gray-700 text-sm font-medium">Business Risk Cases</p>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <p className="text-green-600 font-semibold">{businessRisk}</p>
          </div>
        </div>
      </div>

   
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700">Growth Trend</h4>
          <p className="text-xs text-gray-500">Monthly average: {monthlyAverage}</p>
        </div>
        <select className="text-xs border border-gray-200 rounded p-1">
          <option>Last 7 months</option>
          <option>Last year</option>
        </select>
      </div>

  
      <div className="h-64">
        <SingleLineChart />
      </div>
      
    
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-500">
        <div>Updated: Today at 11:45 AM</div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
          <span>Active</span>
        </div>
      </div>
    </div>
  );
};

export default TextChart;