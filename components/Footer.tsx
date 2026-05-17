"use client";

import { motion } from "framer-motion";
import { Github, Link, Mail } from "lucide-react";
import { profile, social } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 }
};

const links = [
  {
    label: "Email",
    icon: Mail,
    href: social.email.includes("@") ? `mailto:${social.email}` : social.email
  },
  { label: "GitHub", icon: Github, href: social.github },
  { label: "Blog / LinkedIn", icon: Link, href: social.blog }
];

export default function Footer() {
  return (
    <motion.section {...fadeUp} className="rounded-3xl border border-slate-200 bg-white/80 p-7 sm:p-10">
      <h2 className="text-2xl font-display text-ink">Get in touch</h2>
      <p className="mt-3 text-base text-slate-600">
        {profile.name} · Let&apos;s build something memorable together.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:border-slate-400"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-ember" />
                {link.label}
              </span>
              <span className="text-slate-400">↗</span>
            </a>
          );
        })}
      </div>
      <p className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} {profile.name}</p>
    </motion.section>
  );
}
