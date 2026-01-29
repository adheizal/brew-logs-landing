import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function Hero() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Log brew. Repeat.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
              Brew Logs helps you dial in your brews and repeat the cups that actually taste good.
              Log ratios, grind size, temp, and notes — then brew again without guessing.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="https://brewlog.app/brew">Open Brew Logs</Button>
              <Button href="#screens" variant="secondary">
                See the screens
              </Button>
            </div>

            <p className="text-sm text-zinc-500">
              Built for daily brews • Mobile-first
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge>Total brews</Badge>
              <Badge>Avg rating</Badge>
              <Badge>Filter</Badge>
              <Badge>Duplicate</Badge>
              <Badge>Live brew</Badge>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-lg">
              <Image
                src="/images/hero.avif"
                alt="Brew Logs UI"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
