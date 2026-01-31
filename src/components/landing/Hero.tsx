import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              {t('title')}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
              {t('description')}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="https://brewlog.app/brew">{t('cta.primary')}</Button>
              <Button href="#screens" variant="secondary" size="sm">
                {t('cta.secondary')}
              </Button>
            </div>

            <p className="text-sm text-zinc-500">
              {t('footnote')}
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge>{t('badges.total_brews')}</Badge>
              <Badge>{t('badges.avg_rating')}</Badge>
              <Badge>{t('badges.filter')}</Badge>
              <Badge>{t('badges.duplicate')}</Badge>
              <Badge>{t('badges.live_brew')}</Badge>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-lg">
              <ImageWithFallback
                src="/images/hero.avif"
                alt="Brew Logs UI"
                width={800}
                height={600}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
