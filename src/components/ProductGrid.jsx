import React from 'react';
import { ShoppingCart } from 'lucide-react';

function ProductCard({ product, onAdd }) {
  return (
    <div
      className="group relative rounded-2xl p-5 bg-white/10 backdrop-blur border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_60px_rgba(247,37,133,0.35)] transition overflow-hidden"
      style={{ outline: `2px dashed ${product.accent}`, outlineOffset: '-8px' }}
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30 blur-2xl" style={{ background: product.color }} />
      <div className="flex items-start justify-between gap-3">
        <div className="text-5xl drop-shadow">{product.emoji}</div>
        <span className="text-xs uppercase tracking-widest rounded-full px-3 py-1 bg-black/30 border border-white/20">{product.badge}</span>
      </div>
      <h3 className="mt-4 text-xl font-extrabold">{product.name}</h3>
      <p className="mt-2 text-white/80 text-sm">{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-yellow-300 text-2xl font-black">${product.price.toFixed(2)}</span>
        <button
          onClick={() => onAdd(product)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-400 text-white font-bold shadow-lg shadow-pink-500/30 transition"
        >
          <ShoppingCart size={18} /> Add
        </button>
      </div>
      {/* Cute illustration accents */}
      <div className="pointer-events-none absolute bottom-2 right-3 text-pink-200/60">✶ ✷ ✸ ✹ ✺</div>
    </div>
  );
}

export default function ProductGrid({ products, onAdd }) {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />)
      )}
    </div>
  );
}
