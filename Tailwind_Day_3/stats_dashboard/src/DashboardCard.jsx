// DashboardCard.jsx
import React from 'react';
import { FaDollarSign, FaShoppingCart, FaUsers, FaChartLine } from 'react-icons/fa';
import './App.css'
const cardData = [
  {
    title: 'Sales',
    value: '$25,000',
    change: '+12%',
    icon: <FaDollarSign size={24} />,
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700',
  },
  {
    title: 'Orders',
    value: '1,200',
    change: '+8%',
    icon: <FaShoppingCart size={24} />,
    bgColor: 'bg-green-100',
    textColor: 'text-green-700',
  },
  {
    title: 'Customers',
    value: '850',
    change: '+5%',
    icon: <FaUsers size={24} />,
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-700',
  },
  {
    title: 'Revenue',
    value: '$75,000',
    change: '+15%',
    icon: <FaChartLine size={24} />,
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-700',
  },
];

const DashboardCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`rounded-xl shadow-md p-6 transition-transform transform hover:-translate-y-1 hover:shadow-lg ${card.bgColor}`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`text-xl ${card.textColor}`}>{card.icon}</div>
            <span className={`text-sm font-semibold ${card.textColor}`}>{card.change}</span>
          </div>
          <h2 className={`text-2xl font-bold ${card.textColor}`}>{card.value}</h2>
          <p className={`text-sm ${card.textColor}`}>{card.title}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;