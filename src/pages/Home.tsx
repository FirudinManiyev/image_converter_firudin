import ConverterWorkspace from "../components/converter/ConverterWorkspace";
import FeatureSection from "../components/layout/FeatureSection";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#070b12] text-white">
      <Header />
      <main>
        <Hero />
        <ConverterWorkspace />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}
