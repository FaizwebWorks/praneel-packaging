import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Package, Sparkles } from "lucide-react";
import { products, productCategories } from "../data/products";
import YuccaButton from "../components/YuccaButton";

function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="heading-font text-4xl">Box not found</h1>
          <p className="mt-4 text-[#1D1D1B]/60">This product page does not exist.</p>
          <Link to="/" className="mt-6 inline-block text-[#1E56A0] underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{product.title} | Premium Rigid Box | Praneel Packaging India</title>
        <meta
          name="description"
          content={`${product.title}: ${product.subtitle}. ${product.description.slice(0, 120)}. Ideal for ${product.applications.slice(0, 3).join(", ")}. Custom rigid box manufacturer from Gujarat, India.`}
        />
        <meta property="og:title" content={`${product.title} | Praneel Packaging India`} />
        <meta
          property="og:description"
          content={`${product.subtitle}. ${product.description.slice(0, 100)}`}
        />
        <meta name="twitter:title" content={`${product.title} | Praneel Packaging India`} />
        <meta
          name="twitter:description"
          content={`${product.subtitle}. ${product.description.slice(0, 100)}`}
        />
      </Helmet>

      {/* Product Hero */}
      <section className="relative z-10 min-h-[70vh] overflow-hidden bg-[#FFFDF5] pt-28 sm:pt-32">
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

          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-4 flex items-center gap-3">
                {product.badge && (
                  <span className="rounded-full bg-[#B7653B] px-3 py-1 text-[0.6rem] font-[500] uppercase tracking-[0.12em] text-[#FFFDF5]">
                    {product.badge}
                  </span>
                )}
                <span className="text-[0.65rem] font-[500] uppercase tracking-[0.18em] text-[#1D1D1B]/40">
                  {product.meta}
                </span>
              </div>
              <h1 className="heading-font text-[clamp(2.8rem,7vw,6rem)] font-[200] leading-[0.92] tracking-[-0.035em]">
                {product.title}
              </h1>
              <p className="mt-4 text-lg font-[300] leading-7 text-[#1E56A0] sm:text-xl">
                {product.subtitle}
              </p>
              <p className="mt-4 max-w-xl text-base font-[300] leading-7 text-[#1D1D1B]/68">
                {product.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <YuccaButton
                  href="https://wa.me/918320826551?text=Hi,%20I%20want%20a%20quote%20for%20a%20custom%20rigid%20box"
                  external
                  variant="blue"
                >
                  Get Quote
                </YuccaButton>
                <YuccaButton
                  href="tel:+918320826551"
                  variant="outline"
                >
                  Call +91 83208 26551
                </YuccaButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square overflow-hidden rounded-[1.15rem] bg-[#F1E9DC]"
            >
              <img
                src={product.img}
                alt={product.title}
                className="h-full w-full object-contain p-8 sm:p-12"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,253,245,0)_0%,rgba(255,253,245,0.18)_74%,rgba(29,29,27,0.045)_100%)] opacity-80" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="relative z-10 overflow-hidden bg-[#FFFDF5] py-14 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-14">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="heading-font text-[clamp(2rem,5vw,4rem)] font-[200] leading-[0.92] tracking-[-0.03em]">
                Best for
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {product.applications.map((app) => (
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

      {/* Finishes */}
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
                Finishes & options
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {product.finishes.map((finish) => (
                <div
                  key={finish}
                  className="flex items-center gap-3 rounded-[0.75rem] border border-[#1D1D1B]/10 bg-[#FFFDF5] p-4"
                >
                  <Sparkles className="h-5 w-5 shrink-0 text-[#F07020]" strokeWidth={1.5} />
                  <span className="text-sm font-[300] text-[#1D1D1B]/72">{finish}</span>
                </div>
              ))}
            </motion.div>
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
            {product.faq.map((item, index) => (
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
      <section className="relative z-10 overflow-hidden bg-[#FFFDF5] pb-14 sm:pb-20">
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
                Need a custom {product.title.toLowerCase()}?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base font-[300] leading-7 text-[#1D1D1B]/68">
                Tell us your product dimensions, quantity, and finish preferences. We'll engineer the perfect box around your product.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <YuccaButton
                  href="https://wa.me/918320826551?text=Hi,%20I%20want%20a%20quote%20for%20${encodeURIComponent(product.title)}"
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

      {/* Related Products */}
      {related.length > 0 && (
        <section className="relative z-10 overflow-hidden bg-[#FFFDF5] pb-20">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="heading-font mb-8 text-[clamp(1.8rem,4vw,3.5rem)] font-[200] leading-[0.92] tracking-[-0.03em]"
            >
              Explore other boxes
            </motion.h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((rel, i) => (
                <motion.div
                  key={rel.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={`/rigid-boxes/${rel.slug}`}
                    className="group block overflow-hidden rounded-[0.75rem] border border-[#1D1D1B]/10 bg-[#F1E9DC] transition duration-500 hover:-translate-y-1"
                  >
                    <div className="aspect-square overflow-hidden bg-[#F1E9DC]">
                      <img
                        src={rel.img}
                        alt={rel.title}
                        className="h-full w-full object-contain p-6 transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="border-t border-[#1D1D1B]/10 bg-[#FFFDF5] p-4">
                      <h3 className="text-sm font-[400] text-[#1D1D1B]">{rel.title}</h3>
                      <p className="mt-1 text-xs text-[#1D1D1B]/50">{rel.subtitle}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export { productCategories };
export default ProductPage;
