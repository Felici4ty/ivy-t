
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Shield } from 'lucide-react';

interface LoginPageProps {
  onLogin: (accountNumber: string, password: string) => { success: boolean; error?: string };
  onGoToSignup: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onGoToSignup }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountNumber || !password) return;
    
    setIsLoading(true);
    setError('');
    
    // Simulate authentication delay
    setTimeout(() => {
      const result = onLogin(accountNumber, password);
      setIsLoading(false);
      
      if (!result.success) {
        setError(result.error || 'Login failed');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-gold flex items-center justify-center">
            <span className="text-white text-2xl font-bold">E</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-purple-100">Sign in to your Epay Bank account</p>
        </div>

        <Card className="glass-effect border-white/20">
          <CardHeader>
            <CardTitle className="text-center text-white flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              Secure Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-100 px-4 py-3 rounded-md text-sm">
                  {error}
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="accountNumber" className="text-white">Account Number</Label>
                <Input
                  id="accountNumber"
                  type="text"
                  placeholder="Enter your account number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full gradient-gold hover:scale-105 transition-transform text-white font-semibold"
                disabled={isLoading || !accountNumber || !password}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 text-center space-y-4">
              <a href="#" className="text-white/80 hover:text-white text-sm underline block">
                Forgot your password?
              </a>
              
              <div className="border-t border-white/20 pt-4">
                <p className="text-white/80 text-sm mb-2">
                  Don't have an account?
                </p>
                <Button
                  onClick={onGoToSignup}
                  variant="outline"
                  className="w-full bg-transparent border-white/30 text-white hover:bg-white/10"
                >
                  Create Account
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-white/60 text-xs mt-6">
          Your account is protected by 256-bit encryption
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
