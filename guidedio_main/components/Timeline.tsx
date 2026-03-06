"use client";

import { motion } from "framer-motion";
import { Rocket, Brain, Heart } from "lucide-react";

const phases = [
  {
    icon: Rocket,
    phase: "Phase 1",
    title: "June Launch",
    desc: "Academic Guidance Tools— Program recommendations,Results checking, Uni/College forms,Aggregate calculator, cut-off points,technical skills and student dashboard.",
    status: "current",
  },
  {
    icon: Brain,
    phase: "Phase 2",
    title: "AI & Personalization",
    desc: "Smart AI recommendations, personalized learning paths,solved past questions, advanced career matching and learning resources(JHS,SHS,UNI).",
    status: "upcoming",
  },
  {
    icon: Heart,
    phase: "Phase 3",
    title: "Mental Health + Virtual Campus",
    desc: "Wellness chatbot, stress detection, virtual campus tours, mentorship marketplace, and community features.",
    status: "upcoming",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 md:py-28 bg-[#ededed]/50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-['Sora'] text-3xl md:text-4xl font-bold mb-4 text-[#0d0d0d]">
            Our <span className="bg-clip-text text-transparent bg-black">Roadmap</span>
          </h2>
          <p className="text-[#666666] text-lg">From launch to a complete student success ecosystem.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#e0e0e0] md:-translate-x-0.5" />

          {phases.map((p, i) => (
            <motion.div
              key={p.phase}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-start gap-4 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } md:gap-8`}
            >
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    p.status === "current"
                      ? "bg-lime-400 shadow-[0_0_20px_rgba(106,170,43,0.3)] animate-[pulse-glow_2s_ease-in-out_infinite]"
                      : "bg-[#ededed] border-2 border-[#e0e0e0]"
                  }`}
                >
                  <p.icon
                    size={20}
                    className={p.status === "current" ? "text-black" : "text-[#666666]"}
                  />
                </div>
              </div>

              <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                <span className={`text-xs font-bold uppercase tracking-wider ${p.status === "current" ? "text-[#6baa2b]" : "text-[#666666]"}`}>
                  {p.phase}
                </span>
                <h3 className="font-['Sora'] font-bold text-xl mt-1 mb-2 text-[#0d0d0d]">{p.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
