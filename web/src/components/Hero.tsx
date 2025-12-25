import { Code, Video, Camera } from 'lucide-react';

const imageSlices = [
  { src: 'https://res.cloudinary.com/dh5gaoh79/image/upload/v1766353382/IMG_7335_rmmbvg.jpg', rotate: -3, y: 8 },
  { src: 'https://res.cloudinary.com/dh5gaoh79/image/upload/v1766350039/GPTempDownload-1_aphpef.jpg', rotate: 2, y: -12 },
  { src: 'https://res.cloudinary.com/dh5gaoh79/image/upload/v1766349876/img_5785_ykktru.jpg', rotate: -1, y: 16 },
  { src: 'https://res.cloudinary.com/dh5gaoh79/image/upload/v1766350603/IMG_6673_fh9nyy.jpg', rotate: 3, y: -8 },
  { src: 'https://res.cloudinary.com/dh5gaoh79/image/upload/v1766353890/IMG_1312_fqz2h3.jpg', rotate: -2, y: 12 },
];

export function Hero() {
  return (
    <section className="pt-24 pb-8 md:pt-28 md:pb-12 overflow-hidden">
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Text */}
          <div className="space-y-5">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Bailey Dunning
            </h1>

            <div className="flex items-center gap-6">
              <a href="#work" className="flex items-center gap-2 text-small link-subtle group">
                <Code size={16} className="text-accent" />
                <span>Software</span>
              </a>
              <a href="#work" className="flex items-center gap-2 text-small link-subtle group">
                <Video size={16} className="text-accent" />
                <span>Video</span>
              </a>
              <a href="#work" className="flex items-center gap-2 text-small link-subtle group">
                <Camera size={16} className="text-accent" />
                <span>Photography</span>
              </a>
            </div>
          </div>

          {/* Image Slices */}
          <div className="flex items-center justify-end gap-3 md:gap-4">
            {imageSlices.map((slice, i) => (
              <div
                key={i}
                className="relative w-14 md:w-20 h-24 md:h-32 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:z-10"
                style={{
                  transform: `translateY(${slice.y}px) rotate(${slice.rotate}deg)`,
                  clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
                }}
              >
                <img
                  src={slice.src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
