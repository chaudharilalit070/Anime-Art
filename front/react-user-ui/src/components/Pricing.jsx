import { plans } from "../assets/assets";
import { useContext } from "react";

const Pricing = () => {
  

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#fef9ff] to-[#e0e7ff] font-sans overflow-hidden relative">
      {/* Floating Gradient Background Circles */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-400 opacity-30 blur-3xl rounded-full z-0 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 opacity-20 blur-3xl rounded-full z-0 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 animate-text">
            ⚡ Pick Your Vibe. Get Your Credits.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            Creators, dreamers & side-hustlers — we’ve got your back 💡
          </p>
        </div>

        {/* Plans */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 perspective-1000">
          {plans.map((item) => (
            <div
              key={item.id}
              className={`relative group transform-style preserve-3d transition-all duration-500 hover:-rotate-x-3 hover:-rotate-y-3 hover:scale-105 bg-opacity-80 border backdrop-blur-lg rounded-3xl p-8 shadow-2xl ${
                item.popular
                  ? "bg-gradient-to-br from-gray-900 to-gray-800 border-pink-500 text-white"
                  : "bg-white border-gray-200 text-gray-800"
              }`}
            >
              {/* Tag */}
              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md uppercase z-20">
                  ✨ Most Loved
                </div>
              )}

              {/* Plan Info */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                <div className="text-4xl font-extrabold text-indigo-400">
                  ₹{item.price}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 text-sm mb-10 font-medium tracking-wide">
                <li className="flex items-center gap-2">
                  🪙 <span>{item.credits}</span>
                </li>
                <li className="flex items-center gap-2">
                  📦 <span>{item.description}</span>
                </li>
              </ul>

              {/* CTA */}
              <button
                onClick={() => handleOrder(item.id)}
                className={`w-full py-3 rounded-full font-bold text-sm transition-transform duration-300 ease-in-out group-hover:scale-105 shadow-md ${
                  item.popular
                    ? "bg-white text-gray-900"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                }`}
              >
                🚀 Choose Plan
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-gray-500 text-sm font-mono tracking-wide">
          🧃 All plans come with max chill. AI made. Gen-Z approved.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
