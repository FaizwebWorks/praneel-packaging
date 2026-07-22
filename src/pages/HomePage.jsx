import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WhyRigidBoxes from "../components/WhyRigidBoxes";
import ServicesSection from "../components/ServicesSection";
import IndustriesSection from "../components/IndustriesSection";
import FunFeatureSection from "../components/FunFeatureSection";
import ProcessSection from "../components/ProcessSection";
import CTASection from "../components/CTASection";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Premium Rigid Box Manufacturer | Custom Packaging | Praneel Packaging India</title>
        <meta
          name="description"
          content="Custom rigid boxes for cosmetics, jewelry, gifting & electronics. Premium magnetic, drawer, collapsible & shoulder-neck boxes. B2B packaging manufacturer from Gujarat, India. Get a quote."
        />
        <meta property="og:title" content="Premium Rigid Box Manufacturer | Custom Packaging | Praneel Packaging India" />
        <meta
          property="og:description"
          content="Custom rigid boxes for cosmetics, jewelry, gifting & electronics. Premium magnetic, drawer, collapsible & shoulder-neck boxes. B2B packaging manufacturer from Gujarat, India."
        />
        <meta name="twitter:title" content="Premium Rigid Box Manufacturer | Custom Packaging | Praneel Packaging India" />
        <meta
          name="twitter:description"
          content="Custom rigid boxes for cosmetics, jewelry, gifting & electronics. Premium magnetic, drawer, collapsible & shoulder-neck boxes. B2B packaging manufacturer from Gujarat, India."
        />
      </Helmet>
      <HeroSection />
      <AboutSection />
      <WhyRigidBoxes />
      <ServicesSection />
      <IndustriesSection />
      <FunFeatureSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}

export default HomePage;
