import { motion } from "motion/react";

const projects = [
  {
    title: "Global Supply Chain Re-engineering",
    category: "Cloud & Logistics",
    image: "https://picsum.photos/seed/tech1/800/600",
    client: "LogiCorp Global",
  },
  {
    title: "AI-Driven Financial Analytics",
    category: "Machine Learning",
    image: "https://picsum.photos/seed/tech2/800/600",
    client: "Fintex Solutions",
  },
  {
    title: "Eco-Friendly Smart City Infrastructure",
    category: "IoT & Smart Systems",
    image: "https://picsum.photos/seed/tech3/800/600",
    client: "UrbanFuture",
  },
  {
    title: "Next-Gen E-commerce Platform",
    category: "Custom Software",
    image: "https://picsum.photos/seed/tech4/800/600",
    client: "ModaStream",
  },
];

export default function Portfolio() {
  return (
    <section className="py-16 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-[40px]">
          <div>
            <span className="section-title">Recent Projects</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative h-[100px] rounded-[4px] overflow-hidden group border border-light-gray"
                  id={`project-${index}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex items-end">
                    <span className="text-[11px] font-semibold text-white uppercase tracking-wider relative z-10">
                      {project.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="border-l border-light-gray pl-[20px]">
            <span className="section-title">Client Feedback</span>
            <div className="space-y-8">
              {/* Using testimonials from Testimonials.tsx logic locally simplified for the layout */}
              <div className="text-[14px] italic text-gray leading-[1.6]">
                "Rumah Inovasi transformed our legacy systems in record time. Their strategic approach to innovation is unparalleled."
                <span className="block not-italic text-[12px] font-bold text-dark mt-2 tracking-tight">— Sarah Chen, CTO at Global Logistics</span>
              </div>
              <div className="text-[14px] italic text-gray leading-[1.6]">
                "The most professional IT consulting team we have worked with. Precise, fast, and highly effective."
                <span className="block not-italic text-[12px] font-bold text-dark mt-2 tracking-tight">— Mark Jenkins, Ops Director</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
