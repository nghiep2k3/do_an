// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
  ChartDataLabels
);

const PieChart = () => {
  const totalItems = 100;
  const laptops = 10;
  const phones = 20;
  const accessories = 15;
  const remaining = totalItems - (laptops + phones + accessories);

  const data = {
    labels: ['Laptop', 'Điện thoại', 'Phụ kiện', 'Trống'],
    datasets: [
      {
        label: 'Số lượng sản phẩm',
        data: [laptops, phones, accessories, remaining],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#C0C0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#C0C0C0']
      }
    ]
  };

  const options = {
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
      easing: 'linear', 
    },
    plugins: {
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold',
          size: 17,
        },
        formatter: (value) => {
          return value;
        },
      },
    },
  };

  return (
    <div style={{ height: 350, width: 350 }}>
      <h2>Số lượng sản phẩm bán được</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
