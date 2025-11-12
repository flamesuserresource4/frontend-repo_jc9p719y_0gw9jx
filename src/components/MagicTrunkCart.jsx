import React, { useEffect } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';

export default function MagicTrunkCart({ open, onClose, items, totals, onRemove, onQty }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[100] transition ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Magic trunk */}
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[460px] bg-gradient-to-b from-[#4E2A84] to-[#2E1850] text-white shadow-2xl transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          backgroundImage: 'linear-gradient(180deg, #4E2A84 0%, #2E1850 100%)',
          boxShadow: 'inset 0 0 0 4px #FDC500, inset 0 0 0 8px #FFD500',
        }}
      >
        {/* Lid */}
        <div className="relative">
          <div className={`h-8 bg-yellow-300 shadow-[0_8px_0_rgba(0,0,0,0.25)]`} />
          <button
            onClick={onClose}
            className="absolute -top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg hover:rotate-6 transition"
          >
            <X />
          </button>
        </div>

        <div className="p-5 space-y-4 overflow-y-auto h-[calc(100%-12rem)]">
          <h3 className="text-2xl font-black tracking-tight">Magic Trunk</h3>
          {items.length === 0 ? (
            <p className="text-white/70">Your trunk is empty. Toss in a few charms!</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="rounded-xl p-4 bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="text-3xl">{item.emoji}</div>
                <div className="flex-1">
                  <div className="font-bold">{item.name}</div>
                  <div className="text-sm text-white/70">${item.price.toFixed(2)}</div>
                  <div className="mt-2 inline-flex items-center gap-2">
                    <button onClick={() => onQty(item.id, Math.max(1, item.qty - 1))} className="p-1 rounded bg-white/10"><Minus size={16} /></button>
                    <span className="min-w-[2ch] text-center">{item.qty}</span>
                    <button onClick={() => onQty(item.id, item.qty + 1)} className="p-1 rounded bg-white/10"><Plus size={16} /></button>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="p-2 rounded bg-white/10 hover:bg-white/20"><Trash2 size={16} /></button>
              </div>
            ))
          )}
        </div>

        {/* Totals */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/10 bg-black/20 backdrop-blur">
          <div className="flex items-center justify-between text-sm text-white/80">
            <span>Subtotal</span>
            <span>${totals.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-white/80">
            <span>Shipping</span>
            <span>{totals.shipping === 0 ? 'Free' : `$${totals.shipping.toFixed(2)}`}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-lg font-black text-yellow-300">
            <span>Total</span>
            <span>${totals.total.toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full py-3 rounded-xl bg-yellow-300 text-purple-900 font-black shadow-xl shadow-yellow-500/30 hover:shadow-yellow-400/60 transition">
            Checkout • Cast Purchase
          </button>
        </div>
      </aside>
    </div>
  );
}
