import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      navigate('/onboarding');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-stretch bg-background w-full">
      {/* Left Side: Visual/Branding */}
      <div className="hidden lg:flex w-1/2 bg-primary-container relative flex-col justify-between p-xl overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVp44HmRgzYerx138nVFW_MH3hkeTIiFknumah7C6TfBrSwMV_cs1WIx4AqwYCpLSL4Ss6hB19OBDegiR5ZOkvswW8zrX6xNZg7GMxcFkUYj4_RGwEdeXiihsAn8ZR3axs_gI6WWc2wdXA6EHZlUb7kuTBJG3YVMzMf3rolpFbNFy7Q8wUz8hfhoLZyViTUe1SizPcwVdcb1H0D-ZJir9EgpSrnwzbNisvlqq49g7iOFdEZbSqvtp_-C5JnlNwxQCdAuCifY43TO0"
            alt="Architecture"
          />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-sm mb-2xl">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>domain</span>
            </div>
            <span className="text-xl font-h1 font-extrabold text-white tracking-tight">EstateFlow</span>
          </div>
          <h1 className="text-h1 font-h1 text-white mb-lg max-w-md">Precision. Performance. Prestige.</h1>
          <p className="text-body-lg text-on-primary-container max-w-sm opacity-90">
            Join the elite circle of real estate professionals. Let's configure your workspace for high-velocity growth.
          </p>
        </div>
      </div>

      {/* Right Side: Auth Form */}
      <div className="flex-1 flex flex-col bg-surface min-h-screen items-center justify-center p-8 relative">
        <AnimatePresence mode="wait">
          {!success ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-md"
            >
              <div className="text-center mb-10">
                <h2 className="font-h1 text-3xl font-bold text-on-surface mb-2">
                  {isLogin ? 'Welcome back' : 'Create an account'}
                </h2>
                <p className="text-on-surface-variant">
                  {isLogin ? 'Enter your details to access your workspace.' : 'Sign up to start accelerating your pipeline.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                    placeholder="jane@estateflow.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Password</label>
                  <input
                    type="password"
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                    placeholder="••••••••"
                  />
                </div>

                {isLogin && (
                  <div className="flex justify-end">
                    <button type="button" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">Forgot password?</button>
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-primary-container text-white rounded-xl font-bold shadow-lg shadow-indigo-500/25 transition-all"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </motion.button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    {isLogin ? 'Sign up' : 'Log in'}
                  </button>
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center w-full max-w-md"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                <span className="material-symbols-outlined text-4xl text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <h2 className="font-h1 text-3xl font-bold text-on-surface mb-2">Welcome to EstateFlow</h2>
              <p className="text-on-surface-variant">Setting up your secure workspace...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
