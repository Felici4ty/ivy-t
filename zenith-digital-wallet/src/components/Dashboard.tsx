import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowDownLeft, ArrowUpRight, CreditCard, PiggyBank, TrendingUp, User, Menu, Bell } from 'lucide-react';
import { BalanceChart } from './BalanceChart';
import { TransactionHistory } from './TransactionHistory';

interface User {
  name: string;
  accountNumber: string;
}

interface DashboardProps {
  onLogout: () => void;
  user: User | null;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout, user }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center">
                <span className="text-white text-sm font-bold">E</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Epay Bank</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={onLogout}>
                <User className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Hi, {user?.name || 'User'}
          </h2>
          <p className="text-gray-600">Account Number: {user?.accountNumber || '1234567890'}</p>
        </div>

        {/* Balance Card */}
        <Card className="mb-8 gradient-primary text-white">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-purple-100 text-sm mb-2">Total Balance</p>
                <h3 className="text-4xl font-bold mb-4">₦2,847,590.50</h3>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12.5% from last month</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-purple-100 text-sm">Available Balance</p>
                <p className="text-xl font-semibold">₦2,847,590.50</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Button className="h-16 gradient-gold hover:scale-105 transition-transform text-white font-semibold">
            <ArrowUpRight className="w-5 h-5 mr-2" />
            Transfer Money
          </Button>
          <Button className="h-16 bg-green-600 hover:bg-green-700 hover:scale-105 transition-transform text-white font-semibold">
            <ArrowDownLeft className="w-5 h-5 mr-2" />
            Withdraw Cash
          </Button>
          <Button className="h-16 bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-transform text-white font-semibold">
            <CreditCard className="w-5 h-5 mr-2" />
            Pay Bills
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Balance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <BalanceChart />
              </CardContent>
            </Card>
          </div>

          {/* Account Cards */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">My Accounts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg gradient-primary text-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-purple-100">Savings Account</span>
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <p className="text-xl font-bold">₦1,847,590.50</p>
                  <p className="text-xs text-purple-100">****7890</p>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-300">Current Account</span>
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <p className="text-xl font-bold">₦1,000,000.00</p>
                  <p className="text-xs text-gray-300">****1234</p>
                </div>

                <div className="p-4 rounded-lg gradient-gold text-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-orange-100">Investment Account</span>
                    <PiggyBank className="w-4 h-4" />
                  </div>
                  <p className="text-xl font-bold">₦500,000.00</p>
                  <p className="text-xs text-orange-100">****5678</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Transaction History */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <TransactionHistory />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
