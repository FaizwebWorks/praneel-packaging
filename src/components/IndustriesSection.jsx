import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const industries = [
  {
    title: "Cosmetics & Skincare",
    slug: "cosmetics-packaging",
    desc: "Magnetic and drawer boxes for serums, makeup palettes, perfumes, and beauty kits.",
  },
  {
    title: "Jewelry & Watches",
    slug: "jewelry-packaging",
    desc: "Velvet-lined rigid boxes with custom inserts for rings, necklaces, and timepieces.",
  },
  {
    title: "Gift & Corporate",
    slug: "gift-packaging",
    desc: "Premium gift boxes for corporate gifting, festival hampers, and VIP experiences.",
  },
  {
    title: "Electronics & Tech",
    slug: "electronics-packaging",
    desc: "Precision-fit rigid boxes with foam inserts for gadgets, accessories, and wearables.",
  },
];

function IndustriesSection() {
  return (
    <section className="gsap-section relative z-10 overflow-hidden bg-[#FFFDF5] py-14 text-[#1D1D1B] sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-[18vw] top-20 h-[28rem] w-[46vw] rounded-full bg-[#1E56A0]/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute -right-[16vw] bottom-10 h-[26rem] w-[42vw] rounded-full bg-[#F07020]/[0.028] blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-14">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <Motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            className="gsap-heading heading-font max-w-[10ch] text-[clamp(2.75rem,7vw,6.8rem)] font-[200] leading-[0.9] tracking-[-0.04em]"
          >
            Built for your industry.
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ delay: 0.08, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-base font-[300] leading-7 text-[#1D1D1B]/68 sm:text-xl sm:leading-8 lg:ml-auto"
          >
            Our rigid boxes are tailored for specific industries — from cosmetics to electronics. Each structure, finish, and insert is chosen around your product category.
          </Motion.p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[0.75rem] border border-[#1D1D1B]/10 bg-[#1D1D1B]/10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {industries.map((item, index) => (
            <Motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/industries/${item.slug}`}
                className="group flex min-h-[16rem] flex-col bg-[#FFFDF5] p-5 transition duration-500 hover:bg-[#F8F2E8] sm:min-h-[18rem] lg:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-[#1D1D1B]/10 bg-[#F4EFE6] text-[#F07020] transition duration-500 group-hover:border-[#1E56A0]/18 group-hover:bg-[#1E56A0] group-hover:text-[#FFFDF5]">
                    <Sparkles className="h-5 w-5" strokeWidth={1.45} />
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-[#1E56A0] opacity-0 transition duration-500 group-hover:translate-x-1 group-hover:opacity-100" strokeWidth={1.45} />
                </div>

                <div className="mt-auto pt-10">
                  <h3 className="text-[1.8rem] font-[300] leading-[0.96] tracking-[-0.035em] text-[#1D1D1B] transition-colors duration-300 group-hover:text-[#1E56A0] sm:text-[2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm font-[300] leading-6 text-[#1D1D1B]/62 sm:text-base">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs font-[500] uppercase tracking-[0.16em] text-[#1E56A0]/60 opacity-0 transition duration-500 group-hover:opacity-100">
                  <span>Learn more</span>
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </div>
              </Link>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
