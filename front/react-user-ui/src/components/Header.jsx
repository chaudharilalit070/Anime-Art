
import { assets } from "../assets/assets";
import { useState } from "react";
import { motion } from "framer-motion";
import { generateFromImage, generateFromText } from "../api/imageAPI";
import toast from "react-hot-toast";
import { SignedIn, SignedOut } from '@clerk/clerk-react';

const Header = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('ghibli');
  const [generatedImages, setGeneratedImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleGenerate = async () => {
    if (imageFile && prompt) {
      setLoading(true);
      try {
        const res = await generateFromImage(imageFile, prompt);
        const blob = new Blob([res.data], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(blob);
        setGeneratedImages(prev => [imageUrl, ...prev]);
        toast.success("Image generated!");
      } catch {
        toast.error("Error generating from image");
      }
      setLoading(false);
    } else if (prompt && style) {
      setLoading(true);
      try {
        const res = await generateFromText(prompt, style);
        const blob = new Blob([res.data], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(blob);
        setGeneratedImages(prev => [imageUrl, ...prev]);
        toast.success("Image generated!");
      } catch {
        toast.error("Error generating from text");
      }
      setLoading(false);
    } else {
      toast.error("Please provide image + prompt OR prompt + style");
    }
  };

  const handleReset = () => {
    setPrompt('');
    setStyle('ghibli');
    setImageFile(null);
    setImagePreview(null);
    setGeneratedImages([]);
  };

  const handleDownload = (url, index) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `generated-image-${index + 1}.png`;
    link.click();
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        {/* Left: Video */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="order-2 md:order-1 flex justify-center"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
            <video
              src={assets.banner}
              autoPlay
              loop
              muted
              className="w-full max-w-md rounded-3xl border border-purple-200"
            />
          </div>
        </motion.div>

        {/* Right: Text & Controls */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="order-1 md:order-2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-4">
            AI Anime Creator 
          </h1>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Anime image Creator or generate AI images using prompts.
          </p>
          <p className="text-sm text-gray-500 italic mb-6">
            Upload or enter prompt to try it yourself 👇
          </p>

          <SignedIn>
            <div className="flex flex-col gap-4 max-w-md mx-auto md:mx-0">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
              />

              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="w-full max-h-40 object-contain rounded-lg border" />
              )}

              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter prompt..."
                className="px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm"
              />

              {!imageFile && (
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="ghibli">Cinematic ✨</option>
                  <option value="realistic">Comic-book 🌄</option>
                  <option value="anime">Anime 🎌</option>
                </select>
              )}

              <button
                onClick={handleGenerate}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:scale-105 transition transform"
              >
                🚀 Generate
              </button>

              {(prompt || imageFile) && (
                <button
                  onClick={handleReset}
                  className="text-sm underline text-indigo-500 hover:text-indigo-700"
                >
                  🔁 Reset
                </button>
              )}
            </div>
          </SignedIn>

          <SignedOut>
            <p className="text-center text-gray-500 text-sm italic mt-4">
              Please <span className="text-indigo-600 font-medium">sign in</span> to generate images.
            </p>
          </SignedOut>
        </motion.div>
      </div>

      {/* Generated Output */}
      {loading && (
        <p className="mt-10 text-center text-indigo-600 font-medium animate-pulse">Generating... ⏳</p>
      )}
      {generatedImages.length > 0 && (
        <div className="mt-14 max-w-6xl mx-auto z-10 relative px-4">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">🖼️ Generated Images</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {generatedImages.map((url, idx) => (
              <div key={idx} className="bg-white/80 p-4 rounded-2xl shadow-lg hover:shadow-2xl transition">
                <img src={url} alt={`Generated ${idx + 1}`} className="w-full object-contain rounded-xl" />
                <button
                  onClick={() => handleDownload(url, idx)}
                  className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-full"
                >
                  ⬇️ Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Blurred Backgrounds */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 opacity-30 rounded-full blur-[100px] animate-bounce"></div>
    </section>
  );
};

export default Header;