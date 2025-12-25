import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { ArrowLeft, Video } from 'lucide-react';

export default function VideoPage() {
  const video = projects.filter((p) => p.type === 'video');

  return (
    <main className="min-h-screen pt-14">
      <div className="container-main py-12 space-y-10">
        <div className="space-y-4">
          <Link to="/" className="inline-flex items-center gap-2 text-small link-subtle">
            <ArrowLeft size={14} />
            Back
          </Link>
          <div className="flex items-center gap-3">
            <Video size={20} className="text-accent" />
            <h1 className="text-h1 text-foreground">Video</h1>
          </div>
        </div>

        <div className="space-y-10">
          {video.map((project) => (
            <article key={project.id} className="space-y-4">
              <div className="aspect-video bg-secondary rounded-lg border border-border overflow-hidden">
                {project.embedUrl && (
                  <iframe
                    src={`${project.embedUrl}${project.embedUrl.includes('?') ? '&' : '?'}autoplay=1&mute=1`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={project.title}
                  />
                )}
              </div>
              <div>
                <h2 className="text-h2 text-foreground">{project.title}</h2>
                <p className="text-body text-muted-foreground mt-1">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
