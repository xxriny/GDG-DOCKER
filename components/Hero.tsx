"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail } from "lucide-react";
import { profile, social } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.4 }
};

export default function Hero() {
  const emailHref = social.email.includes("@") ? `mailto:${social.email}` : social.email;

  return (
    <motion.section {...fadeUp} className="relative overflow-hidden rounded-3xl p-7 sm:p-10 glass">
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blush/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 left-0 h-36 w-36 rounded-full bg-mist/70 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Portfolio
          </p>
          <h1 className="mt-3 text-3xl font-display text-ink sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">{profile.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1">
            {profile.role}
          </span>
          {profile.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white/80 px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            href={emailHref}
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-ink transition hover:border-slate-400"
            href={social.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
