import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './CobaltDemandGraph.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['2010', '2017', '2025*'],
  datasets: [
    {
      label: 'Cobalt Demand (kilotons)',
      data: [71, 136, 222],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'International Demand for Cobalt',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Year',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Cobalt Demand (kilotons)',
      },
    },
  },
};

const CobaltDemandGraph = () => {
  return (
    <div className="graph-container">
      <Line data={data} options={options} />
      <p className="graph-source">
        Source: <a href="https://www.statista.com/statistics/875808/cobalt-demand-worldwide/" target="_blank" rel="noopener noreferrer">Statista</a>
      </p>
    </div>
  );
};

export default CobaltDemandGraph;
