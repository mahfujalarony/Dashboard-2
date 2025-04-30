import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
            <div className="bg-white rounded-xl shadow-md w-full max-w-md overflow-hidden">
           
                <div className="flex justify-center pt-6 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="flex items-center">
                        <img src="/logo.svg" width={40} alt="Logo" className="h-10" />
                        <span className="ml-2 text-xl font-bold text-gray-900">Mantis</span>
                    </div>
                </div>

            
                <div className="p-6 sm:p-8">
                    <div className="flex justify-between items-start sm:items-center gap-4">
                        <h2 className="text-2xl font-bold text-gray-900">Sign up</h2>
                        <p 
                            onClick={() => navigate('/login')} 
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium whitespace-nowrap transition-colors cursor-pointer"
                        >
                            Already have an account?
                        </p>
                    </div>
                </div>

              
                <form className="px-6 sm:px-8 pb-8 space-y-5">
                   
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            placeholder="Company"
                        />
                    </div>

                  
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                   
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            placeholder="••••••••"
                        />
                    </div>

                  
                    <div className="pt-2">
                        <p className="text-xs text-gray-500">
                            By Signing up, you agree to our{' '}
                            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
                            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                        </p>
                    </div>

               
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Create Account
                        </button>
                    </div>
                </form>

            
                <div className="px-6 sm:px-8 pb-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-3 bg-white text-sm text-gray-500">Or sign up with</span>
                        </div>
                    </div>
                </div>

               
                <div className="px-6 sm:px-8 pb-8 grid grid-cols-3 gap-3">
                    <button 
                        type="button"
                        className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 px-4 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" className="h-5 w-5" />
                        <span className="text-sm hidden sm:inline">Google</span>
                    </button>
                    <button 
                        type="button"
                        className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 px-4 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        <img src="https://img.icons8.com/color/24/000000/twitter--v1.png" alt="Twitter" className="h-5 w-5" />
                        <span className="text-sm hidden sm:inline">Twitter</span>
                    </button>
                    <button 
                        type="button"
                        className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 px-4 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        <img src="https://img.icons8.com/color/24/000000/facebook-new.png" alt="Facebook" className="h-5 w-5" />
                        <span className="text-sm hidden sm:inline">Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;