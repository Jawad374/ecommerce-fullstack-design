'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Facebook, Lock, User, Mail, ShoppingBag } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Modal from '@/components/common/Modal';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  // Modal State
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'success'
  });

  const router = useRouter();
  const { login } = useUser();

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });
  
  // Error states
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user types
    if (errors[name]) {
       setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
     const newErrors = {};
     
     // Email validation
     if (!formData.email) {
       newErrors.email = 'Email is required';
     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
       newErrors.email = 'Email is invalid';
     }

     // Password validation
     if (!formData.password) {
       newErrors.password = 'Password is required';
     } else if (formData.password.length < 6) {
       newErrors.password = 'Password must be at least 6 characters';
     }

     if (!isLogin) {
       // Name validation
       if (!formData.name.trim()) {
         newErrors.name = 'First name is required';
       }
       // Surname validation
       if (!formData.surname.trim()) {
         newErrors.surname = 'Last name is required';
       }
     }

     setErrors(newErrors);
     return Object.keys(newErrors).length === 0;
  };

  const closeModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
    // If it was a successful registration, switch to login view
    if (modalConfig.type === 'success' && !isLogin && modalConfig.title === 'Success') {
      setIsLogin(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
      const body = isLogin 
        ? { email: formData.email, password: formData.password }
        : { 
            name: formData.name, 
            surname: formData.surname, 
            email: formData.email, 
            password: formData.password 
          };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setModalConfig({
          isOpen: true,
          title: 'Error',
          message: data.message || 'Something went wrong',
          type: 'error'
        });
        return;
      }

      console.log('Success:', data);
      
      if (isLogin) {
         login(data.user); 
      } else {
         setModalConfig({
           isOpen: true,
           title: 'Success',
           message: 'Account created successfully! Please login with your new credentials.',
           type: 'success'
         });
         // Switch to login view is handled in closeModal or here immediately if we prefer
         // But letting user read the message first is better.
      }

    } catch (err) {
      console.error('An error occurred', err);
      setModalConfig({
        isOpen: true,
        title: 'Error',
        message: 'An unexpected error occurred. Please try again.',
        type: 'error'
      });
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Modal 
        isOpen={modalConfig.isOpen} 
        onClose={closeModal} 
        title={modalConfig.title} 
        message={modalConfig.message} 
        type={modalConfig.type} 
      />
      <div className="hidden md:block">
        <Header />
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl overflow-hidden grid md:grid-cols-2 md:min-h-150">
        
        {/* Left Side - Blue Banner */}
        <div className="hidden md:flex bg-[#0D6EFD] p-8 md:p-12 text-white flex-col justify-center relative overflow-hidden">
           {/* Abstract Circles/Decorations */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-white blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-black blur-3xl"></div>
           </div>
           
           <div className="relative z-10 mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {isLogin ? 'Simplify Management With Our Dashboard.' : 'Join Our Growing Community Today.'}
              </h1>
              <p className="text-blue-100 text-lg opacity-90">
                {isLogin 
                  ? 'Simplify your e-commerce management with our user-friendly admin dashboard.'
                  : 'Start your journey with us and experience seamless shopping and management.'
                }
              </p>
           </div>
           
           {/* Placeholder for 3D Illustration */}
           <div className="relative z-10 flex-1 flex items-center justify-center">
             {/* Using a simple CSS composition to mimic the "people" or just a placeholder if image missing */}
              <div className="w-64 h-48 bg-blue-500/30 rounded-full blur-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative">
                 {/* Replaced specific 3D image with a composed cart illustration using icons/css shapes */}
                 <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <ShoppingBag size={80} className="text-white drop-shadow-lg" />
                 </div>
              </div>
           </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white">
            
            {/* Logo area */}
            <div className="flex justify-center md:justify-start mb-8">
               <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#0D6EFD] rounded-xl flex items-center justify-center text-white">
                    <ShoppingBag size={20} fill="currentColor" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">Brand</span>
               </div>
            </div>

            <div className="mb-8 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-gray-500 text-sm">
                {isLogin ? 'Please login to your account' : 'Fill in your details to get started'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                         <label className="sr-only">First Name</label>
                         <input 
                           type="text" 
                           name="name"
                           placeholder="First Name" 
                           value={formData.name}
                           onChange={handleChange}
                           className={`w-full bg-gray-50 text-gray-900 px-4 py-3.5 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500/20 transition-all font-medium placeholder:text-gray-400 ${
                             errors.name ? 'border-red-500 ring-2 ring-red-500/20' : 'border-transparent'
                           }`}
                         />
                         {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                        </div>
                        <div>
                         <label className="sr-only">Last Name</label>
                         <input 
                           type="text" 
                           name="surname"
                           placeholder="Last Name" 
                           value={formData.surname}
                           onChange={handleChange}
                           className={`w-full bg-gray-50 text-gray-900 px-4 py-3.5 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500/20 transition-all font-medium placeholder:text-gray-400 ${
                             errors.surname ? 'border-red-500 ring-2 ring-red-500/20' : 'border-transparent'
                           }`}
                         />
                         {errors.surname && <p className="text-red-500 text-xs mt-1 ml-1">{errors.surname}</p>}
                        </div>
                    </div>
                )}

                <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5 ml-1">
                        {isLogin ? "Email Address" : "Email"}
                    </label>
                    <input 
                        type="text" 
                        name="email"
                        placeholder="user@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-gray-50 text-gray-900 px-4 py-3.5 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500/20 transition-all font-medium placeholder:text-gray-400 ${
                          errors.email ? 'border-red-500 ring-2 ring-red-500/20' : 'border-transparent'
                        }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                </div>

                <div>
                    <div className="flex justify-between items-center mb-1.5 ml-1">
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide">
                            Password
                        </label>
                        {isLogin && <button type="button" className="text-xs font-bold text-gray-400 hover:text-[#0D6EFD]">Forgot Password?</button>}
                    </div>
                    <div className="relative">
                        <input 
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full bg-gray-50 text-gray-900 px-4 py-3.5 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500/20 transition-all font-medium placeholder:text-gray-400 ${
                              errors.password ? 'border-red-500 ring-2 ring-red-500/20' : 'border-transparent'
                            }`}
                        />
                        <button 
                            type="button" 
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password}</p>}
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-[#0D6EFD] hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all transform active:scale-[0.98] mt-4"
                >
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>

            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="px-4 bg-white text-xs text-gray-400 font-medium uppercase tracking-wider">Or {isLogin ? 'login' : 'register'} with</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors bg-white shadow-sm">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21-1.19-.63z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-sm font-bold text-gray-700">Google</span>
                </button>
                <button type="button" className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors bg-white shadow-sm">
                    <Facebook className="w-5 h-5 text-[#1877F2] fill-current" />
                    <span className="text-sm font-bold text-gray-700">Facebook</span>
                </button>
            </div>

            <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button onClick={toggleMode} className="text-[#0D6EFD] font-bold hover:underline">
                        {isLogin ? 'Signup' : 'Login'}
                    </button>
                </p>
            </div>
            
        </div>
      </div>
      </div>

      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}
