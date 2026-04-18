import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Future of AI in Enterprise IT Strategy",
    excerpt: "Discover how large-scale organizations are integrating generative AI into their daily workflows safely.",
    date: "April 15, 2026",
    category: "AI & Innovation",
    image: "https://picsum.photos/seed/blog1/600/400",
  },
  {
    title: "5 Cybersecurity Trends to Watch in 2026",
    excerpt: "As threats evolve, so must our defenses. Here's what your team needs to prioritize this year.",
    date: "April 12, 2026",
    category: "Cybersecurity",
    image: "https://picsum.photos/seed/blog2/600/400",
  },
  {
    title: "Scaling Cloud Infrastructure for Peak Demand",
    excerpt: "Learn the architecture patterns that ensure 99.99% uptime during your busiest traffic periods.",
    date: "April 08, 2026",
    category: "Cloud Ops",
    image: "https://picsum.photos/seed/blog3/600/400",
  },
];

export default function Blog() {
  return (
    <section className="py-16 bg-white border-t border-light-gray" id="blog">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="section-title">Industry Insights</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[8px] overflow-hidden border border-light-gray group flex flex-col h-full"
              id={`blog-post-${index}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <time className="text-[10px] font-bold text-gray uppercase tracking-widest mb-3 block">{post.date}</time>
                <h3 className="text-lg font-bold text-dark mb-4 group-hover:text-brand transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[13px] text-gray mb-6 line-clamp-3 leading-[1.6]">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center justify-center w-full py-3 border border-brand text-brand rounded-[4px] text-[12px] font-bold uppercase tracking-wider hover:bg-brand hover:text-white transition-all">
                    Read Article
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
