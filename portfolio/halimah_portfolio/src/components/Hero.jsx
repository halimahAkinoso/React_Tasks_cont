import { motion } from "framer-motion";
import profile from "../assets/profile.jpg"; 
import background from "../assets/background.WEBP"; 

export default function Hero() {
  return (
    <div
  className="min-h-screen text-white p-4 md:p-8 bg-cover bg-center"
  style={{ backgroundImage: `url(${background})` }}
>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex items-center mb-10">
          <div className="flex items-center text-gray-400">
            <span className="mr-2">🌐</span>
            <span className="text-sm font-semibold">ABOUT ME</span>
          </div>
        </header>
        {/* Main Content Area (Responsive Layout) */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Text Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              I'm <span className="text-teal-400">Halimah Akinoso</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl leading-loose">
             I'm a passionate FullStack Web Developer from Nigeria, driven by curiosity and creativity. I specialize in crafting immersive digital experiences that blend cutting-edge technology with intuitive design. With a strong foundation in both frontend and backend development, I thrive on building scalable, responsive, and user-centric web applications.

            </p>
          </div>
          {/* Right Image Section (Placeholder) */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            {/* Placeholder for the image. In a real app, you'd use an <img> tag */}
            <div className="w-64 h-96 bg-gray-700 rounded-lg shadow-xl flex items-center justify-center">
              <span className="text-gray-500"> <img
          src={profile}
          alt="Profile"
          className="w-64 h-96 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg"
        /></span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg max-w-2xl">
          <div className="flex items-center mb-4 text-gray-400">
            <span className="mr-2">🎯 
</span>
            <span className="text-lg font-bold">MY MISSION</span>
          </div>
          <p className="text-gray-200 text-lg mb-4 leading-relaxed">
           To push the boundaries of web technology by delivering innovative solutions that solve real-world problems. I believe in clean code, thoughtful design, and continuous learning. Whether it's building a startup MVP or optimizing enterprise systems, I bring energy, precision, and a collaborative spirit to every project.

          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Keep moving, don't settle.. 🚀 
          </p>
        </div>
      </div>
    </div>
  )

}
