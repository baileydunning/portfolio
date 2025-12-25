import { Github, Linkedin, MapPin } from 'lucide-react';

export function AboutSection() {
  const stack = ['TypeScript', 'React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Node.js', 'REST APIs', 'GraphQL', 'Event-driven architecture', 'AWS'];
  const tools = ['Git', 'GitHub', 'GitHub Actions', 'Terraform', 'AWS', 'Docker', 'Datadog', 'Figma', 'InDesign', 'Photoshop', 'AfterEffects', 'Final Cut Pro X', 'Resolume Arena'];

  return (
    <section id="about" className="section-gap">
      <div className="container-main space-y-10">
        <h2 className="text-h2 text-foreground prompt">about</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-body text-muted-foreground">
            <p>
              I'm a curious and adaptable problem-solver who thrives at the intersection of technology, education, and the outdoors. With a background in software engineering, instructional design, and community engagement, I am driven by a passion for adventure, lifelong learning, and collaboration, using my skills to build meaningful technology, create impactful educational experiences, and foster strong communities.
            </p>
            <div className="flex items-center gap-2 text-small pt-2">
              <MapPin size={14} className="text-accent" />
              <span>Arvada, CO</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-small text-muted-foreground">Stack</p>
              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-small text-muted-foreground">Tools</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
            <a
              href="https://github.com/baileydunning"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-body link-subtle"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/baileydunning"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-body link-subtle"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
      </div>
    </section>
  );
}
