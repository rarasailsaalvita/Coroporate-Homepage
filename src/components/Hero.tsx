import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 bg-off-white overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-[12px] font-bold uppercase tracking-[1px] text-brand mb-3">
              Future-Proof Solutions
            </div>
            <h1 className="text-[42px] font-bold leading-[1.1] text-dark mb-4">
              Driving Business Growth Through IT Innovation.
            </h1>
            <p className="text-[16px] text-gray mb-6 max-w-[500px] leading-[1.5]">
              Strategic technology consulting for the modern enterprise. We help organizations modernize their digital infrastructure and scale with precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="px-7 py-3.5 bg-brand text-white rounded-[4px] font-semibold text-[14px] hover:bg-brand-dark transition-all flex items-center justify-center"
                id="hero-primary-cta"
              >
                Our Services
              </a>
              <a
                href="#portfolio"
                className="px-7 py-3.5 border border-brand text-brand rounded-[4px] font-semibold text-[14px] hover:bg-brand/5 transition-all flex items-center justify-center"
                id="hero-secondary-cta"
              >
                Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
