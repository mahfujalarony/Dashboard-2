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

const BarChart: React.FC = () => {
  
  const data = {
    labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    datasets: [
      {
        label: 'Income',
        data: [80, 95, 70, 65, 60, 75, 80],
        backgroundColor: [
          'rgba(75, 192, 192, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(54, 162, 235, 0.8)', 
          'rgba(54, 162, 235, 0.8)', 
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
        borderRadius: 4,
        barThickness: 10,
      },
    ],
  };

  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 10,
        cornerRadius: 4,
        titleFont: {
          size: 12,
        },
        bodyFont: {
          size: 12,
        },
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': $';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y;
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
            size: 10,
          },
          color: '#6B7280',
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        display: false,
      },
    },
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
      },
    },
  };


  const totalIncome = data.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
  const averageIncome = Math.round(totalIncome / data.datasets[0].data.length);
  const highestIncome = Math.max(...data.datasets[0].data);
  const highestDay = data.labels[data.datasets[0].data.indexOf(highestIncome)];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-800">Weekly Income</h3>
          <p className="text-sm text-gray-500">Income distribution by day</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-teal-500 mr-1"></div>
            <span className="text-xs text-gray-600">Weekday</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
            <span className="text-xs text-gray-600">Weekend</span>
          </div>
        </div>
      </div>
      
      <div className="h-48">
        <Bar data={data} options={options} />
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-xs text-gray-500">Total Income</p>
          <p className="text-lg font-semibold text-gray-800">${totalIncome}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500">Daily Average</p>
          <p className="text-lg font-semibold text-gray-800">${averageIncome}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500">Highest Day</p>
          <p className="text-lg font-semibold text-gray-800">{highestDay} (${highestIncome})</p>
        </div>
      </div>
    </div>
  );
};

export default BarChart;