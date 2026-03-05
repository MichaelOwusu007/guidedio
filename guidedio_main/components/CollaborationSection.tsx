"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "WAEC",
    fullName: "West African Examinations Council",
    desc: "Official examination body — integrating results and aggregate data.",
    color: "bg-blue-600",
    initials: "WAEC",
  },
  {
    name: "University of Ghana",
    fullName: "University of Ghana, Legon",
    desc: "Ghana's premier university — program data and admission partnerships.",
    color: "bg-blue-800",
    initials: "UG",
  },
  {
    name: "KNUST",
    fullName: "Kwame Nkrumah University of Science & Technology",
    desc: "Leading STEM university — cut-off points and career pathway data.",
    color: "bg-yellow-600",
    initials: "KNUST",
  },
  {
    name: "GES",
    fullName: "Ghana Education Service",
    desc: "National education body — curriculum alignment and school data.",
    color: "bg-green-700",
    initials: "GES",
  },
  {
    name: "NaCCA",
    fullName: "National Council for Curriculum & Assessment",
    desc: "Curriculum standards — ensuring alignment with national education goals.",
    color: "bg-emerald-600",
    initials: "NaCCA",
  },
];

const CollaborationSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#e6a31a]  via-33% via-[#22c55e]  to-[#2563eb] bg-size-[200%_200%] animate-[kente-shift_6s_ease-in-out_infinite]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-['Sora'] text-3xl md:text-4xl font-bold mb-4 text-[#0d0d0d]">
            Future <span className="bg-clip-text text-transparent bg-linear-to-r from-[#6baa2b] via-[#2563eb] to-[#141414]">Collaborations</span>
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            Building partnerships with key institutions to deliver the most comprehensive academic guidance platform.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg rounded-2xl p-6 text-center group"
            >
              <div
                className={`w-16 h-16 ${p.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <span className="text-sm font-bold text-white font-['Sora']">{p.initials}</span>
              </div>
              <h3 className="font-['Sora'] font-bold text-[#0d0d0d] mb-1">{p.name}</h3>
              <p className="text-xs text-[#666666] mb-3">{p.fullName}</p>
              <p className="text-sm text-[#666666] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
