import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothCursor from "../components/SmoothCursor";
import SmoothScroll from "../components/SmoothScroll";
import ScrollToTop from "../components/ScrollToTop";
import ScrollEffects from "../components/ScrollEffects";

function MainLayout({ children }) {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#FFFDF5] text-black">
        <ScrollToTop />
        <ScrollEffects />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.10] z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <SmoothCursor />
        <Navbar />
        <div className="relative z-10">{children}</div>
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default MainLayout;
