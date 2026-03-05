"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Users, TrendingDown, MapPin, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Relying on Friends & Social Media",
    desc: "SHS graduates make life-changing decisions based on unverified advice from peers and social media.",
  },
  {
    icon: HelpCircle,
    title: "Poor Aggregate Understanding",
    desc: "Most students don't understand how WASSCE aggregates work, leading to misguided program choices.",
  },
  {
    icon: AlertTriangle,
    title: "Failed Applications",
    desc: "Thousands of applications are rejected each year due to wrong program choices and cut-off mismatches.",
  },
  {
    icon: TrendingDown,
    title: "University Dropouts",
    desc: "Students who end up in misaligned programs often drop out, wasting time, money, and potential.",
  },
  {
    icon: MapPin,
    title: "Rural Students Left Behind",
    desc: "Students in rural areas lack access to proper academic counselors and career guidance.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 md:py-28 bg-[#ededed]/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-['Sora'] text-3xl md:text-4xl font-bold mb-4 text-[#0d0d0d]">
            The Problem Students <span className="bg-clip-text text-transparent bg-black">Face Today</span>
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            Ghanaian students navigate one of life's biggest decisions to their future without the right tools.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow  group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0d2086] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <p.icon style={{ color: "#ffffff" }} size={24} />
              </div>
              <h3 className="font-['Sora'] font-bold text-lg mb-2  text-[#0d0d0d]">{p.title}</h3>
              <p className="text-[#666666]  text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
