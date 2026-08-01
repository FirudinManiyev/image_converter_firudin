import ConverterWorkspace from "../components/converter/ConverterWorkspace";
import FeatureSection from "../components/layout/FeatureSection";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import PageLoader from "../components/layout/PageLoader";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div id="top" className="theme-page min-h-screen">
      <PageLoader />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ConverterWorkspace />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}
