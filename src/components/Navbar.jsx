import React from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenCart, cartCount }) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-[rgba(17,10,32,0.35)] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-black text-xl">
          <Sparkles className="text-yellow-300" />
          Spell & Scribble
        </a>
        <div className="flex items-center gap-4">
          <a href="#shop" className="hover:text-yellow-300 transition">Shop</a>
          <button
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            <ShoppingBag size={18} />
            <span>Trunk</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-pink-500 text-white text-xs font-bold grid place-items-center shadow-lg">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
