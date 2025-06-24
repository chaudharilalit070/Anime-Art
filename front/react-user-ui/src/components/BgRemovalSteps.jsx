// import { steps } from "../assets/assets";
// import { motion } from "framer-motion";

// const BgRemovalSteps = () => {
//   return (
//     <section className="text-center mb-20  mt-25 px-6">
//       {/* Title */}
//       <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400 mb-12">
//         ✂️ Anime Art just  1-2-3 steps!
//       </h2>

//       {/* Steps */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {steps.map((item, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.06, rotate: [0, 1.5, -1.5, 0] }}
//             transition={{ type: "spring", stiffness: 300, damping: 15 }}
//             className="bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-[0_15px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-xl hover:border-indigo-400 transition duration-300"
//           >
//             <span className="inline-block bg-gradient-to-r from-indigo-400 to-pink-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-4 shadow-md">
//               🚀 {item.step}
//             </span>
//             <h3 className="text-xl font-extrabold text-gray-800 mb-3 leading-snug tracking-tight">
//               {item.title}
//             </h3>
//             <p className="text-sm text-gray-600 leading-relaxed tracking-wide">
//               {item.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Footer Line */}
//       <div className="mt-16 text-sm text-gray-400 font-mono">
//         Gen Z Approved ✔️ AI Powered 🤖 anime Killer 🧽
//       </div>
//     </section>
//   );
// };

// export default BgRemovalSteps;


import { steps } from "../assets/assets";
import { motion } from "framer-motion";

const BgRemovalSteps = () => {
  return (
    <section className="text-center mb-20 mt-25 px-6 relative overflow-hidden">
      {/* 3D Background Animation */}
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 opacity-30 rounded-full blur-[100px]"
        animate={{ y: [0, -30, 0], rotate: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400 mb-12"
      >
        ✂️ Anime Art in just 1-2-3 steps!
      </motion.h2>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08, rotate: [0, 2, -2, 0] }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
            className="bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-[0_15px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-xl hover:border-indigo-400 transition duration-300"
          >
            <span className="inline-block bg-gradient-to-r from-indigo-400 to-pink-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-4 shadow-md">
              🚀 {item.step}
            </span>
            <h3 className="text-xl font-extrabold text-gray-800 mb-3 leading-snug tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed tracking-wide">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer Line */}
      <motion.div
        className="mt-16 text-sm text-gray-400 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Gen Z Approved ✔️ AI Powered 🤖 anime Killer 🪝
      </motion.div>
    </section>
  );
};

export default BgRemovalSteps;




