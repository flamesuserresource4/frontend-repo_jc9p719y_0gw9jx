import React from 'react';
import { Sparkles } from 'lucide-react';
import { emitAddToCart } from './MagicTrunkCart';

export default function ProductCard({ id, name, price, color, illustration }) {
  return (
    <div className="group relative rounded-2xl p-1 bg-gradient-to-br from-fuchsia-500/60 via-yellow-300/60 to-violet-500/60">
      <div className="rounded-2xl bg-purple-900/60 backdrop-blur-xl p-5 h-full border border-white/10">
        <div className="flex items-start justify-between mb-4">
          <div className="text-white/90">
            <h4 className="text-xl font-extrabold tracking-wide">{name}</h4>
            <p className="text-white/70 text-sm">Make your desk sparkle ✨</p>
          </div>
          <Sparkles className="text-yellow-300 w-5 h-5 opacity-80" />
        </div>
        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/40 to-pink-500/40 flex items-center justify-center">
          {illustration}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-2xl font-black text-yellow-300">${price.toFixed(2)}</div>
          <button
            onClick={() => emitAddToCart(id)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 via-yellow-300 to-purple-500 text-purple-900 font-bold shadow hover:shadow-yellow-300/40 transition"
          >
            Add to Trunk
          </button>
        </div>
      </div>
    </div>
  );
}
