import React from 'react';
import { Code, Database, GitBranch, Cloud, Cpu } from 'lucide-react';

const categories = [
  {
    name: 'AI/ML',
    icon: Cpu,
    skills: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Transformers', 'RAG', 'LangChain']
  },
  {
    name: 'Back-end',
    icon: Database,
    skills: ['FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'gRPC', 'Celery']
  },
  {
    name: 'Front-end',
    icon: Code,
    skills: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Vercel', 'Framer Motion']
  },
  {
    name: 'DevOps',
    icon: Cloud,
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Observability']
  },
  {
    name: 'Collaboration',
    icon: GitBranch,
    skills: ['Git', 'PR Reviews', 'Agile', 'Design Systems', 'A/B Testing']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-muted/30 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Skills</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Practical, production‑ready skills focused on delivering business impact.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ name, icon: Icon, skills }) => (
            <div key={name} className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-3 inline-flex items-center gap-2 text-primary">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-semibold">{name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="rounded-full border bg-background px-2.5 py-1 text-xs text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
