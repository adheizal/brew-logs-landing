import Image from 'next/image';
import { Container } from '@/components/ui/Container';

const features = [
  {
    title: 'Brew list',
    desc: 'Your full brew history. View details or duplicate to brew again.',
  },
  {
    title: 'Quick stats',
    desc: 'Total brews, average rating, best cup, and most-used method.',
  },
  {
    title: 'Filter & search',
    desc: 'Find brews by method, beans, rating, or date — fast.',
  },
  {
    title: 'New brew',
    desc: 'A clean, focused form for logging a new brew.',
  },
  {
    title: 'Live brew',
    desc: 'Real-time mode to follow your timer while brewing.',
  },
  {
    title: 'Tabs: Brew / New / Beans / Recipes',
    desc: 'Simple navigation that feels great on mobile.',
  },
];

export function Features() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          What&apos;s inside
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-base font-semibold text-zinc-900">{f.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProblemSolution() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Consistency is hard when you rely on memory.
            </h2>
            <p className="text-lg text-zinc-600">
              Brew Logs saves the details that matter, so you can repeat great brews
              without trying to remember what you did last time.
            </p>

            <ul className="mt-6 space-y-3 text-base text-zinc-600">
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-900" />
                Duplicate a previous brew and tweak it slightly.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-900" />
                Filter by method, beans, rating, or date.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-900" />
                Quick search to find that one brew you liked.
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-lg">
            <Image
              src="/images/brew-list.avif"
              alt="Filters & search"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
