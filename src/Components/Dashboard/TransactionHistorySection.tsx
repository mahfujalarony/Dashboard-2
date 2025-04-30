import React from 'react';
import TransactionItem from './TransactionItem'; 

const TransactionHistorySection: React.FC = () => {
  const transactions = [
    { id: 1, orderId: 'Order #002434', date: 'Today', time: '2:00 AM', amount: 1430, percentage: 78, type: 'purchase' as const },
    { id: 2, orderId: 'Order #984947', date: '5 August', time: '1:45 PM', amount: -302, percentage: 8, type: 'refund' as const }, // নেগেটিভ অ্যামাউন্ট
    { id: 3, orderId: 'Order #988784', date: '7 hours ago', time: '', amount: -682, percentage: 16, type: 'payment' as const }, // নেগেটিভ অ্যামাউন্ট

  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full h-[550px]"> 
  
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Transaction History</h2>

      <div>
        {transactions.map(transaction => (
          <TransactionItem
            key={transaction.id} 
            orderId={transaction.orderId}
            date={transaction.date}
            time={transaction.time}
            amount={transaction.amount}
            percentage={transaction.percentage}
            type={transaction.type}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionHistorySection;