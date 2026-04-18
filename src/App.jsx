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
    <main className="relative min-h-screen bg-[#F5F5F5] text-black">
      <ScrollToTop />
      <div className="absolute inset-0 pointer-events-none opacity-[0.10] z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} 
      />
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