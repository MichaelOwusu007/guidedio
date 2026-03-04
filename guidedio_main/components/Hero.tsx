"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles, BookOpen, Brain, TrendingUp, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#6baa2b]/10 blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#2563eb]/10 blur-3xl animate-[float_6s_ease-in-out_2s_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-150 md:h-150 rounded-full bg-[#141414]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#6baa2b]/10 text-[#0d0d0d] px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles size={16} style={{ color: "#6baa2b" }} />
              Launching June 2026
            </motion.div>

            <h1 className="font-['Sora'] text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-6 text-[#0d0d0d]">
              Your Academic Future,{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#6baa2b] via-[#2563eb] to-[#141414]">
                Guided Right.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#666666] mb-8 max-w-xl mx-auto lg:mx-0">
              AI-powered academic guidance that helps Ghanaian students choose the right programs,
              calculate aggregates, and plan their future with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <motion.a
                href="#waitlist"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-[#6baa2b] text-black px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl text-base font-bold inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(106,170,43,0.4)] hover:translate-y-0.5"
              >
                Join the Waitlist
                <Sparkles size={18} />
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#141414]/20 text-[#0d0d0d] px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl text-base font-semibold hover:bg-[#141414]/5 transition-colors inline-flex items-center justify-center"
              >
                See How It Works
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="animate-[float_6s_ease-in-out_infinite]">
              <div className="bg-white/70 backdrop-blur-xl border border-[#e0e0e0] shadow-lg rounded-3xl p-6 max-w-md mx-auto ">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#dc2626]" />
                  <div className="w-3 h-3 rounded-full bg-[#6baa2b]" />
                  <div className="w-3 h-3 rounded-full bg-[#2563eb]" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-[#6baa2b]/10 rounded-xl">
                    <BookOpen style={{ color: "#6baa2b" }} size={20} />
                    <div>
                      <p className="text-sm font-semibold text-[#0d0d0d]">Program Match</p>
                      <p className="text-xs text-[#666666]">Computer Science — 95% fit</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#2563eb]/10 rounded-xl">
                    <Brain style={{ color: "#2563eb" }} size={20} />
                    <div>
                      <p className="text-sm font-semibold text-[#0d0d0d]">Aggregate Score</p>
                      <p className="text-xs text-[#666666]">Calculated: 8 — Excellent</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-xl bg-[#141414]/10 p-3 text-center">
                      <p className="font-['Sora'] text-2xl font-bold text-[#0d0d0d]">3</p>
                      <p className="text-[10px] text-[#666666] leading-tight">Universities Matched</p>
                    </div>
                    <div className="rounded-xl bg-[#6baa2b]/10 p-3 text-center">
                      <p className="font-['Sora'] text-2xl font-bold text-[#6baa2b]">A1</p>
                      <p className="text-[10px] text-[#666666] leading-tight">Top Grade</p>
                    </div>
                    <div className="rounded-xl bg-[#2563eb]/10 p-3 text-center">
                      <p className="font-['Sora'] text-2xl font-bold text-[#2563eb]">92%</p>
                      <p className="text-[10px] text-[#666666] leading-tight">Career Fit</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#141414]/5 rounded-xl">
                    <TrendingUp style={{ color: "#6baa2b" }} size={20} />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#0d0d0d]">Admission Chances</p>
                      <div className="w-full bg-[#ededed] rounded-full h-2 mt-1">
                        <div className="bg-[#6baa2b] h-2 rounded-full" style={{ width: "85%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#6baa2b]/5 rounded-xl">
                    <Users style={{ color: "#2563eb" }} size={18} />
                    <p className="text-xs text-[#666666]">1,284 students already exploring programs</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg rounded-full px-4 py-2"
            >
              <span className="text-sm font-semibold text-[#0d0d0d] flex items-center gap-1">
                <Award size={14} style={{ color: "#6baa2b" }} /> AI Powered
              </span>
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg rounded-full px-4 py-2"
            >
              <span className="text-sm font-semibold text-[#0d0d0d]">Made for Ghana</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#problem" className="flex flex-col items-center gap-2 text-[#666666] animate-[scroll-indicator_2s_ease-in-out_infinite]">
          <span className="text-xs font-medium">Scroll to explore</span>
          <ChevronDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
