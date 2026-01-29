import Image from 'next/image';
import { Container } from '@/components/ui/Container';

export function Screens() {
  return (
    <section id="screens" className="py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Screens
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-zinc-600">
          Designed for daily brewing — log fast, compare brews,
          and repeat what works.
        </p>

        <div className="mt-10 grid gap-6">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-lg">
            <Image
              src="/images/brew-details.avif"
              alt="Brew details screen"
              width={1200}
              height={800}
              sizes="100vw"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-lg">
              <Image
                src="/images/new-brew.avif"
                alt="New brew form"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-lg">
              <Image
                src="/images/live-brew.avif"
                alt="Live brew timer"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
