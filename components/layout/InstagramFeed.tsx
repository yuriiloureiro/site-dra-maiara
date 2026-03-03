"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Post = {
  id: string;
  mediaType: string;
  permalink: string;
  mediaUrl: string;
  thumbnailUrl?: string;
  caption?: string;
  prunedCaption?: string;
  sizes?: { medium?: { mediaUrl: string } };
};

type FeedData = {
  username?: string;
  profilePictureUrl?: string;
  followersCount?: number;
  posts?: Post[];
};

export default function InstagramFeed() {
  const [data, setData] = useState<FeedData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<Post | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch("/api/instagram")
      .then(async (res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const d = await res.json();
        if (!mounted) return;
        setData(d);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        if (mounted) setError("Não foi possível carregar o feed.");
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section id="instagram" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          Carregando feed do Instagram…
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section id="instagram" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-red-600">
          {error ?? "Feed indisponível no momento."}
        </div>
      </section>
    );
  }

  const posts = data.posts ?? [];

  return (
    <section id="instagram" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {data.profilePictureUrl && (
              <Image
                src={data.profilePictureUrl}
                alt={data.username ?? "Perfil Instagram"}
                width={56}
                height={56}
                className="rounded-full"
              />
            )}
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">
                Siga
              </p>
              <a
                href={`https://instagram.com/${data.username}`}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-serif text-[var(--color-deep-blue)] hover:text-[var(--color-gold)]"
              >
                @{data.username}
              </a>
              <div className="text-xs text-[var(--color-deep-blue)]/60">
                {data.followersCount} seguidores
              </div>
            </div>
          </div>

          <a
            href={`https://instagram.com/${data.username}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-4 py-2 rounded-full border border-[var(--color-gold)]/20 text-[var(--color-deep-blue)] hover:bg-[var(--color-gold)]/10 transition"
          >
            Seguir
          </a>
        </div>

        {/* grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.slice(0, 4).map((p) => {
            // prefer sizes.medium if disponível (melhor proporção), fallback para mediaUrl
            const img = p.sizes?.medium?.mediaUrl ?? p.mediaUrl;
            return (
              <motion.button
                key={p.id}
                onClick={() => setLightbox(p)}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-2xl bg-[var(--color-off-white)]"
                aria-label="Abrir publicação"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={img}
                    alt={p.prunedCaption ?? p.caption ?? "Instagram image"}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-xs text-white line-clamp-2">
                    {p.prunedCaption ?? ""}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* botão ver mais */}
        <div className="mt-6 text-center">
          <a
            href={`https://instagram.com/${data.username}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 rounded-full border border-[var(--color-gold)]/20 text-[var(--color-deep-blue)] hover:bg-[var(--color-gold)]/10"
          >
            Ver mais no Instagram
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="max-w-3xl w-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video">
              <Image
                src={lightbox.mediaUrl}
                alt={lightbox.prunedCaption ?? lightbox.caption ?? "Instagram"}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-contain bg-black"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-[var(--color-deep-blue)]/80 mb-4">
                {lightbox.prunedCaption ?? lightbox.caption}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href={lightbox.permalink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[var(--color-gold)] underline"
                >
                  Abrir no Instagram
                </a>
                <button
                  onClick={() => setLightbox(null)}
                  className="text-sm text-[var(--color-deep-blue)]"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
