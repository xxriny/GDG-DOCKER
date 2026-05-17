"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 }
};

export default function About() {
  return (
    <motion.section {...fadeUp} className="rounded-3xl border border-slate-200 bg-white/80 p-7 sm:p-10">
      <h2 className="text-2xl font-display text-ink">About</h2>
      <p className="mt-4 text-base text-slate-600 sm:text-lg">{profile.tagline}</p>
      <p className="mt-3 text-base text-slate-600 sm:text-lg">{profile.role}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {profile.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200 bg-linen px-3 py-1 text-sm font-medium text-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
