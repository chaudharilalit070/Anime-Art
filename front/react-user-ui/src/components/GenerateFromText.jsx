
import { useState } from 'react';
import { generateFromText } from '../api/imageAPI';
import toast from 'react-hot-toast';

export default function GenerateFromText() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('ghibli');
  const [generatedImages, setGeneratedImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt || !style) return toast.error("Provide prompt and style");

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
  };

  const handleReset = () => {
    setPrompt('');
    setGeneratedImages([]);
  };

  const handleDownload = (url, index) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `generated-image-${index + 1}.png`;
    link.click();
  };

  return (
    <div className="relative p-10 min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-purple-100 overflow-hidden">
      {/* Blurred blobs */}
      <div className="absolute top-0 -left-32 w-96 h-96 bg-indigo-300 opacity-20 blur-3xl rounded-full animate-pulse z-0" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-pink-300 opacity-20 blur-3xl rounded-full animate-pulse z-0" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">
          🎨 Generate Image from Prompt + Style
        </h2>

        {/* Prompt Inputs */}
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/30 flex flex-col items-center gap-4">
          <input
            className="w-full max-w-md px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm"
            type="text"
            placeholder="Type your creative prompt..."
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
          />

          <select
            value={style}
            onChange={e => setStyle(e.target.value)}
            className="w-full max-w-xs px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="photographic">Photographic ✨</option>
            <option value="realistic"> inematic 🌄</option>
            <option value="anime">Anime 🎌</option>
          </select>

          <button
            onClick={handleGenerate}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:scale-105 transition transform"
          >
            🚀 Generate
          </button>

          {generatedImages.length > 0 && (
            <button
              onClick={handleReset}
              className="mt-2 text-sm underline text-indigo-500 hover:text-indigo-700"
            >
              🔁 Try Another Image
            </button>
          )}
        </div>

        {loading && (
          <p className="mt-6 text-indigo-600 font-medium animate-pulse">Generating your image... ⏳</p>
        )}

        {/* Output Images */}
        {generatedImages.length > 0 && (
          <div className="mt-14">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">🖼️ Generated Images</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {generatedImages.map((url, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-lg p-4 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
                >
                  <img
                    src={url}
                    alt={`Generated ${idx + 1}`}
                    className="w-full object-contain rounded-xl"
                  />
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
      </div>
    </div>
  );
}
