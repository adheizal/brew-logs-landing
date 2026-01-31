import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

interface FeaturesProps {
  className?: string;
}

export function Features({ className = '' }: FeaturesProps) {
  const t = useTranslations('features');

  const features = ['brew_list', 'stats', 'filter', 'new_brew', 'live_brew', 'tabs'] as const;

  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          {t('title')}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((key) => (
            <div
              key={key}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-base font-semibold text-zinc-900">
                {t(`items.${key}.title`)}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

interface ProblemSolutionProps {
  className?: string;
}

export function ProblemSolution({ className = '' }: ProblemSolutionProps) {
  const t = useTranslations('problem_solution');

  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              {t('title')}
            </h2>
            <p className="text-lg text-zinc-600">
              {t('description')}
            </p>

            <ul className="mt-6 space-y-3 text-base text-zinc-600">
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-900" />
                {t('features.duplicate')}
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-900" />
                {t('features.filter')}
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-900" />
                {t('features.search')}
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <ImageWithFallback
              src="/images/brew-list.avif"
              alt="Filters & search"
              width={800}
              height={600}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
