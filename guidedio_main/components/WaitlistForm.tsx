"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti"; 
import { Send, Share2, CheckCircle2, Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";

const levels = ["JHS Student", "SHS Student", "University Student", "Parent"];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/guidedio/",
    icon: Linkedin,
    color: "bg-[#0077b5]",
  },
  {
    label: "Twitter",
    href: "https://x.com/guidediohq?s=11",
    icon: Twitter,
    color: "bg-black",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/guidedio",
    icon: Instagram,
    color: "bg-[#E4405F]",
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029VbCBpnxAO7R85PBHEP0b",
    icon: MessageCircle,
    color: "bg-[#25D366]",
  },
];

const WaitlistForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", level: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "Failed to submit");
      }

      setLoading(false);
      setSubmitted(true);

      const duration = 3000;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#84cc16", "#3b82f6", "#000000", "#a3e635"],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#84cc16", "#3b82f6", "#000000", "#a3e635"],
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    } catch (err) {
      setLoading(false);
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    }
  };

  return (
    <section id="waitlist" className="py-20 md:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#e6a31a]   via-[#22c55e] via-66% to-[#2563eb] bg-size-[200%_200%] animate-[kente-shift_6s_ease-in-out_infinite]" />

      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-['Sora'] text-3xl md:text-4xl font-bold mb-4 text-[#0d0d0d]">
            Reserve Your <span className="bg-clip-text text-transparent bg-black">Early Access</span> Spot
          </h2>
          <p className="text-[#666666] text-lg">
            Limited spots available. Be among the first to experience the future of academic guidance.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg rounded-3xl p-6 md:p-8 space-y-5"
            >
              <div>
                <label className="text-sm font-semibold text-[#0d0d0d] mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Micahel Owusu"
                  className="w-full px-4 py-3 rounded-xl bg-[#fafafa] border border-[#e0e0e0] focus:border-[#6baa2b] focus:ring-2 focus:ring-[#6baa2b]/20 outline-none transition-all text-[#0d0d0d]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#0d0d0d] mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="kwame@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#fafafa] border border-[#e0e0e0] focus:border-[#6baa2b] focus:ring-2 focus:ring-[#6baa2b]/20 outline-none transition-all text-[#0d0d0d]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#0d0d0d] mb-1.5 block">Phone Number</label>
                <input
                  type="tel"
                  required
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+233 24 123 4567"
                  className="w-full px-4 py-3 rounded-xl bg-[#fafafa] border border-[#e0e0e0] focus:border-[#6baa2b] focus:ring-2 focus:ring-[#6baa2b]/20 outline-none transition-all text-[#0d0d0d]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#0d0d0d] mb-1.5 block">Current Level</label>
                <select
                  required
                  value={form.level}
                  onChange={(e) => setForm({ ...form, level: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#fafafa] border border-[#e0e0e0] focus:border-[#6baa2b] focus:ring-2 focus:ring-[#6baa2b]/20 outline-none transition-all text-[#0d0d0d]"
                >
                  <option value="">Select your level</option>
                  {levels.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative overflow-hidden bg-[#0d2086] text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 disabled:opacity-60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(106,170,43,0.4)] hover:translate-y-0.5"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    Reserve My Spot
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg p-8 md:p-12 rounded-3xl text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <CheckCircle2 className="mx-auto text-[#2563eb] mb-4" size={64} />
              </motion.div>
              <h3 className="font-['Sora'] text-2xl md:text-3xl font-bold mb-3 text-[#0d0d0d]">
                Hurray! You're on the Guidedio Early Access List!
              </h3>
              <p className="text-[#666666] text-lg mb-6">
                We'll notify you before our June launch. Get ready for something amazing!
              </p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-sm text-[#666666]">Share with friends:</span>
                <button
                  onClick={() => navigator.share?.({ title: "Guidedio", text: "Join the Guidedio waitlist!", url: window.location.href }).catch(() => {})}
                  className="p-2 rounded-full bg-[#6baa2b]/10 text-[#6baa2b] hover:bg-[#6baa2b]/20 transition-colors"
                  aria-label="Share"
                >
                  <Share2 size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <p className="text-sm font-semibold text-[#666666] mb-4 text-center">Join our community</p>
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-white px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity`}
              >
                <social.icon size={18} />
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[#666666]"
        >
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#6baa2b]" /> Free to join
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#6baa2b]" /> everyone's welcome
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#6baa2b]" /> Launch day perks
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistForm;
