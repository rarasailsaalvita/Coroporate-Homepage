import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "Rumah Inovasi's expertise in cloud migration was instrumental in reducing our operational costs by 40% while doubling our processing speed.",
    author: "Elena Rodriguez",
    role: "CTO, Global Logistics Hub",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
  {
    content: "The custom software solution they built for us has revolutionized how we handle client data. Secure, efficient, and exactly what we needed.",
    author: "Marcus Chen",
    role: "Head of Digital, InnovateBank",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    content: "Their strategic consulting didn't just give us a roadmap; it gave us a competitive edge that has allowed us to scale globally.",
    author: "Sarah Jenkins",
    role: "Founder, Zenith Scale",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-900 border-y border-zinc-800" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Trusted by Industry <span className="text-brand">Leaders.</span>
          </motion.h2>
          <p className="text-zinc-400 text-lg">Don't just take our word for it—see what our clients have to say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-zinc-800/50 p-10 rounded-3xl border border-zinc-700/50 relative group"
              id={`testimonial-${index}`}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand/20 group-hover:text-brand/40 transition-colors" />
              <p className="text-lg text-zinc-300 leading-relaxed mb-8 relative z-10 italic">
                "{item.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full border-2 border-brand/50"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{item.author}</h4>
                  <p className="text-sm text-zinc-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
