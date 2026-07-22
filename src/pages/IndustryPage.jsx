import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Package, Sparkles } from "lucide-react";
import { industries } from "../data/industries";
import YuccaButton from "../components/YuccaButton";

function IndustryPage() {
  const { slug } = useParams();
  const industry = industries.find((ind) => ind.slug === slug);

  if (!industry) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="heading-font text-4xl">Page not found</h1>
          <p className="mt-4 text-[#1D1D1B]/60">This industry page does not exist.</p>
          <Link to="/" className="mt-6 inline-block text-[#1E56A0] underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{industry.title} | {industry.subtitle} | Praneel Packaging India</title>
        <meta
          name="description"
          content={`${industry.title}: ${industry.subtitle}. ${industry.description.slice(0, 120)}. ${industry.keyPhrase} from Gujarat, India. Get a quote.`}
        />
        <meta property="og:title" content={`${industry.title} | Praneel Packaging India`} />
        <meta property="og:description" content={`${industry.subtitle}. ${industry.description.slice(0, 100)}`} />
        <meta name="twitter:title" content={`${industry.title} | Praneel Packaging India`} />
        <meta name="twitter:description" content={`${industry.subtitle}. ${industry.description.slice(0, 100)}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative z-10 min-h-[60vh] overflow-hidden bg-[#FFFDF5] pt-28 sm:pt-32">
        <div className="pointer-events-none absolute -left-[14vw] top-16 h-[24rem] w-[42vw] rounded-full bg-[#F07020]/[0.028] blur-3xl" />
        <div className="pointer-events-none absolute -right-[16vw] bottom-10 h-[28rem] w-[46vw] rounded-full bg-[#1E56A0]/[0.035] blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-8 sm:px-8 lg:px-12 xl:px-14">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#1D1D1B]/50 transition-colors hover:text-[#1E56A0]"
          >
            <ArrowRight className="h-4 w-4 rotate-180" strokeWidth={1.5} />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-xs font-[500] uppercase tracking-[0.22em] text-[#1E56A0]">
              Industry Solution
            </p>
            <h1 className="heading-font text-[clamp(2.8rem,7vw,6rem)] font-[200] leading-[0.92] tracking-[-0.035em]">
              {industry.title}
            </h1>
            <p className="mt-4 text-lg font-[300] leading-7 text-[#1E56A0] sm:text-xl">
              {industry.subtitle}
            </p>
            <p className="mt-6 max-w-2xl text-base font-[300] leading-7 text-[#1D1D1B]/68 sm:text-lg sm:leading-8">
              {industry.hero}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <YuccaButton
                href="https://wa.me/918320826551?text=Hi,%20I%20want%20to%20discuss%20packaging%20for%20${encodeURIComponent(industry.title)}"
                external
                variant="blue"
              >
                Get a Quote
              </YuccaButton>
              <YuccaButton href="/#services" variant="outline">
                View All Boxes
              </YuccaButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="relative z-10 overflow-hidden bg-[#FFFDF5] py-14 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <h2 className="heading-font text-[clamp(1.8rem,4vw,3.5rem)] font-[200] leading-[0.92] tracking-[-0.03em]">
              Why choose Praneel for {industry.title.toLowerCase()}?
            </h2>
            <p className="mt-6 text-base font-[300] leading-7 text-[#1D1D1B]/68 sm:text-lg sm:leading-8">
              {industry.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="relative z-10 overflow-hidden bg-[#F8F2E8] py-14 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-14">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="heading-font text-[clamp(2rem,5vw,4rem)] font-[200] leading-[0.92] tracking-[-0.03em]">
                Applications
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {industry.applications.map((app) => (
                <div
                  key={app}
                  className="flex items-center gap-3 rounded-[0.75rem] border border-[#1D1D1B]/10 bg-[#FFFDF5] p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1E56A0]" strokeWidth={1.5} />
                  <span className="text-sm font-[300] text-[#1D1D1B]/72">{app}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Box Types */}
      <section className="relative z-10 overflow-hidden bg-[#FFFDF5] py-14 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="heading-font text-[clamp(2rem,5vw,4rem)] font-[200] leading-[0.92] tracking-[-0.03em]">
              Recommended box types
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {industry.boxTypes.map((box, i) => (
              <motion.div
                key={box.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/rigid-boxes/${box.slug}`}
                  className="group block overflow-hidden rounded-[0.75rem] border border-[#1D1D1B]/10 bg-[#F1E9DC] transition duration-500 hover:-translate-y-1"
                >
                  <div className="aspect-square overflow-hidden bg-[#F1E9DC]">
                    <img
                      src={box.img}
                      alt={box.name}
                      className="h-full w-full object-contain p-6 transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-[#1D1D1B]/10 bg-[#FFFDF5] p-4">
                    <h3 className="text-sm font-[400] text-[#1D1D1B]">{box.name}</h3>
                    <ArrowRight className="h-4 w-4 text-[#1E56A0]" strokeWidth={1.5} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 overflow-hidden bg-[#FFFDF5] py-14 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 max-w-2xl"
          >
            <p className="mb-3 text-xs font-[500] uppercase tracking-[0.22em] text-[#1E56A0]">
              FAQs
            </p>
            <h2 className="heading-font text-[clamp(2.2rem,5vw,4.5rem)] font-[200] leading-[0.92] tracking-[-0.03em]">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="grid gap-3 max-w-3xl">
            {industry.faq.map((item, index) => (
              <motion.details
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-[0.75rem] border border-[#1D1D1B]/10 bg-[#FFFDF5] transition-colors duration-300 [&[open]]:bg-[#F8F2E8]"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 text-sm font-[400] text-[#1D1D1B] sm:p-5 sm:text-base">
                  {item.q}
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#1E56A0] transition-transform duration-300 group-open:rotate-90" strokeWidth={1.5} />
                </summary>
                <p className="border-t border-[#1D1D1B]/8 px-4 pb-4 pt-3 text-sm font-[300] leading-6 text-[#1D1D1B]/68 sm:px-5 sm:pb-5">
                  {item.a}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 overflow-hidden bg-[#FFFDF5] pb-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.15rem] bg-[#F6EFE3] p-8 sm:p-12 lg:p-16"
          >
            <div className="mx-auto max-w-2xl text-center">
              <Package className="mx-auto h-8 w-8 text-[#1E56A0]" strokeWidth={1.5} />
              <h2 className="heading-font mt-4 text-[clamp(1.8rem,4vw,3.5rem)] font-[200] leading-[0.92] tracking-[-0.03em]">
                Need {industry.title.toLowerCase()} boxes?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base font-[300] leading-7 text-[#1D1D1B]/68">
                Tell us your product dimensions, quantity, and finish preferences. We'll recommend the right box structure for your needs.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <YuccaButton
                  href="https://wa.me/918320826551?text=Hi,%20I%20want%20packaging%20for%20${encodeURIComponent(industry.title)}"
                  external
                  variant="blue"
                >
                  Request Quote
                </YuccaButton>
                <YuccaButton href="/" variant="outline">
                  View All Boxes
                </YuccaButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default IndustryPage;
