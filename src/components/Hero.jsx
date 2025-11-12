import React from 'react';

export default function Hero({ primary, secondary, accent }) {
  return (
    <header className="relative w-full">
      {/* Spline cover background */}
      <div className="absolute inset-0 -z-10">
        <iframe
          src="https://prod.spline.design/fTzRQ8pMbm1-BzvF/scene.splinecode"
          className="w-full h-[70vh] md:h-[80vh] lg:h-[85vh] border-0"
          title="Magic Ghost Cover"
        />
      </div>

      <div className="relative h-[70vh] md:h-[80vh] lg:h-[85vh] flex items-center">
        <div className="px-4 sm:px-6 lg:px-10 max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 backdrop-blur border border-white/20 shadow-xl">
            <span className="text-yellow-300">✨ Limited Release</span>
            <span className="text-white/80">Cottage-core spells meet exam-season hustle</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] drop-shadow-[0_3px_0_rgba(0,0,0,0.25)]">
            Cute Stationery for Little Wizards
          </h1>
          <p className="mt-4 max-w-xl text-white/90 text-lg">
            Deck out your desk with boba-sipping ghosts, star-sprinkled pages and a trunk-full of cheer.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#shop" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-yellow-300 text-purple-800 font-bold shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-400/50 transition">
              Shop the Magic
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#story" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition">
              Our Story
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
