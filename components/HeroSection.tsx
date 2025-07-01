// components/HeroSection.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-[#00B487] mb-4"
      >
        You bring the spark — I’ll build the fire.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl max-w-2xl text-white/80 mb-6"
      >
        I’m a Creative Developer — part software engineer, part design obsessive —
        crafting websites that feel as good as they function.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link href="#contact">
          <p className="bg-[#00B487] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#00c990] transition">
            Start Your Project
          </p>
        </Link>
      </motion.div>
    </section>
  );
}