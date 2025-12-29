import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyHabitMatters } from "@/components/WhyHabitMatters";
import { HowItWorks } from "@/components/HowItWorks";
import { ForEveryAge } from "@/components/ForEveryAge";
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
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Why This Habit Matters */}
        <WhyHabitMatters />

        {/* 3. A Simple Daily Ritual */}
        <HowItWorks />

        {/* 4. For Every Age. For Every Home. */}
        <ForEveryAge />

        {/* 5. What's Inside (Grouped by Benefits) */}
        <IngredientGrid />

        {/* 6. Choose Your Commitment */}
        <ProductSection />

        {/* 7. Why Source Code Nutrition */}
        <BrandStory />

        {/* 8. FAQ */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
