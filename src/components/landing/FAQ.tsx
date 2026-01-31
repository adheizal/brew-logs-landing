import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';

export function FAQ() {
  const t = useTranslations('faq');

  const faqs = ['who', 'mobile', 'track', 'duplicate', 'offline', 'export'] as const;

  return (
    <section id="faq" className="py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          {t('title')}
        </h2>

        <div className="mt-10 grid gap-4">
          {faqs.map((key) => (
            <details
              key={key}
              className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-zinc-900">
                {t(`items.${key}.question`)}
                <span className="text-zinc-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                {t(`items.${key}.answer`)}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
