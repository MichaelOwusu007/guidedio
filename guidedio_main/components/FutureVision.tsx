"use client";

import { motion } from "framer-motion";
import { GraduationCap, Brain, Heart, Bot, Globe, Sparkles } from "lucide-react";

const visionBlocks = [
  {
    icon: GraduationCap,
    title: "Expanded Educational Coverage",
    items: ["JHS to Career lifecycle profile", "Comprehensive academic tracking", "Multi-institution support"],
  },
  {
    icon: Brain,
    title: "AI Academic Intelligence",
    items: ["Smart recommendations", "Success probability prediction", "Skill gap analysis", "Trend forecasting"],
  },
  {
    icon: Heart,
    title: "Mental Health & Wellness",
    items: ["AI stress detection", "24/7 wellness chatbot", "Mood tracking", "Crisis detection"],
  },
  {
    icon: Bot,
    title: "Advanced AI Features",
    items: ["Voice assistant (local languages)", "Document analysis", "Career matching", "Virtual campus tours"],
  },
  {
    icon: Globe,
    title: "Community & Mentorship",
    items: ["Alumni network", "Virtual career fairs", "Mentorship marketplace", "Peer support groups"],
  },
  {
    icon: Sparkles,
    title: "And So Much More",
    items: ["Continuous improvements", "New features monthly", "Beta access for waitlist", "Student-first approach"],
  },
];

const FutureVision = () => {
  return (
    <section id="vision" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#0d0d0d] via-[#141414] to-[#1a1e3d]" />
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#e6a31a] via-33% via-[#22c55e]  to-[#2563eb] bg-size-[200%_200%] animate-[kente-shift_6s_ease-in-out_infinite]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-['Sora'] text-3xl md:text-4xl font-bold mb-4 text-white">
            This Is Bigger Than Just Academic Guidance
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our vision extends beyond academic guidance we're building the complete student success ecosystem for Africa.The Student Panacea.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {visionBlocks.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl"
            >
              <v.icon className="w-8 h-8 text-[#6baa2b] mb-4" />
              <h3 className="font-['Sora'] font-bold text-lg mb-3 text-white">{v.title}</h3>
              <ul className="space-y-2">
                {v.items.map((item) => (
                  <li key={item} className="text-white/50 text-sm flex items-start gap-2">
                    <span className="text-[#6baa2b] mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
