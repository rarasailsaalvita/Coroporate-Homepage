import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border border-light-gray rounded-[8px] overflow-hidden flex flex-col lg:flex-row shadow-sm">
          <div className="lg:w-1/2 p-10 lg:p-16 bg-off-white flex flex-col justify-between">
            <div>
              <span className="section-title">Get In Touch</span>
              <h2 className="text-[32px] font-bold text-dark mb-6 leading-tight">
                Let's Strategy Your <span className="text-brand">Growth.</span>
              </h2>
              <p className="text-[15px] text-gray mb-10 max-w-sm leading-[1.6]">
                Ready to transform your business? Drop us a line and our experts will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-light-gray rounded-[4px] flex items-center justify-center bg-white">
                    <Mail className="w-5 h-5 text-gray" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray">Email Us</p>
                    <p className="font-bold text-[14px]">rumahinovasi.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-light-gray rounded-[4px] flex items-center justify-center bg-white">
                    <Phone className="w-5 h-5 text-gray" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray">Call Us</p>
                    <p className="font-bold text-[14px]">+628861234567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-10 lg:p-16">
            <form className="space-y-6" id="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-off-white border border-light-gray rounded-[4px] text-[14px] focus:outline-none focus:border-brand transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray">Work Email</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-off-white border border-light-gray rounded-[4px] text-[14px] focus:outline-none focus:border-brand transition-all"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray">Your Message</label>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 bg-off-white border border-light-gray rounded-[4px] text-[14px] focus:outline-none focus:border-brand transition-all"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-brand text-white rounded-[4px] font-bold text-[14px] shadow-lg shadow-brand/10 hover:bg-brand-dark transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
