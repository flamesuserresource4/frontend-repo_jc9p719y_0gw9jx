import React from 'react';

export default function Footer() {
  return (
    <footer id="story" className="relative z-10 px-4 sm:px-6 lg:px-10 py-14">
      <div className="max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-yellow-300 font-black text-lg">Our Spellbook</h4>
            <p className="text-white/80 mt-2 text-sm">
              Crafted for dreamers, doodlers, and diligent scholars. Every page has a hint of stardust.
            </p>
          </div>
          <div>
            <h4 className="text-yellow-300 font-black text-lg">Colors of the Realm</h4>
            <div className="mt-3 flex gap-2">
              {['#560BAD','#7209B7','#F72585','#FDC500','#FFD500'].map((c) => (
                <span key={c} className="h-6 w-6 rounded-full border border-white/30" style={{ background: c }} />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-yellow-300 font-black text-lg">Stay in the Owl Post</h4>
            <form onSubmit={(e)=>e.preventDefault()} className="mt-3 flex gap-2">
              <input className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 placeholder-white/60" placeholder="Email address" />
              <button className="px-4 py-2 rounded-xl bg-pink-500 text-white font-bold">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-xs text-white/60">© {new Date().getFullYear()} Spell & Scribble. All rights reserved.</div>
      </div>
    </footer>
  );
}
