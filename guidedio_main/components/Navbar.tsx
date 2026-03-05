"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image"

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Features", href: "#features" },
  { label: "Vision", href: "#vision" },
  { label: "Timeline", href: "#timeline" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg rounded-none border-x-0 border-t-0 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
           <a href="/" className="text-xl font-display font-bold">
      <Image
                  src="/logo.png"
                  alt="Our Logo"
                  width={138}
                  height={52}
                  className="h-auto w-16 md:w-20 "
                />
        </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-[#666666] hover:text-[#8ef12a] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="relative overflow-hidden bg-[rgb(13,32,134)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_50px_rgba(106,170,43,0.5),0_0_80px_rgba(106,170,43,0.3)] hover:translate-y-0.5"
            >
              Join Waitlist
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#0d0d0d] p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#fafafa]/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-['Sora'] font-semibold text-[#0d0d0d] hover:text-[#8cf028] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={() => setMobileOpen(false)}
                className="relative overflow-hidden bg-[rgb(13,32,134)] text-white px-6 py-3 rounded-lg text-center font-semibold mt-4 transition-all duration-300 hover:shadow-[0_0_50px_rgba(106,170,43,0.5),0_0_80px_rgba(106,170,43,0.3)] hover:translate-y-0.5"
              >
                Join Waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
