import React from 'react'

const About = () => {
  return (
    <div>
   <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
  <div className="max-w-4xl mx-auto px-4">
    <h3 className="text-3xl font-semibold mb-6">About Me</h3>
    <p>I am Halimah Akinoso , a Software Developer passionate about building clean, efficient, and user-friendly digital experiences. </p>
  </div>
   <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'TypeScript'].map(skill => (
        <span key={skill} className="bg-white dark:bg-gray-700 px-4 py-2 rounded shadow text-sm font-medium">{skill}</span>
      ))}
    </div>
  </div>

</section>     
    </div>
  )
}

export default About