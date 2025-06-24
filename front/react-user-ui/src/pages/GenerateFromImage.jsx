


import { useState } from 'react';
import { generateFromImage } from '../api/imageAPI';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function GenerateFromImage() {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [prompt, setPrompt] = useState('');
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
    if (!imageFile || !prompt) return toast.error("Please provide both image and prompt");
    setLoading(true);
    try {
      const res = await generateFromImage(imageFile, prompt);
      const blob = new Blob([res.data], { type: 'image/png' });
      const imageUrl = URL.createObjectURL(blob);
      setGeneratedImages(prev => [imageUrl, ...prev]);
      toast.success("Image generated!");
    } catch {
      toast.error("Error generating image");
    }
    setLoading(false);
  };

  const handleReset = () => {
    setPrompt('');
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
    <div className="relative p-8 min-h-screen bg-gradient-to-br from-pink-50 to-indigo-100 overflow-hidden">
      <div className="absolute top-0 -left-24 w-80 h-80 bg-indigo-300 opacity-20 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-pink-300 opacity-20 blur-3xl rounded-full animate-pulse z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
          🧠 Generate from Image + Prompt
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/30 flex flex-col items-center gap-4"
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
          />

          {imagePreview && (
            <motion.div
              whileHover={{ rotateY: 8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-full max-w-xs mx-auto"
            >
              <p className="text-sm text-gray-500 mb-2">Image Preview:</p>
              <div className="bg-white rounded-xl p-2 shadow-lg">
                <img src={imagePreview} alt="Preview" className="h-48 object-contain w-full rounded-lg" />
              </div>
            </motion.div>
          )}

          <input
            className="w-full max-w-md px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm"
            type="text"
            placeholder="Enter prompt to guide generation"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleGenerate}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-2 rounded-full shadow-md"
          >
            🚀 Generate
          </motion.button>

          {(imageFile || prompt) && (
            <button
              onClick={handleReset}
              className="mt-2 text-sm underline text-indigo-500 hover:text-indigo-700"
            >
              🔁 Try Another Image
            </button>
          )}
        </motion.div>

        {loading && (
          <p className="mt-6 text-indigo-600 font-medium animate-pulse">Generating... please wait ⏳</p>
        )}

        {generatedImages.length > 0 && (
          <div className="mt-14">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">🖼️ Generated Images</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {generatedImages.map((url, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, rotateY: 3 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white/80 backdrop-blur-lg p-4 rounded-2xl shadow-lg hover:shadow-2xl"
                >
                  <img
                    src={url}
                    alt={`Generated ${idx + 1}`}
                    className="w-full object-contain rounded-xl"
                  />
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    onClick={() => handleDownload(url, idx)}
                    className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-full"
                  >
                    ⬇️ Download
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
