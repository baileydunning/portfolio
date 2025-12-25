import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { ArrowLeft, ExternalLink, Github, Code } from 'lucide-react';

export default function SoftwarePage() {
  const software = projects.filter((p) => p.type === 'software');

  return (
    <main className="min-h-screen pt-14">
      <div className="container-main py-12 space-y-10">
        <div className="space-y-4">
          <Link to="/" className="inline-flex items-center gap-2 text-small link-subtle">
            <ArrowLeft size={14} />
            Back
          </Link>
          <div className="flex items-center gap-3">
            <Code size={20} className="text-accent" />
            <h1 className="text-h1 text-foreground">Software</h1>
          </div>
        </div>

        <div className="space-y-6">
          {software.map((project) => (
            <article key={project.id} className="card-hover space-y-4">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h2 className="text-h2 text-foreground">{project.title}</h2>
                <div className="flex gap-4">
                  {project.links?.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-small link-subtle"
                    >
                      {link.label === 'live' ? <ExternalLink size={14} /> : <Github size={14} />}
                      {link.label === 'live' ? 'Live' : 'Code'}
                    </a>
                  ))}
                </div>
              </div>

              <p className="text-body text-muted-foreground">{project.description}</p>

              {project.tech && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              )}

              {project.links?.find((l) => l.label === 'live') && (
                <div className="pt-2">
                  <div className={`bg-secondary rounded-lg border border-border overflow-hidden ${
                    project.title === 'Yahtzee' 
                      ? 'aspect-[3/4] max-w-md mx-auto'
                      : 'aspect-[4/3]'
                  }`}>
                    <iframe
                      src={project.links.find((l) => l.label === 'live')?.url}
                      className="w-full h-full"
                      title={`${project.title} preview`}
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
