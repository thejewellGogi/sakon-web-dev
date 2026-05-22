import ContactSection from "@/components/ContactSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PricingSection />
      <PortfolioSection />
      <FeatureSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
