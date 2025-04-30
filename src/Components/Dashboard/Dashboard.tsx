import React from 'react';
import AreaBar from './AreaBar';
import RecentOrders from './RecentOrder';
import SalesReportSection from './SalesReportSection';
import TextChart from './TextChart';
import TransactionHistorySection from './TransactionHistorySection';

const Dashboard: React.FC = () => {
  return (
    <div className='bg-[#FAFAFB] min-h-screen px-2 sm:px-4 md:px-6 lg:px-8 py-4'>
  
      <div className='flex flex-wrap items-center text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6'>
        <span className='text-[#1890FF] mr-1 hover:underline cursor-pointer'>Home</span>
        <span className='mx-1'>&gt;</span>
        <span className='text-[#1890FF] mr-1 hover:underline cursor-pointer'>Dashboard</span>
        <span className='mx-1'>&gt;</span>
        <span className='text-gray-400'>Home</span>
      </div>

   
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-2 md:gap-6 mb-6'>
        
        <div className='bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm border border-[#F0F0F0] hover:shadow-md transition-shadow'>
          <div className='flex justify-between items-start'>
            <h3 className='text-gray-500 text-xs sm:text-sm md:text-base font-medium'>Total Page Views</h3>
            <div className='text-[10px] sm:text-xs px-2 py-1 rounded bg-[#E8F4FF] text-[#1890FF]'>↑ 53.3%</div>
          </div>
          <p className='text-lg sm:text-xl md:text-2xl font-bold my-2 md:my-3'>4,42,236</p>
          <p className='text-[11px] sm:text-xs md:text-sm text-gray-500'>
            You made an extra <span className='text-[#1890FF] font-medium'>35,000</span> this year
          </p>
        </div>

      
        <div className='bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm border border-[#F0F0F0] hover:shadow-md transition-shadow'>
          <div className='flex justify-between items-start'>
            <h3 className='text-gray-500 text-xs sm:text-sm md:text-base font-medium'>Total Users</h3>
            <div className='text-[10px] sm:text-xs px-2 py-1 rounded bg-[#EEF9E8] text-[#5CD0BA]'>↑ 53.3%</div>
          </div>
          <p className='text-lg sm:text-xl md:text-2xl font-bold my-2 md:my-3'>78,250</p>
          <p className='text-[11px] sm:text-xs md:text-sm text-gray-500'>
            You made an extra <span className='text-[#5CD0BA] font-medium'>8,900</span> this year
          </p>
        </div>

        
        <div className='bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm border border-[#F0F0F0] hover:shadow-md transition-shadow'>
          <div className='flex justify-between items-start'>
            <h3 className='text-gray-500 text-xs sm:text-sm md:text-base font-medium'>Total Orders</h3>
            <div className='text-[10px] sm:text-xs px-2 py-1 rounded bg-[#FFF7E8] text-[#FAAE14]'>↑ 53.3%</div>
          </div>
          <p className='text-lg sm:text-xl md:text-2xl font-bold my-2 md:my-3'>12,250</p>
          <p className='text-[11px] sm:text-xs md:text-sm text-gray-500'>
            You made an extra <span className='text-[#FAAE14] font-medium'>3,200</span> this year
          </p>
        </div>

      
        <div className='bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm border border-[#F0F0F0] hover:shadow-md transition-shadow'>
          <div className='flex justify-between items-start'>
            <h3 className='text-gray-500 text-xs sm:text-sm md:text-base font-medium'>Bounce Rate</h3>
            <div className='text-[10px] sm:text-xs px-2 py-1 rounded bg-[#FFEDED] text-[#FF4D5A]'>↓ 42.5%</div>
          </div>
          <p className='text-lg sm:text-xl md:text-2xl font-bold my-2 md:my-3'>42.5%</p>
          <p className='text-[11px] sm:text-xs md:text-sm text-gray-500'>
            Increased by <span className='text-[#FF4D5A] font-medium'>5.2%</span> this year
          </p>
        </div>
      </div>

      <div className='mb-6'>
        <AreaBar />
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-6">
        <div className="md:col-span-1 lg:col-span-3">
          <RecentOrders />
        </div>
        <div className="md:col-span-1 lg:col-span-2">
          <TextChart />
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
        <div className="md:col-span-1 lg:col-span-3">
          <SalesReportSection />
        </div>
        <div className="md:col-span-1 lg:col-span-2">
          <TransactionHistorySection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
