"use client";

import { motion } from "framer-motion";
import {
  GraduationCap, Calculator, FileCheck, School, FileText,
  Compass, CalendarCheck, BookOpen, LayoutDashboard,
} from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Program Recommendation", desc: "AI-matched programs based on your WASSCE grades", color: "bg-[#52f114]/10 text-[#6baa2b]" },
  { icon: Calculator, title: "Aggregate Calculator", desc: "Accurate WAEC standard aggregate computation", color: "bg-[#2563eb]/10 text-[#2563eb]" },
  { icon: FileCheck, title: "WASSCE Results Checker", desc: "Quick and reliable access to your results", color: "bg-[#141414]/10 text-[#141414]" },
  { icon: School, title: "University Cut-Off Points", desc: "Up-to-date cut-off data for all universities", color: "bg-[#52f114]/10 text-[#6baa2b]" },
  { icon: FileText, title: "Admission Form Access", desc: "Direct links and guidance for university applications", color: "bg-[#2563eb]/10 text-[#2563eb]" },
  { icon: Compass, title: "Career Path Guidance", desc: "Discover careers aligned with your strengths", color: "bg-[#141414]/10 text-[#141414]" },
  { icon: CalendarCheck, title: "Counseling Booking", desc: "Book sessions with professional academic counselors", color: "bg-[#52f114]/10 text-[#6baa2b]" },
  { icon: BookOpen, title: "Learning Modules", desc: "Interactive educational content and resources", color: "bg-[#2563eb]/10 text-[#2563eb]" },
  { icon: LayoutDashboard, title: "Student Dashboard", desc: "Personalized hub for your academic journey", color: "bg-[#141414]/10 text-[#141414]" },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-['Sora'] text-3xl md:text-4xl font-bold mb-4 text-[#0d0d0d]">
            What Guidedio <span className="bg-clip-text text-transparent bg-black">Already Solves</span>
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            Powerful tools built specifically for Ghanaian students, ready at launch.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg rounded-2xl p-6 cursor-default group"
            >
              <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <f.icon size={24} />
              </div>
              <h3 className="font-['Sora'] font-bold text-lg mb-2 text-[#0d0d0d]">{f.title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
