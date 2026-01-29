import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/landing/Hero';
import { Stats } from '@/components/landing/Stats';
import { Features, ProblemSolution } from '@/components/landing/Features';
import { Screens } from '@/components/landing/Screens';
import { CTA } from '@/components/landing/CTA';
import { FAQ } from '@/components/landing/FAQ';

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />
        <Stats />
        <ProblemSolution />
        <Features />
        <Screens />
        <CTA />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
