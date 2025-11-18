
import React from 'react'

const LoginForm = () => {
return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Login Form </h2>
          <p className="text-gray-600 mt-2">Login</p>
        </div>
        
        <form className="space-y-6">
          {/* Name input */}
          <div>
            
          </div>
          
          {/* Email input */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="halimah@example.com"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 focus:outline-none transition-all"
            />
          </div>
          
          {/* input for password */}
          <div>

             <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label> 
             <input
              type="password"
              id="name"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 focus:outline-none transition-all"
            /> 
          </div>
          
          {/* Submit button with active state */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm