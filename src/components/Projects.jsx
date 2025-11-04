import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Vision QA with RAG',
    desc: 'Multimodal RAG system that answers questions about product images using embeddings and vector search.',
    tags: ['Python', 'OpenAI', 'FAISS', 'FastAPI'],
    link: 'https://example.com',
    repo: 'https://github.com'
  },
  {
    title: 'Realtime Analytics Dashboard',
    desc: 'Stream processing pipeline with interactive dashboard for KPIs and anomaly detection.',
    tags: ['Kafka', 'ClickHouse', 'React', 'Tailwind'],
    link: 'https://example.com',
    repo: 'https://github.com'
  },
  {
    title: 'LLM-Powered Support Bot',
    desc: 'Retrieval‑augmented support agent with tools, memory, and feedback loop for continuous improvement.',
    tags: ['LangChain', 'PostgreSQL', 'Docker', 'FastAPI'],
    link: 'https://example.com',
    repo: 'https://github.com'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold sm:text-4xl">Projects</h2>
        <p className="mt-3 text-muted-foreground">Selected work across AI/ML and full‑stack engineering.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="group flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex-1">
              <h3 className="text-lg font-semibold group-hover:text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border bg-background px-2 py-0.5 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between border-t pt-4">
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                <Github size={16} /> Code
              </a>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary"
              >
                Live <ExternalLink size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
