

import { useState } from "react";
import { category } from "../assets/assets";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCategory, setActiveCategory] = useState("People");

  const handleSliderChanges = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <section className="w-full px-4 py-20 bg-gradient-to-b from-white to-indigo-50">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Flawless Anime Art
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Drag the slider to compare before and after Anime Creator. Powered by AI.
        </p>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex justify-center mb-10"
      >
        <div className="flex flex-wrap justify-center gap-3 p-3 bg-white/70 backdrop-blur-md rounded-full shadow-md">
          {category.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Image Comparison Area */}
      <motion.div
        className="relative w-full max-w-5xl h-[600px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-indigo-100"
        whileHover={{ rotateX: 4, rotateY: -4 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-400 via-purple-400 to-pink-400 animate-gradientBlur" />

        {/* After Image */}
        <img
          src={assets.imgslider3}
          alt="After"
          className="absolute inset-0 w-full h-full object-contain object-center z-0"
        />

        {/* Before Image clipped */}
        <motion.img
          src={assets.imgslider4}
          alt="Before" 
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          className="absolute inset-0 w-full h-full object-contain object-center z-10"
          animate={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />

        {/* Divider Line */}
        <motion.div
          className="absolute top-0 bottom-0 w-[3px] bg-indigo-500 shadow-md z-20"
          animate={{ left: `${sliderPosition}%` }}
          transition={{ type: "spring", stiffness: 150, damping: 12 }}
        />

        {/* Range Slider */}
        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChanges}
          className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-30 appearance-none bg-transparent cursor-pointer"
        />
      </motion.div>

      {/* Labels */}
      <div className="flex justify-between max-w-5xl mx-auto mt-4 px-4 text-sm text-gray-500">
        <span>Original</span>
        <span>Anime Creation</span>
      </div>
    </section>
  );
};

export default BgSlider;
