import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesBarChart: React.FC = () => {
  
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], 
    datasets: [
      {
        label: 'Net Profit',
        data: [180, 90, 150, 110, 130, 180],
        backgroundColor: 'rgba(255, 159, 64, 0.8)',
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 1,
        borderRadius: 4,
        barThickness: 12,
      },
      {
        label: 'Revenue',
        data: [120, 45, 75, 160, 170, 100],
        backgroundColor: 'rgba(53, 162, 235, 0.8)',
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: 1,
        borderRadius: 4,
        barThickness: 12,
      },
    ],
  };

  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          boxWidth: 12,
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 10,
        cornerRadius: 4,
        titleFont: {
          size: 14,
          weight: 'bold' as const,
        },
        bodyFont: {
          size: 12,
        },
        displayColors: true,
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
              }).format(context.parsed.y);
            }
            return label;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#6B7280',
        },
      },
      y: {
        grid: {
          display: true,
          color: '#E5E7EB',
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#6B7280',
          callback: function(value: any) {
            return '$' + value;
          },
        },
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 5,
        right: 16,
        bottom: 5,
        left: 10,
      },
    },
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-800">Sales Overview</h3>
        <div className="text-sm text-gray-500">Last 6 months</div>
      </div>
      <div className="w-full h-80">
        <Bar data={data} options={options} />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-blue-50 rounded-md">
          <p className="text-sm text-gray-600">Total Revenue</p>
          <p className="text-xl font-semibold text-blue-600">$670</p>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded-md">
          <p className="text-sm text-gray-600">Total Profit</p>
          <p className="text-xl font-semibold text-orange-600">$840</p>
        </div>
      </div>
    </div>
  );
};

export default SalesBarChart;