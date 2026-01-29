import { Container } from '@/components/ui/Container';

const stats = [
  { k: 'Total brews', v: 'Track how often you brew' },
  { k: 'Avg rating', v: 'See how your cups average out' },
  { k: 'Best brew', v: 'Your highest-rated cup' },
  { k: 'Most used', v: 'Your go-to brew method' },
];

export function Stats() {
  return (
    <section id="overview" className="py-8">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.k}
              className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div className="text-sm font-medium text-zinc-600">{item.k}</div>
              <div className="mt-1.5 text-base font-semibold text-zinc-900">{item.v}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
