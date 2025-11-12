import React from 'react';
import Spline from '@splinetool/react-spline';
import { Menu, Star, Wand2, Ghost } from 'lucide-react';
import MagicCursor from './components/MagicCursor';
import MagicTrunkCart from './components/MagicTrunkCart';
import ProductCard from './components/ProductCard';

const COLORS = {
  deepViolet: 'rgb(86, 11, 173)',
  royalPurple: 'rgb(114, 9, 183)',
  hotPink: 'rgb(247, 37, 133)',
  goldenYellow: 'rgb(253, 197, 0)',
  brightYellow: 'rgb(255, 213, 0)'
};

const products = [
  { id: 'calendar', name: 'Desk Calendar', price: 19.99 },
  { id: 'planner', name: 'Planner', price: 24.99 },
  { id: 'journal', name: 'Journal', price: 14.99 },
  { id: 'notebook', name: 'Notebook', price: 9.99 },
  { id: 'sticky', name: 'Sticky Notes', price: 6.99 },
  { id: 'notepad', name: 'Notepad', price: 7.99 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(247,37,133,0.15),transparent),radial-gradient(900px_500px_at_0%_20%,rgba(253,197,0,0.15),transparent),radial-gradient(1000px_600px_at_100%_40%,rgba(114,9,183,0.2),transparent)] text-white">
      <MagicCursor />
      <MagicTrunkCart />

      {/* Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-purple-900/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Ghost className="text-pink-400" />
            <span className="font-black tracking-wider text-xl" style={{ color: COLORS.brightYellow }}>
              WhimsiWand Stationery
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-yellow-300">Shop</a>
            <a href="#about" className="hover:text-yellow-300">About</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </div>
          <button className="p-2 rounded hover:bg-white/10">
            <Menu />
          </button>
        </div>
      </nav>

      {/* Hero with Spline cover */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/fTzRQ8pMbm1-BzvF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-900/20 to-purple-950/80 pointer-events-none" />
        <div className="relative h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/60 border border-white/10">
              <Wand2 className="w-4 h-4 text-yellow-300" />
              <span className="text-xs tracking-wider uppercase">Stationery with a splash of sorcery</span>
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight" style={{ textShadow: '0 6px 0 rgba(86,11,173,0.7)' }}>
              Make Every Note a Spell, Every Plan a Potion
            </h1>
            <p className="mt-3 text-white/90 max-w-2xl">
              Cute, whimsical and slightly enchanted desk delights. Calendars that charm, planners that plot, and sticky notes that stick like a sticking charm.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#products" className="px-5 py-3 rounded-xl font-bold bg-gradient-to-r from-[rgb(247,37,133)] via-[rgb(255,213,0)] to-[rgb(114,9,183)] text-purple-900 shadow-lg shadow-yellow-300/20 hover:shadow-yellow-300/40">
                Shop Enchanted Picks
              </a>
              <button className="px-5 py-3 rounded-xl font-bold border border-white/20 hover:bg-white/10">
                Summon Lookbook
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16" id="products">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/60 border border-white/10">
              <Star className="w-4 h-4 text-yellow-300" />
              <span className="text-xs tracking-wider uppercase">Featured Treasures</span>
            </div>
            <h2 className="mt-4 text-3xl md:text-5xl font-black">Your Desk, But Make It Magical</h2>
            <p className="mt-3 text-white/80">Hand-picked cuties blessed by our house ghosts.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} id={p.id} name={p.name} price={p.price} illustration={<Illustration id={p.id} />} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h3 className="text-3xl md:text-4xl font-black">Limited run drops. Blink and they disapparate.</h3>
          <p className="mt-3 text-white/80">Grab your favorites before the sorting hat hides them again.</p>
          <a href="#products" className="mt-6 inline-block px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-[rgb(247,37,133)] via-[rgb(255,213,0)] to-[rgb(114,9,183)] text-purple-900 shadow-lg shadow-yellow-300/20 hover:shadow-yellow-300/40">Buy Before They Fly</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 bg-purple-950/60">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/70">© {new Date().getFullYear()} WhimsiWand. All rights reserved.</div>
          <div className="flex gap-4 text-white/60 text-sm">
            <a href="#" className="hover:text-yellow-300">Privacy</a>
            <a href="#" className="hover:text-yellow-300">Terms</a>
            <a href="#" className="hover:text-yellow-300">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Illustration({ id }) {
  const base = 'rounded-xl w-full h-full flex items-center justify-center';
  const glow = 'shadow-[0_0_40px_rgba(253,197,0,0.35)]';
  switch (id) {
    case 'calendar':
      return <div className={`${base} bg-gradient-to-br from-pink-400/30 to-yellow-300/30 ${glow}`}>
        <div className="bg-white/90 rounded-lg p-3 text-purple-900 font-black">2025 ✨</div>
      </div>;
    case 'planner':
      return <div className={`${base} bg-gradient-to-br from-violet-400/30 to-pink-400/30 ${glow}`}>
        <div className="bg-white/90 rounded-lg p-3 text-purple-900 font-black">Plans & Potions</div>
      </div>;
    case 'journal':
      return <div className={`${base} bg-gradient-to-br from-yellow-300/30 to-amber-300/30 ${glow}`}>
        <div className="bg-white/90 rounded-lg p-3 text-purple-900 font-black">Dear Diary</div>
      </div>;
    case 'notebook':
      return <div className={`${base} bg-gradient-to-br from-fuchsia-400/30 to-pink-400/30 ${glow}`}>
        <div className="bg-white/90 rounded-lg p-3 text-purple-900 font-black">Spellbook</div>
      </div>;
    case 'sticky':
      return <div className={`${base} bg-gradient-to-br from-amber-300/30 to-yellow-300/30 ${glow}`}>
        <div className="bg-white/90 rounded-lg p-3 text-purple-900 font-black">Sticky Charms</div>
      </div>;
    case 'notepad':
      return <div className={`${base} bg-gradient-to-br from-violet-400/30 to-indigo-400/30 ${glow}`}>
        <div className="bg-white/90 rounded-lg p-3 text-purple-900 font-black">Quick Notes</div>
      </div>;
    default:
      return <div className={`${base} bg-purple-400/20 ${glow}`}></div>;
  }
}
