import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SingleLineChart: React.FC = () => {
  const data = {
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Growth',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.1)',
        tension: 0.4,
        pointBackgroundColor: 'rgb(255, 159, 64)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: 'rgb(255, 159, 64)',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 2,
        fill: true,
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
          size: 14,
          weight: 'bold' as const,
        },
        bodyFont: {
          size: 12,
        },
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + '%';
            }
            return label;
          }
        }
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
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
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          color: '#E5E7EB',
          drawBorder: false,
          lineWidth: 1,
        },
        beginAtZero: false,
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-medium text-gray-800">Growth Overview</h3>
          <p className="text-sm text-gray-500">Monthly growth performance</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 rounded-full bg-orange-400 mr-2"></div>
            <span className="text-sm text-gray-600">Growth</span>
          </div>
          <select className="text-sm border border-gray-200 rounded p-1">
            <option>Last 7 months</option>
            <option>Last year</option>
          </select>
        </div>
      </div>
      
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Current Growth</p>
          <p className="text-xl font-semibold text-orange-500">40%</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Average</p>
          <p className="text-xl font-semibold text-gray-700">62.3%</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Peak Growth</p>
          <p className="text-xl font-semibold text-green-500">81%</p>
        </div>
      </div>
    </div>
  );
};

export default SingleLineChart;