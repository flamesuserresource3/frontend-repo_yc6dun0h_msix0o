import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Mail, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlays that do NOT block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl rounded-2xl bg-background/40 p-6 backdrop-blur-md">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Rocket size={14} />
            Building intelligent products
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            AI/ML Engineer & Full‑Stack Developer
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            I design and ship data‑driven applications end‑to‑end — from training models to scalable cloud APIs and delightful web UIs.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-accent"
            >
              <Mail size={16} /> Contact
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border hover:bg-accent"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border hover:bg-accent"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
