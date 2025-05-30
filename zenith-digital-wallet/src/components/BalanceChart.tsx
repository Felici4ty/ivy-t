
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', balance: 2200000 },
  { month: 'Feb', balance: 2350000 },
  { month: 'Mar', balance: 2180000 },
  { month: 'Apr', balance: 2420000 },
  { month: 'May', balance: 2650000 },
  { month: 'Jun', balance: 2847590 },
];

export const BalanceChart: React.FC = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis 
            tickFormatter={(value) => `₦${(value / 1000000).toFixed(1)}M`}
          />
          <Tooltip 
            formatter={(value) => [`₦${Number(value).toLocaleString()}`, 'Balance']}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Line 
            type="monotone" 
            dataKey="balance" 
            stroke="#9333EA" 
            strokeWidth={3}
            dot={{ fill: '#9333EA', strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, stroke: '#F59E0B', strokeWidth: 2, fill: '#9333EA' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
