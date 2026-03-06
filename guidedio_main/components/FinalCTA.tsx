"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[#6baa2b]/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-[#2563eb]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Sora'] text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight text-[#0d0d0d]">
            Be Among the First to Experience the{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#6baa2b] via-[#2563eb] to-[#141414]">Future of Student Success</span>
          </h2>
          <p className="text-[#666666] text-lg mb-8 max-w-xl mx-auto">
            Don't miss out on early access. Join 100+ students already waiting for Guidedio.
          </p>
          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-[#0d2086] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl text-lg sm:text-xl font-bold inline-flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_30px_rgba(106,170,43,0.4)] hover:translate-y-0.5 animate-[pulse-glow_2s_ease-in-out_infinite]"
          >
            Join the Guidedio Waitlist
            <Sparkles size={22} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
