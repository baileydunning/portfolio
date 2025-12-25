import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { projects } from '@/data/projects';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryPage() {
  const { id } = useParams();
  const gallery = projects.find((p) => p.type === 'photo' && p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!gallery) {
    return <Navigate to="/photography" replace />;
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (lightboxIndex === null || !gallery.images) return;
    const total = gallery.images.length;
    if (direction === 'prev') {
      setLightboxIndex((lightboxIndex - 1 + total) % total);
    } else {
      setLightboxIndex((lightboxIndex + 1) % total);
    }
  };

  return (
    <main className="min-h-screen pt-14">
      <div className="container-main py-12 space-y-8">
        <div className="space-y-4">
          <Link to="/photography" className="inline-flex items-center gap-2 text-small link-subtle">
            <ArrowLeft size={14} />
            Back
          </Link>
          <h1 className="text-h1 text-foreground">{gallery.title}</h1>
          {gallery.description && (
            <p className="text-body text-muted-foreground">{gallery.description}</p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.images?.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="aspect-[4/5] overflow-hidden rounded-lg border border-border hover:border-accent/50 transition-colors"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && gallery.images && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 p-2 text-foreground hover:text-accent transition-colors"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-4 p-2 text-foreground hover:text-accent transition-colors"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-4 p-2 text-foreground hover:text-accent transition-colors"
          >
            <ChevronRight size={28} />
          </button>

          <img
            src={gallery.images[lightboxIndex]}
            alt=""
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 text-small text-muted-foreground">
            {lightboxIndex + 1} / {gallery.images.length}
          </div>
        </div>
      )}
    </main>
  );
}
