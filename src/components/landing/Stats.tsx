import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';

interface StatsProps {
  className?: string;
}

export function Stats({ className = '' }: StatsProps) {
  const t = useTranslations('stats');

  const features = [
    { key: 'track', icon: '📊' },
    { key: 'timer', icon: '⏱️' },
    { key: 'history', icon: '📋' },
    { key: 'duplicate', icon: '🔄' },
  ];

  return (
    <section id="overview" className={`py-8 ${className}`}>
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.key}
              className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                <div className="text-base font-semibold text-zinc-900">
                  {t(`${item.key}.name`)}
                </div>
              </div>
              <div className="mt-2 text-sm text-zinc-600">
                {t(`${item.key}.description`)}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
