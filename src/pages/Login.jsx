import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate, Navigate } from 'react-router-dom';

const Login = ({ setUserData, setLoggedIn, isLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // If already logged in, redirect to profile
        if (isLoggedIn) {
            navigate('/profile');
        }
    }, [isLoggedIn, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear any previous errors when user types
        if (error) setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.email || !formData.password) {
            setError('Please fill in all required fields');
            return;
        }

        setIsLoading(true);
        setError('');

        // Simulate API call
        setTimeout(() => {
            try {
                // Create user data object
                const userData = {
                    id: Date.now().toString(),
                    fullName: formData.fullName || 'User',
                    email: formData.email,
                    joinDate: new Date().toISOString()
                };

                // Save to state and localStorage
                setUserData(userData);
                setLoggedIn(true);
                
                // Navigate to profile page
                navigate('/profile');
            } catch (err) {
                setError('An error occurred during login. Please try again.');
                console.error('Login error:', err);
            } finally {
                setIsLoading(false);
            }
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Welcome to Nike</h2>
                <p className="text-gray-600 mb-6">Sign in to access your Nike account</p>

                <form className="space-y-4" onSubmit={handleSubmit}>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="yourname@mail.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Minimum 8 characters"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none pr-12"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm mb-4">
                            {error}
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'}`}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account?{' '}
                        <button
                            type="button"
                            onClick={() => {
                                setFormData(prev => ({
                                    ...prev,
                                    fullName: '',
                                    email: '',
                                    password: ''
                                }));
                                setError('');
                            }}
                            className="text-black font-medium hover:underline focus:outline-none"
                        >
                            Create Account
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
