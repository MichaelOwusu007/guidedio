
"use client";


import { useEffect } from 'react';
import confetti  from 'canvas-confetti';

const ConfettiEffect = () => {
  useEffect(() => {
    // Initial burst on page load
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2,
        },
        colors: ['#000333', '#ffffff', '#FF0000', '#FFD700', '#008000'],
      });

      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2,
        },
        colors: ['#000333', '#ffffff', '#FF0000', '#FFD700', '#008000'],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#000333', '#ffffff', '#FF0000', '#FFD700', '#008000'],
    });
  };

  return (
    <button
      onClick={triggerConfetti}
      className="fixed bottom-6 right-6 z-50 bg-lime-700 text-primary-foreground p-4 rounded-full shadow-strong hover:scale-110 transition-transform duration-200"
      aria-label="Celebrate"
    >
      🎉
    </button>
  );
};

export default ConfettiEffect;
