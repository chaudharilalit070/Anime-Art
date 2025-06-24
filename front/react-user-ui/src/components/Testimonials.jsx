import { testimonials } from "../assets/assets";

const Testimonials = () => {
  return (
    <section className="mt-10 relative py-20 px-4 sm:px-8 bg-gradient-to-br from-indigo-50 to-pink-50 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 -left-32 w-80 h-80 bg-pink-300 opacity-20 blur-3xl rounded-full animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 opacity-20 blur-3xl rounded-full animate-pulse delay-1000 z-0"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Title Section */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-16 animate-fade-in-up">
          💬 They Love Us. You Will Too.
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 perspective-1000">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative group transform-style preserve-3d transition-all duration-500 hover:-rotate-x-3 hover:rotate-y-2 hover:scale-105 bg-white/80 border border-white/30 backdrop-blur-2xl rounded-3xl shadow-xl hover:shadow-2xl p-6 flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/633/633759.png"
                  alt="Quote icon"
                  className="w-10 h-10"
                />
              </div>

              {/* Quote */}
              <p className="text-gray-800 text-base leading-relaxed italic mb-6">
                “{testimonial.quote}”
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200">
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">@{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-20 text-sm text-gray-500 font-mono">
          ✨ Real reviews. Real vibes. Gen-Z approved.
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
