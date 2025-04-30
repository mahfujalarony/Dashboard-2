import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
      
        <div className="flex justify-center mb-6 cursor-pointer" onClick={() => navigate('/')}>
          <div className="flex items-center">
            <img src="/logo.svg" width={40} alt="Logo" className="h-10" />
            <span className="ml-2 text-xl font-bold text-gray-800">Mantis</span>
          </div>
        </div>

       
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          <p 
            onClick={() => navigate('/signup')} 
            className="text-blue-600 hover:underline text-sm whitespace-nowrap cursor-pointer"
          >
            Don't have an account?
          </p>
        </div>

       
        <form onSubmit={handleLogin} className="space-y-4">
      
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

       
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600 transition"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
              />
              <span className="ml-2 text-sm text-gray-600">Keep me signed in</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline mt-2 sm:mt-0 cursor-pointer">
              Forgot password?
            </a>
          </div>

         
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          >
            Login
          </button>
        </form>

       
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button 
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 transition"
          >
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" className="h-5 w-5" />
            <span className="text-sm hidden sm:inline">Google</span>
          </button>
          <button 
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 transition"
          >
            <img src="https://img.icons8.com/color/24/000000/twitter--v1.png" alt="Twitter" className="h-5 w-5" />
            <span className="text-sm hidden sm:inline">Twitter</span>
          </button>
          <button 
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 transition"
          >
            <img src="https://img.icons8.com/color/24/000000/facebook-new.png" alt="Facebook" className="h-5 w-5" />
            <span className="text-sm hidden sm:inline">Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;