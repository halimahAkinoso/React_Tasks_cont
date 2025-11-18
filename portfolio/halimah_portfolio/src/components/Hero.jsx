import { motion } from "framer-motion";
import profile from "../assets/profile.jpg"; 

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8 md:px-20 bg-white">

      {/* LEFT — TEXT */}
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-slate-900"
        >
          Hi, I’m <span className="text-black">Halimah Akinoso</span>.
          <br />I build modern web experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-slate-600 max-w-xl text-lg"
        >
          Full-stack developer focused on elegant UI, clean code and scalable systems.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#projects"
          className="mt-10 inline-block px-6 py-3 bg-black text-white rounded-lg text-sm hover:bg-slate-800 transition"
        >
          View Projects
        </motion.a>
      </div>

      {/* RIGHT — IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={profile}
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg"
        />
      </motion.div>
    </section>
  );
}
