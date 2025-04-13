import React from 'react';

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 items-center gap-8 p-6 md:p-20 bg-[#010102] min-h-[500px] md:min-h-[600px]">
     <div className="md:-mt-20 lg:-mt-40 order-2 md:order-1">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white animate-slide-up [--slide-up-delay:0.1s] opacity-0">
    AI - Driven Future
  </h2>
  <p className="text-base md:text-lg mb-6 text-gray-300 animate-slide-up [--slide-up-delay:0.3s] opacity-0">
  Discover how AI is seamlessly weaving its brilliance into the fabric of modern life, transforming healthcare, redefining business, and illuminating everyday moments with intelligent automation.
  </p>
  <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition text-sm font-semibold animate-slide-up [--slide-up-delay:0.5s] opacity-0">
    See How It Works
  </button>
</div>

      <div className="flex justify-center items-center h-full order-1 md:order-2">
        <video
          src="/v2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl shadow-lg max-h-[300px] md:max-h-full w-auto object-contain"
        ></video>
      </div>
    </section>
  );
};

export default Hero;