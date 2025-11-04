import React from 'react';
import { Brain, Cpu, Globe, Server } from 'lucide-react';

const items = [
  {
    icon: Brain,
    title: 'Machine Learning',
    text: 'End-to-end ML: data pipelines, feature engineering, model training, evaluation, and deployment.'
  },
  {
    icon: Cpu,
    title: 'AI Systems',
    text: 'LLMs, embeddings, retrieval-augmented generation, vector search, and prompt engineering.'
  },
  {
    icon: Server,
    title: 'Back-end APIs',
    text: 'Fast, secure APIs with Python & Node, background jobs, observability, and cloud-native practices.'
  },
  {
    icon: Globe,
    title: 'Front-end UX',
    text: 'Accessible, responsive web apps with modern React patterns and smooth interactions.'
  }
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold sm:text-4xl">About</h2>
        <p className="mt-3 text-muted-foreground">
          I craft intelligent products that bridge research and real users. My sweet spot is where
          data science meets product engineering — shipping measurable outcomes, not just models.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon size={20} />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
