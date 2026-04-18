import { motion } from "motion/react";
import { Cloud, Shield, Zap, BarChart, Code, Cpu } from "lucide-react";

const services = [
  {
    title: "Cloud Strategy",
    description: "Modernize your infrastructure with scalable, secure cloud solutions tailored to your growth.",
    icon: Cloud,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our comprehensive threat detection and response systems.",
    icon: Shield,
    color: "bg-orange-50 text-brand",
  },
  {
    title: "IT Modernization",
    description: "Upgrade legacy systems to high-performance architectures that drive efficiency.",
    icon: Zap,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "Data Analytics",
    description: "Turn raw data into actionable insights with our advanced BI and machine learning tools.",
    icon: BarChart,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Custom Software",
    description: "Bespoke applications designed and developed to solve your unique business challenges.",
    icon: Code,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "AI Integration",
    description: "Harness the power of Artificial Intelligence to automate and optimize your workflows.",
    icon: Cpu,
    color: "bg-rose-50 text-rose-600",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-light-gray rounded-[8px] hover:border-brand transition-all group"
              id={`service-${index}`}
            >
              <h3 className="text-[18px] font-bold text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-[13px] text-gray leading-[1.6]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
