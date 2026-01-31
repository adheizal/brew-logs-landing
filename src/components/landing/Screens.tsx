import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

export function Screens() {
  const t = useTranslations('screens');

  return (
    <section id="screens" className="py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          {t('title')}
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-zinc-600">
          {t('description')}
        </p>

        <div className="mt-10 grid gap-6">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-lg">
            <ImageWithFallback
              src="/images/brew-details.avif"
              alt={t('images.brew_details')}
              width={1200}
              height={800}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-lg">
              <ImageWithFallback
                src="/images/new-brew.avif"
                alt={t('images.new_brew')}
                width={800}
                height={600}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-lg">
              <ImageWithFallback
                src="/images/live-brew.avif"
                alt={t('images.live_brew')}
                width={800}
                height={600}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
