import { Container } from '@/components/ui/Container';

const faqs = [
  {
    q: 'Who is this for?',
    a: 'Anyone who brews regularly and wants more consistent cups.',
  },
  {
    q: 'Can I use it on my phone?',
    a: 'Yes. It&apos;s mobile-first and works great on desktop too.',
  },
  {
    q: 'What do you track?',
    a: 'Ratio, grind size, water temp, brew time, rating, and notes — the stuff you actually care about.',
  },
  {
    q: 'Why Duplicate?',
    a: 'So you can tweak a previous brew instead of starting from scratch.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          FAQ
        </h2>

        <div className="mt-10 grid gap-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-zinc-900">
                {item.q}
                <span className="text-zinc-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
