
import React, { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import LoginPage from '@/components/LoginPage';
import SignupPage from '@/components/SignupPage';
import Dashboard from '@/components/Dashboard';

interface User {
  name: string;
  accountNumber: string;
}

interface CreatedAccount {
  accountNumber: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<'loading' | 'login' | 'signup' | 'dashboard'>('loading');
  const [user, setUser] = useState<User | null>(null);
  const [createdAccounts, setCreatedAccounts] = useState<CreatedAccount[]>([]);

  const handleLoadingComplete = () => {
    setCurrentScreen('login');
  };

  const handleLogin = (accountNumber: string, password: string) => {
    // Check if account exists
    const existingAccount = createdAccounts.find(
      account => account.accountNumber === accountNumber && account.password === password
    );

    if (!existingAccount) {
      // Account doesn't exist, return error
      return { success: false, error: 'Account not found. Please create an account first.' };
    }

    // Account exists, proceed with login
    setUser({ name: existingAccount.fullName, accountNumber: existingAccount.accountNumber });
    setCurrentScreen('dashboard');
    return { success: true };
  };

  const handleSignup = (userData: { fullName: string; email: string; phoneNumber: string; password: string }) => {
    // Generate a unique account number for demo
    const accountNumber = Math.random().toString().slice(2, 12);
    
    // Store the created account
    const newAccount: CreatedAccount = {
      accountNumber,
      fullName: userData.fullName,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
      password: userData.password
    };
    
    setCreatedAccounts(prev => [...prev, newAccount]);
    setUser({ name: userData.fullName, accountNumber });
    setCurrentScreen('dashboard');
  };

  const handleGoToSignup = () => {
    setCurrentScreen('signup');
  };

  const handleBackToLogin = () => {
    setCurrentScreen('login');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentScreen('login');
  };

  switch (currentScreen) {
    case 'loading':
      return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
    case 'login':
      return <LoginPage onLogin={handleLogin} onGoToSignup={handleGoToSignup} />;
    case 'signup':
      return <SignupPage onSignup={handleSignup} onBackToLogin={handleBackToLogin} />;
    case 'dashboard':
      return <Dashboard onLogout={handleLogout} user={user} />;
    default:
      return null;
  }
};

export default Index;
