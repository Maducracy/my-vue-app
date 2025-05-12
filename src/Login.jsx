"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const handleSubmit = () =>{
    Navigate("/Home")
     }

  const handleLogin = (e) => {
    e.preventDefault();
  

    // Add validation logic here
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    // Send login data to your API
    console.log("Logging in with:", { email, password });

    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <div className="flex items-center px-3 border rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
              <Mail className="w-4 h-4 text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 outline-none bg-transparent"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
            <div className="flex items-center px-3 border rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
              <Lock className="w-4 h-4 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 outline-none bg-transparent"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-gray-500 focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>

          {/* Submit Button */}
          <button onClick={handleSubmit}
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up */}
        <p className="text-sm text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/Signup" className="text-blue-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
