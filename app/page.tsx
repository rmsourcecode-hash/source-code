import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyHabitMatters } from "@/components/WhyHabitMatters";
import { HowItWorks } from "@/components/HowItWorks";
import { IngredientGrid } from "@/components/IngredientGrid";
import { ProductSection } from "@/components/ProductSection";
import { BrandStory } from "@/components/BrandStory";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - Calm, aspirational */}
        <Hero />

        {/* 2. Why This Habit Matters */}
        <WhyHabitMatters />

        {/* 3. A Simple Daily Ritual */}
        <HowItWorks />

        {/* 4. What's Inside - Benefit-led */}
        <IngredientGrid />

        {/* 5. Choose Your Commitment */}
        <ProductSection />

        {/* 6. Why We Exist - Belief-led story */}
        <BrandStory />

        {/* 7. FAQ */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
