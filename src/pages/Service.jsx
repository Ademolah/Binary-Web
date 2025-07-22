import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "AI Systems & Data Intelligence",
    description: "We build custom AI models, NLP systems, predictive analytics engines, and ML-driven platforms that power smart decision-making.",
    icon: "🤖",
  },
  {
    title: "Cloud Software Platforms",
    description: "Launch secure, scalable SaaS platforms with multi-tenant architecture and API-first designs tailored to enterprise use.",
    icon: "☁️",
  },
  {
    title: "Enterprise Automation",
    description: "Streamline business operations with workflow engines, ERP integrations, and digital transformation tools.",
    icon: "⚙️",
  },
  {
    title: "Custom Web & Mobile Apps",
    description: "We design and develop cross-platform apps with beautiful UIs and real-time capabilities.",
    icon: "📱",
  },
  {
    title: "IT Infrastructure Modernization",
    description: "Upgrade legacy systems, deploy DevOps pipelines, and containerize your apps with Docker, Kubernetes, and CI/CD.",
    icon: "🖥️",
  },
  {
    title: "AI-Driven Government Solutions",
    description: "We help public sector organizations adopt digital platforms powered by smart AI tools for transparency and efficiency.",
    icon: "🏛️",
  },
];

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-gray-800">
      <h2 className="text-4xl font-bold text-[#00477B] mb-14 text-center">Our Services</h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative bg-white/80 backdrop-blur-lg border border-white/40 rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-2xl hover:border-[#50D6FE]"
          >
            <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">{service.icon}</div>
            <h3 className="text-xl font-semibold text-[#00477B]">{service.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
