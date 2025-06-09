// Dashboard.jsx
import React, { useState } from 'react';
import '../styles/Page.css';
import '../styles/Dashboard.css';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
  const [selectedRange, setSelectedRange] = useState('Today');

  const filters = ['Today', 'Yesterday', 'Last week', 'Last month', 'Last 3 months'];

  const dataByRange = {
    Today: {
      kpis: [
        { label: 'Active Deals', value: '11,985' },
        { label: 'Closed Deals', value: '4' },
        { label: 'Deals Amount', value: '14,643 UAH' },
        { label: 'New Contacts', value: '7' },
      ],
      sales: [
        { label: 'Sales Efficiency', value: '63%' },
        { label: 'Conversion Rate', value: '19.2%' },
        { label: 'Avg Response Time', value: '4.3h' },
      ],
      donut: { data: [2930, 326], total: 3256 },
      bar: [2, 4, 3, 5, 1, 0, 6],
    },
    Yesterday: {
      kpis: [
        { label: 'Active Deals', value: '10,482' },
        { label: 'Closed Deals', value: '2' },
        { label: 'Deals Amount', value: '10,341 UAH' },
        { label: 'New Contacts', value: '3' },
      ],
      sales: [
        { label: 'Sales Efficiency', value: '58%' },
        { label: 'Conversion Rate', value: '16.4%' },
        { label: 'Avg Response Time', value: '5.1h' },
      ],
      donut: { data: [2030, 130], total: 2160 },
      bar: [1, 3, 2, 4, 0, 1, 3],
    },
    'Last week': {
      kpis: [
        { label: 'Active Deals', value: '54,112' },
        { label: 'Closed Deals', value: '13' },
        { label: 'Deals Amount', value: '89,712 UAH' },
        { label: 'New Contacts', value: '34' },
      ],
      sales: [
        { label: 'Sales Efficiency', value: '67%' },
        { label: 'Conversion Rate', value: '21.9%' },
        { label: 'Avg Response Time', value: '4.0h' },
      ],
      donut: { data: [11200, 1220], total: 12420 },
      bar: [3, 5, 6, 4, 2, 3, 5],
    },
    'Last month': {
      kpis: [
        { label: 'Active Deals', value: '130,124' },
        { label: 'Closed Deals', value: '42' },
        { label: 'Deals Amount', value: '230,500 UAH' },
        { label: 'New Contacts', value: '122' },
      ],
      sales: [
        { label: 'Sales Efficiency', value: '71%' },
        { label: 'Conversion Rate', value: '23.5%' },
        { label: 'Avg Response Time', value: '3.6h' },
      ],
      donut: { data: [22000, 3400], total: 25400 },
      bar: [6, 7, 4, 6, 5, 3, 4],
    },
    'Last 3 months': {
      kpis: [
        { label: 'Active Deals', value: '389,770' },
        { label: 'Closed Deals', value: '98' },
        { label: 'Deals Amount', value: '783,900 UAH' },
        { label: 'New Contacts', value: '409' },
      ],
      sales: [
        { label: 'Sales Efficiency', value: '75%' },
        { label: 'Conversion Rate', value: '28.7%' },
        { label: 'Avg Response Time', value: '3.1h' },
      ],
      donut: { data: [61200, 7400], total: 68600 },
      bar: [9, 8, 10, 11, 7, 5, 6],
    },
  };

  const donutData = {
    labels: ['Landing Pages', 'Manual'],
    datasets: [
      {
        data: dataByRange[selectedRange].donut.data,
        backgroundColor: ['#1b7bf6', '#00f2ff'],
        borderColor: ['#ffffff', '#ffffff'],
        borderWidth: 2,
      },
    ],
  };

  const barChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Deals Closed',
        data: dataByRange[selectedRange].bar,
        backgroundColor: '#1b7bf6',
        borderRadius: 6,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 }
      }
    }
  };

  return (
    <div className="page">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="filters">
          {filters.map((range) => (
            <button
              key={range}
              className={`filter-button ${selectedRange === range ? 'active' : ''}`}
              onClick={() => setSelectedRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* KPIs principales */}
      <div className="dashboard-grid">
        {dataByRange[selectedRange].kpis.map((item, i) => (
          <div key={i} className="card kpi-card">
            <h3>{item.label}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Sales KPIs */}
      <h2 className="section-title">Sales KPIs</h2>
      <div className="dashboard-grid">
        {dataByRange[selectedRange].sales.map((kpi, i) => (
          <div key={i} className="card kpi-card kpi-secondary">
            <h3>{kpi.label}</h3>
            <p>{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Gráficos */}
      <h2 className="section-title">Reports</h2>
      <div className="chart-row">
        <div className="card chart-box-small">
          <Doughnut data={donutData} />
          <div className="chart-labels">
            <p><strong>{dataByRange[selectedRange].donut.total}</strong> deals</p>
            <p>
              <small>
                {Math.round((dataByRange[selectedRange].donut.data[0] / dataByRange[selectedRange].donut.total) * 100)}% Landing Pages,{" "}
                {Math.round((dataByRange[selectedRange].donut.data[1] / dataByRange[selectedRange].donut.total) * 100)}% Manual
              </small>
            </p>
          </div>
        </div>

        <div className="card chart-box-large">
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
