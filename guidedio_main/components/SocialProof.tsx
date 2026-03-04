"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ama Mensah",
    level: "SHS Graduate",
    text: "I wish I had Guidedio when I was choosing my university program. This is exactly what Ghanaian students need!",
  },
  {
    name: "Kofi Asamoah",
    level: "University Student",
    text: "The aggregate calculator alone would have saved me so much confusion. Can't wait for the full launch!",
  },
  {
    name: "Mrs. Adwoa Boateng",
    level: "Parent",
    text: "As a parent, knowing there's a reliable platform to guide my children's academic choices gives me peace of mind.",
  },
];

const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const SocialProof = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg inline-flex flex-col items-center px-12 py-8 rounded-3xl">
            <p className="font-['Sora'] text-5xl md:text-6xl font-bold text-[#6baa2b] mb-2">
              <AnimatedCounter target={1284} />+
            </p>
            <p className="text-[#666666] font-medium">Students Already on the Waitlist</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg rounded-2xl p-6"
            >
              <Quote className="text-[#6baa2b]/20 mb-3" size={32} />
              <p className="text-[#0d0d0d] text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="#2563eb" style={{ color: "#2563eb" }} />
                ))}
              </div>
              <p className="font-['Sora'] font-bold text-sm text-[#0d0d0d]">{t.name}</p>
              <p className="text-xs text-[#666666]">{t.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
