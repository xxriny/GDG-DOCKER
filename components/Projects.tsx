"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 }
};

export default function Projects() {
  return (
    <motion.section {...fadeUp} className="rounded-3xl border border-slate-200 bg-white/80 p-7 sm:p-10">
      <h2 className="text-2xl font-display text-ink">Projects</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-glow"
          >
            <div>
              <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-linen px-3 py-1 text-xs font-semibold text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
