import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { ArrowLeft, ArrowRight, Camera } from 'lucide-react';

export default function PhotographyPage() {
  const photo = projects.filter((p) => p.type === 'photo');

  return (
    <main className="min-h-screen pt-14">
      <div className="container-main py-12 space-y-10">
        <div className="space-y-4">
          <Link to="/" className="inline-flex items-center gap-2 text-small link-subtle">
            <ArrowLeft size={14} />
            Back
          </Link>
          <div className="flex items-center gap-3">
            <Camera size={20} className="text-accent" />
            <h1 className="text-h1 text-foreground">Photography</h1>
          </div>
        </div>

        <div className="space-y-8">
          {photo.map((gallery) => (
            <Link
              key={gallery.id}
              to={`/photography/${gallery.id}`}
              className="block card-hover group"
            >
              <div className="grid grid-cols-4 gap-2 mb-4">
                {gallery.images?.slice(0, 4).map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-md">
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
                <div>
                  <h2 className="text-h3 text-foreground">{gallery.title}</h2>
                  <p className="text-small text-muted-foreground mt-1">
                    {gallery.images?.length} photos
                  </p>
                </div>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
