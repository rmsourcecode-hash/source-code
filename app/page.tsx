import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyHabitMatters } from "@/components/WhyHabitMatters";
import { HowItWorks } from "@/components/HowItWorks";
import { PriceComparison } from "@/components/PriceComparison";
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
        {/* 1. Hero */}
        <Hero />

        {/* 2. Why This Habit Matters */}
        <WhyHabitMatters />

        {/* 3. A Simple Daily Ritual */}
        <HowItWorks />

        {/* 4. ₹549 vs ₹549 Comparison - KEY SECTION */}
        <PriceComparison />

        {/* 5. What's Inside */}
        <IngredientGrid />

        {/* 6. Order - Single Product */}
        <ProductSection />

        {/* 7. Why We Exist */}
        <BrandStory />

        {/* 8. FAQ */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
