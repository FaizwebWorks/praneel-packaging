import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProcessSection from "./components/ProcessSection";
import SmoothCursor from "./components/SmoothCursor";
import SmoothScroll from "./components/SmoothScroll";
import WhyRigidBoxes from "./components/WhyRigidBoxes";
import ServicesSection from "./components/ServicesSection";
import FunFeatureSection from "./components/FunFeatureSection";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <SmoothScroll>
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100">
      <ScrollToTop />
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} 
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(39,39,42,0.4),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(63,63,70,0.3),transparent_40%),radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),transparent_50%)]" />
      
      <SmoothCursor />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <WhyRigidBoxes />
        <ServicesSection />
        <FunFeatureSection />
        <ProcessSection />
        <CTASection />
      </div>
      <Footer />
    </main>
    </SmoothScroll>
  );
}

export default App;