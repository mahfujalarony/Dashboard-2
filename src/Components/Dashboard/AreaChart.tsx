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

const AreaChart: React.FC = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        fill: true,
        label: 'Visitors',
        data: [30, 45, 40, 55, 50, 100, 65],
        borderColor: '#3b82f6', 
        backgroundColor: 'rgba(59, 130, 246, 0.2)', 
        tension: 0.4, 
        pointRadius: 0, 
      },
      {
        fill: true,
        label: 'Returning Visitors',
        data: [10, 20, 15, 25, 30, 50, 45],
        borderColor: '#22d3ee', 
        backgroundColor: 'rgba(34, 211, 238, 0.2)',
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: '#111827', 
        titleColor: '#ffffff',
        bodyColor: '#d1d5db',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6b7280', 
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: '#e5e7eb',
          drawBorder: false,
        },
        ticks: {
          color: '#6b7280',
          font: {
            size: 12,
          },
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="w-full h-80">
      <Line data={data} options={options} />
    </div>
  );
};

export default AreaChart;
