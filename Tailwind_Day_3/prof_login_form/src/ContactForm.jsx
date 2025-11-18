import React from 'react'

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-600 mt-2">We'd love to hear from you 🇳🇬</p>
        </div>
        
        <form className="space-y-6">
          {/* Name input */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Halimah Akinoso"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 focus:outline-none transition-all"
            />
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
          
          {/* Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 focus:outline-none transition-all resize-none"
            ></textarea>
          </div>
          
          {/* Submit button with active state */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm