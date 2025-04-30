import React from 'react';
import { FaShoppingCart, FaDollarSign, FaCreditCard } from 'react-icons/fa'; 

interface TransactionItemProps {
  orderId: string;
  date: string;
  time: string;
  amount: number; 
  percentage: number;
  type: 'purchase' | 'refund' | 'payment';
}


const getTransactionIconAndColor = (type: string) => {
  switch (type) {
    case 'purchase':
      return { icon: <FaShoppingCart />, bgColor: 'bg-green-100', iconColor: 'text-green-600' };
    case 'refund':
      return { icon: <FaDollarSign />, bgColor: 'bg-red-100', iconColor: 'text-red-600' };
    case 'payment':
       return { icon: <FaCreditCard />, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' };
    default:
      return { icon: <FaDollarSign />, bgColor: 'bg-gray-100', iconColor: 'text-gray-600' };
  }
};

const TransactionItem: React.FC<TransactionItemProps> = ({ orderId, date, time, amount, percentage, type }) => {
    const { icon, bgColor, iconColor } = getTransactionIconAndColor(type);

    const formattedAmount = amount >= 0 ? `+ $${amount.toFixed(2)}` : `- $${Math.abs(amount).toFixed(2)}`;
    const amountColor = amount >= 0 ? 'text-green-600' : 'text-red-600'; 

  return (
    <div className="flex items-center py-4 border-b border-gray-200 last:border-b-0"> {/* ফ্লেক্স লেআউট, প্যাডিং, নিচের বর্ডার (শেষ আইটেমে বর্ডার থাকবে না) */}


      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${bgColor} ${iconColor}`}> {/* গোলাকার ব্যাকগ্রাউন্ড সহ আইকন */}
        {icon}
      </div>

    
      <div className="flex-grow"> 
        <p className="text-sm font-semibold text-gray-800">{orderId}</p>
        <p className="text-xs text-gray-500">{date}, {time}</p>
      </div>

  
      <div className="flex flex-col items-end">
        <p className={`text-sm font-semibold ${amountColor}`}>{formattedAmount}</p>
        <p className="text-xs text-gray-500">{percentage}%</p>
      </div>

    </div>
  );
};

export default TransactionItem;