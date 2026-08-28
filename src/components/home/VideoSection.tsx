import { VIDEOS } from '@/lib/data';

function youtubeEmbed(id: string) {
  return `https://www.youtube.com/embed/${id}`;
}

export default function VideoSection() {
  const video = VIDEOS[0];
  if (!video?.youtubeId) return null;

  return (
    <section id="see-the-space" className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C5A572] text-[10px] tracking-[0.35em] uppercase mb-4">
            See the Space
          </p>
          <h2 className="font-serif text-foreground text-4xl sm:text-5xl">
            Venue Tour
          </h2>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-sm border border-border">
          <iframe
            src={youtubeEmbed(video.youtubeId)}
            title={video.title}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
