import React, { useState, useEffect } from 'react';
import { User, Mail, RefreshCw } from 'lucide-react';

const generateCaptcha = () => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  return captcha;
};

function SignUpLogin({ onSignUp }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        captcha: '',
    });

    const [errors, setErrors] = useState({});
    const [generatedCaptcha, setGeneratedCaptcha] = useState('');

    useEffect(() => {
        resetCaptcha();
    }, []);

    const resetCaptcha = () => {
        setGeneratedCaptcha(generateCaptcha());
        setFormData(prev => ({ ...prev, captcha: '' }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name || !/^[a-zA-Z\s]*$/.test(formData.name)) {
            newErrors.name = 'Name is required and should not contain numbers';
        }
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.password || formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (formData.captcha.toUpperCase() !== generatedCaptcha) {
            newErrors.captcha = 'Incorrect captcha. Please try again.';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            onSignUp(formData);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white shadow-lg mt-10 p-6 rounded-lg">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg p-4">
                <h2 className="text-2xl font-bold">Sign Up for Scholarship</h2>
                <p className="text-purple-100">Create an account to apply for the scholarship.</p>
            </div>

            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                    <User className="absolute top-3 left-3 text-gray-400" size={18} />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="relative">
                    <Mail className="absolute top-3 left-3 text-gray-400" size={18} />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-3 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                <div>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full pl-3 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>

                <div className="flex space-x-2">
                    <input
                        type="text"
                        id="captcha"
                        name="captcha"
                        placeholder="Enter Captcha"
                        value={formData.captcha}
                        onChange={handleChange}
                        className="flex-grow pl-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <div className="flex items-center bg-gray-100 px-3 rounded-md">
                        <span className="text-lg font-bold text-gray-700">{generatedCaptcha}</span>
                        <button type="button" onClick={resetCaptcha} className="ml-2 text-purple-600 hover:text-purple-800">
                            <RefreshCw size={18} />
                        </button>
                    </div>
                </div>
                {errors.captcha && <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>}

                <button type="submit" className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300">
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignUpLogin;