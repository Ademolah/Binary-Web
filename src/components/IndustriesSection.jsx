import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const IndustriesSection = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (svgRef.current) {
        svgRef.current.style.transform = `translateY(${scrollY * 0.2}px)`; // adjust scroll speed
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-20 px-6 bg-[#F0F8FF] overflow-hidden text-gray-800">
      {/* SVG Tech Pattern Background with Parallax Scroll */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full opacity-10 z-0 pointer-events-none transition-transform duration-100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#00477B"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00477B] mb-4">
          Industries We Serve
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We power innovation across a wide range of sectors by building tailor-fit, future-ready software solutions.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {[
            { icon: "💰", title: "Fintech", desc: "Payment systems, fraud detection, AI credit scoring, and next-gen banking tools." },
            { icon: "🏥", title: "Healthcare", desc: "AI in diagnostics, telemedicine platforms, patient records and hospital automation." },
            { icon: "🎓", title: "Education", desc: "E-learning portals, smart grading systems, student databases, and analytics dashboards." },
            { icon: "🏛️", title: "Government", desc: "Transparency dashboards, digital registries, AI-backed public services & reporting tools." },
            { icon: "🛍️", title: "E-commerce", desc: "Full-stack commerce solutions with smart recommendations, logistics & checkout flows." },
            { icon: "🚀", title: "Startups", desc: "MVPs, platform builds, growth tools — everything a fast-moving startup needs to scale." },
            { icon: "⛓️", title: "Blockchain", desc: "DApps, smart contracts, crypto platforms, and secure Web3 infrastructure development." },
            { icon: "📡", title: "Telecom", desc: "Telecom automation, network optimization, billing systems, and AI-powered customer solutions." },
          ].map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-[#00477B]">{industry.title}</h3>
              <p className="text-sm mt-2 text-gray-700">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
