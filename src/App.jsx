import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="inline-flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Rocket size={18} />
            </span>
            <span>AI/ML + Full‑Stack</span>
          </div>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#home" className="text-muted-foreground hover:text-foreground">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground">Skills</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground">Projects</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Built with care — available for collaborations.</p>
          <div className="text-sm text-muted-foreground">Open to roles: AI/ML, MLE, Full‑Stack, Founding Engineer</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
