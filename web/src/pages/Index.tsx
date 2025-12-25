import { Hero } from '@/components/Hero';
import { WorkSection } from '@/components/WorkSection';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WorkSection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;
