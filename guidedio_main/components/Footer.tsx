"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Shield } from "lucide-react";
//import Image from "next/image";

const Footer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const launchDate = new Date("2026-06-01T00:00:00");
    const update = () => {
      const now = new Date();
      const diff = launchDate.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const timerBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <footer className="relative pt-16 pb-8 bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-4">
            Launching in
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            {timerBlocks.map((t) => (
              <div key={t.label} className="bg-[#0d2086] backdrop-blur-lg rounded-xl px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 min-w-15 sm:min-w-17.5">
                <p className="font-['Sora'] text-xl sm:text-2xl md:text-4xl font-bold text-white">
                  {String(t.value).padStart(2, "0")}
                </p>
                <p className="text-white/80 text-[10px] sm:text-xs">{t.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="border-t border-white/10 pt-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-['Sora'] text-xl font-bold text-white mb-3">
                Guide<span style={{ color: "#6baa2b" }}>dio</span>
              </h4>
              <p className="text-white/50 text-sm leading-relaxed">
                Your Academic & Life Success Companion. AI-powered guidance for every Ghanaian student.
              </p>
              
            {/* <p className="text-xs font-semibold uppercase text-muted-foreground my-2">
              Coming Soon On...
            </p>

            <div className="flex md:justify-start gap-3">
              <Image
                src="/apple.store.png"
                alt="Download on App Store"
                width={140}
                height={42}
                className="h-10 w-auto"
              />
              <Image
                src="/google-play.png"
                alt="Get it on Google Play"
                width={140}
                height={42}
                className="h-auto w-24"
              />
            </div> */}
            </div>
            <div>
              <h5 className="font-['Sora'] font-semibold text-white mb-3">Quick Links</h5>
              <div className="space-y-2">
                <a href="#problem" className="block text-sm text-white/50 hover:text-[#6baa2b] transition-colors">About</a>
                <a href="#features" className="block text-sm text-white/50 hover:text-[#6baa2b] transition-colors">Features</a>
                <a href="#waitlist" className="block text-sm text-white/50 hover:text-[#6baa2b] transition-colors">Join Waitlist</a>
              </div>
            </div>
            <div>
              <h5 className="font-['Sora'] font-semibold text-white mb-3">Contact</h5>
              <div className="space-y-2">
                <p className="text-sm text-white/50 flex items-center gap-2">
                  <Mail size={14} /> hello.guidedio@gmail.com
                </p>
                <p className="text-sm text-white/50 flex items-center gap-2">
                  <MapPin size={14} /> Accra, Ghana
                </p>
                <p className="text-sm text-white/50 flex items-center gap-2">
                  <Shield size={14} /> Privacy Policy
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-white/30 text-sm">
              © 2026 Guidedio. All rights reserved. Made with ❤️ in Ghana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
