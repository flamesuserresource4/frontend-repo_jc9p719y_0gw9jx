import React, { useEffect, useRef } from 'react';

// A whimsical magic-wand cursor with spark trail
export default function MagicCursor({ accentColor = '#FFD500', trailColor = '#FDC500' }) {
  const dotRef = useRef(null);
  const trailRef = useRef([]);

  useEffect(() => {
    const dot = document.createElement('div');
    dotRef.current = dot;
    Object.assign(dot.style, {
      position: 'fixed',
      top: '0px',
      left: '0px',
      width: '14px',
      height: '14px',
      borderRadius: '9999px',
      background: `radial-gradient(circle at 30% 30%, ${accentColor}, ${trailColor})`,
      boxShadow: `0 0 16px ${accentColor}, 0 0 32px ${trailColor}`,
      pointerEvents: 'none',
      transform: 'translate(-50%, -50%)',
      zIndex: 9999,
      mixBlendMode: 'screen'
    });
    document.body.appendChild(dot);

    const sparkle = (x, y) => {
      const s = document.createElement('div');
      const size = 4 + Math.random() * 6;
      Object.assign(s.style, {
        position: 'fixed',
        top: `${y}px`,
        left: `${x}px`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '9999px',
        background: `radial-gradient(circle, ${accentColor}, transparent 70%)`,
        filter: 'blur(0.5px)',
        opacity: '0.9',
        pointerEvents: 'none',
        zIndex: 9998,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 400ms ease, opacity 400ms ease'
      });
      document.body.appendChild(s);
      trailRef.current.push(s);
      const dx = (Math.random() - 0.5) * 40;
      const dy = (Math.random() - 0.5) * 40;
      requestAnimationFrame(() => {
        s.style.transform = `translate(${dx}px, ${dy}px)`;
        s.style.opacity = '0';
      });
      setTimeout(() => {
        s.remove();
        trailRef.current = trailRef.current.filter((n) => n !== s);
      }, 500);
    };

    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      dot.style.top = `${y}px`;
      dot.style.left = `${x}px`;
      for (let i = 0; i < 2; i++) sparkle(x, y);
    };

    const onClick = (e) => {
      // Burst
      for (let i = 0; i < 16; i++) {
        setTimeout(() => onMove({ clientX: e.clientX + (Math.random() - 0.5) * 4, clientY: e.clientY + (Math.random() - 0.5) * 4 }), i * 10);
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);

    // Hide native cursor
    document.documentElement.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      document.documentElement.style.cursor = '';
      dot.remove();
      trailRef.current.forEach((n) => n.remove());
      trailRef.current = [];
    };
  }, [accentColor, trailColor]);

  return null;
}
