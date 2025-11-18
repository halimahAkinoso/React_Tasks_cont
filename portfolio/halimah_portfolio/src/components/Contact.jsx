import React from 'react'

const Contact = () => {
  return (
    <div><section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
  <div className="max-w-4xl mx-auto px-4">
    <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="w-full p-3 rounded border" />
      <input type="email" placeholder="Email" className="w-full p-3 rounded border" />
      <textarea placeholder="Message" className="w-full p-3 rounded border h-32"></textarea>
      <button className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Send</button>
    </form>
  </div>
  

</section></div>
  )
}

export default Contact