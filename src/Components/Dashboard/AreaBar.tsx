
import React from 'react';
import AreaChart from './AreaChart';
import BarChart from './BarChart';

const AreaBar: React.FC = () => {
  return (
    <div className="w-full px-0 md:px-0">
      <div className="mx-auto w-full max-w-full">
        <div className="flex flex-col gap-4 md:gap-6 px-4 md:px-6">
    
          <div className="w-full min-w-0 bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 md:mb-6">
              <div className="min-w-0">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">Unique Visitors</h2>
                <p className="text-xs md:text-sm text-gray-500">Last 30 days performance</p>
              </div>

              <div className="flex-shrink-0 rounded-lg bg-gray-100 p-0.5 md:p-1">
                <button className="px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-md focus:outline-none bg-white text-blue-600 shadow-sm">
                  Month
                </button>
                <button className="px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium rounded-md focus:outline-none text-gray-600 hover:text-gray-800">
                  Week
                </button>
              </div>
            </div>

            <div className="h-60 md:h-80 w-full min-w-0">
              <AreaChart />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100 gap-2">
              <div className="min-w-0">
                <p className="text-xs md:text-sm text-gray-500">Avg. Visitors</p>
                <p className="text-base md:text-lg font-semibold">4,256</p>
              </div>
              <div className="min-w-0 sm:text-right">
                <p className="text-xs md:text-sm text-gray-500">Growth</p>
                <p className="text-base md:text-lg font-semibold text-green-500">+12.5%</p>
              </div>
            </div>
          </div>

          <div className="w-full min-w-0 bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-4 md:mb-6">
              <div className="min-w-0">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">Income Overview</h2>
                <p className="text-xs md:text-sm text-gray-500">Weekly revenue report</p>
              </div>

              <div className="mt-3 md:mt-4 mb-4 md:mb-6">
                <p className="text-2xl md:text-3xl font-bold text-gray-800">$7,650</p>
                <div className="flex items-center mt-1">
                  <span className="text-xs md:text-sm font-medium text-green-500">+8.2%</span>
                  <span className="text-xs text-gray-500 ml-1">vs last week</span>
                </div>
              </div>

              <h3 className="text-sm md:text-md font-medium text-gray-700 mb-2 md:mb-3">This Week Statistics</h3>
              <div className="flex justify-between text-xs md:text-sm text-gray-600">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            <div className="h-52 md:h-64 w-full min-w-0">
              <BarChart />
            </div>

            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100">
              <div className="flex justify-between">
                <div className="min-w-0">
                  <p className="text-xs md:text-sm text-gray-500">Total Income</p>
                  <p className="text-sm md:text-base font-medium">$32,540</p>
                </div>
                <div className="min-w-0 text-right">
                  <p className="text-xs md:text-sm text-gray-500">Expenses</p>
                  <p className="text-sm md:text-base font-medium">$8,230</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaBar;
