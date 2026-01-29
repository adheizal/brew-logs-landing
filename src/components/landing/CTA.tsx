import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-20">
      <Container>
        <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-8 sm:p-12 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                Ready for your next brew?
              </h2>
              <p className="text-lg text-zinc-600">
                Open the app and start logging your brews.
                Dial it in once, repeat it anytime.
              </p>
              <p className="text-sm text-zinc-500">
                Feedback is welcome.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href="https://brewlog.app/brew">Open Brew Logs</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
