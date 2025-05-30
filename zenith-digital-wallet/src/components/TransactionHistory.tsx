
import React from 'react';
import { ArrowDownLeft, ArrowUpRight, CreditCard, Smartphone } from 'lucide-react';

const transactions = [
  {
    id: 1,
    type: 'transfer',
    description: 'Transfer to John Smith',
    amount: -50000,
    date: '2024-01-15',
    status: 'completed'
  },
  {
    id: 2,
    type: 'deposit',
    description: 'Salary Deposit',
    amount: 450000,
    date: '2024-01-14',
    status: 'completed'
  },
  {
    id: 3,
    type: 'payment',
    description: 'Electricity Bill Payment',
    amount: -15000,
    date: '2024-01-13',
    status: 'completed'
  },
  {
    id: 4,
    type: 'airtime',
    description: 'Airtime Purchase',
    amount: -5000,
    date: '2024-01-12',
    status: 'completed'
  },
  {
    id: 5,
    type: 'transfer',
    description: 'Transfer from Mary Johnson',
    amount: 75000,
    date: '2024-01-11',
    status: 'completed'
  }
];

const getTransactionIcon = (type: string) => {
  switch (type) {
    case 'transfer':
      return <ArrowUpRight className="w-4 h-4" />;
    case 'deposit':
      return <ArrowDownLeft className="w-4 h-4" />;
    case 'payment':
      return <CreditCard className="w-4 h-4" />;
    case 'airtime':
      return <Smartphone className="w-4 h-4" />;
    default:
      return <CreditCard className="w-4 h-4" />;
  }
};

const getTransactionColor = (amount: number) => {
  return amount > 0 ? 'text-green-600' : 'text-red-600';
};

export const TransactionHistory: React.FC = () => {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-4">
            <div className={`p-2 rounded-full ${transaction.amount > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
              {getTransactionIcon(transaction.type)}
            </div>
            <div>
              <p className="font-medium text-gray-900">{transaction.description}</p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
          </div>
          <div className="text-right">
            <p className={`font-semibold ${getTransactionColor(transaction.amount)}`}>
              {transaction.amount > 0 ? '+' : ''}₦{Math.abs(transaction.amount).toLocaleString()}
            </p>
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
              {transaction.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
