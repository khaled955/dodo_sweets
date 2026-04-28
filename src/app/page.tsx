import { HeroSection } from "@/components/home/hero-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { FeaturedSection } from "@/components/home/featured-section";
import { AboutSection } from "@/components/home/about-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedSection />
        <AboutSection />
        <ReviewsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
