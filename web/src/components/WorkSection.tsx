import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { ArrowRight, ExternalLink, Github, Code, Video, Camera } from 'lucide-react';

export function WorkSection() {
  const software = projects.filter((p) => p.type === 'software').slice(0, 4);
  const video = projects.filter((p) => p.type === 'video' && p.featured).slice(0, 2);
  const photo = projects.filter((p) => p.type === 'photo').slice(0, 6);

  return (
    <section id="work" className="section-gap">
      <div className="container-main space-y-14">
        <h2 className="text-h2 text-foreground prompt">work</h2>

        {/* Software */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-small text-muted-foreground">
              <Code size={16} className="text-accent" />
              <span>Software</span>
            </div>
            <Link to="/software" className="inline-flex items-center gap-1.5 text-small link-accent">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {software.map((project) => (
              <div key={project.id} className="card-hover space-y-3">
                <h3 className="text-h3 text-foreground">{project.title}</h3>
                <p className="text-small text-muted-foreground">{project.description}</p>
                {project.tech && (
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                )}
                <div className="flex gap-4 pt-1">
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
            ))}
          </div>
        </div>

        {/* Video */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-small text-muted-foreground">
              <Video size={16} className="text-accent" />
              <span>Video</span>
            </div>
            <Link to="/video" className="inline-flex items-center gap-1.5 text-small link-accent">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {video.map((project) => (
              <div key={project.id} className="card-hover">
                <div className="aspect-video bg-secondary rounded-md mb-4 overflow-hidden">
                  {project.embedUrl && (
                    <iframe
                      src={`${project.embedUrl}?autoplay=1&mute=1&loop=1&playlist=${project.embedUrl.split('/').pop()}`}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={project.title}
                    />
                  )}
                </div>
                <h3 className="text-h3 text-foreground">{project.title}</h3>
                <p className="text-small text-muted-foreground mt-1">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-small text-muted-foreground">
              <Camera size={16} className="text-accent" />
              <span>Photography</span>
            </div>
            <Link to="/photography" className="inline-flex items-center gap-1.5 text-small link-accent">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {photo.map((gallery) => (
              <Link
                key={gallery.id}
                to={`/photography/${gallery.id}`}
                className="card-hover group"
              >
                <div className="grid grid-cols-4 gap-1.5 mb-3">
                  {gallery.images?.slice(0, 4).map((src, i) => (
                    <div key={i} className="aspect-square overflow-hidden rounded">
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-h3 text-foreground">{gallery.title}</h3>
                  <ArrowRight size={14} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
