import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductSection } from "@/components/ProductSection";
import { IngredientGrid } from "@/components/IngredientGrid";
import { BrandStory } from "@/components/BrandStory";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <HowItWorks />
        <IngredientGrid />
        <ProductSection />
        <BrandStory />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
