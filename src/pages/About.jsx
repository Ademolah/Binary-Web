import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-20">
      {/* Animated Hero Section */}
      <section className="relative bg-[#00477B] text-white py-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/80 text-lg max-w-2xl mx-auto"
          >
            Pioneering the future of software and internet technology — empowering innovation across industries.
          </motion.p>
        </div>

        <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#50D6FE] via-transparent to-transparent animate-pulse blur-3xl"></div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white text-[#1e293b]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Binary was founded with one mission: to create transformative digital experiences that empower people, enterprises, and governments to unlock new possibilities. From our humble beginnings, we’ve evolved into a forward-thinking tech company committed to solving complex challenges through smart software and AI-driven solutions. Every line of code, every system we build is a step toward a more connected, intelligent, and efficient world.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
<section className="py-20 px-6 bg-white text-[#1e293b]">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Our Mission & Core Values
    </h2>
    <p className="text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
      At Binary, we are driven by principles that fuel our innovation, guide our culture, and define how we work with clients around the world.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* Innovation */}
      <div className="bg-[#F0F9FF] hover:bg-[#e0f2fe] transition rounded-xl p-6 shadow text-center">
        <div className="text-4xl mb-4">💡</div>
        <h3 className="font-bold text-xl mb-2">Innovation First</h3>
        <p className="text-gray-600 text-sm">
          We lead with cutting-edge technologies to deliver solutions that redefine what's possible.
        </p>
      </div>

      {/* Integrity */}
      <div className="bg-[#F0F9FF] hover:bg-[#e0f2fe] transition rounded-xl p-6 shadow text-center">
        <div className="text-4xl mb-4">🤝</div>
        <h3 className="font-bold text-xl mb-2">Integrity</h3>
        <p className="text-gray-600 text-sm">
          Our commitment to transparency and trust drives lasting client relationships.
        </p>
      </div>

      {/* Excellence */}
      <div className="bg-[#F0F9FF] hover:bg-[#e0f2fe] transition rounded-xl p-6 shadow text-center">
        <div className="text-4xl mb-4">🚀</div>
        <h3 className="font-bold text-xl mb-2">Engineering Excellence</h3>
        <p className="text-gray-600 text-sm">
          From frontend finesse to backend brilliance, we build systems that scale with precision.
        </p>
      </div>

      {/* Impact */}
      <div className="bg-[#F0F9FF] hover:bg-[#e0f2fe] transition rounded-xl p-6 shadow text-center">
        <div className="text-4xl mb-4">🌍</div>
        <h3 className="font-bold text-xl mb-2">Meaningful Impact</h3>
        <p className="text-gray-600 text-sm">
          Our software creates measurable value — for businesses, governments, and society.
        </p>
      </div>
    </div>
  </div>
</section>

{/* How We Work */}
<section className="bg-[#F9FBFC] py-20 px-6 text-center text-[#1e293b]">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      How We Work at Binary
    </h2>
    <p className="text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
      We follow a proven, client-focused process that ensures every solution we build is innovative, efficient, and built to scale.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* Discover */}
      <div className="bg-white hover:shadow-lg transition rounded-xl p-6 border border-gray-200">
        <div className="text-4xl mb-4">🔍</div>
        <h3 className="font-semibold text-xl mb-2">1. Discover</h3>
        <p className="text-gray-600 text-sm">
          We begin by understanding your business goals, challenges, and technical needs.
        </p>
      </div>

      {/* Design */}
      <div className="bg-white hover:shadow-lg transition rounded-xl p-6 border border-gray-200">
        <div className="text-4xl mb-4">🎨</div>
        <h3 className="font-semibold text-xl mb-2">2. Design</h3>
        <p className="text-gray-600 text-sm">
          Our team translates insights into detailed wireframes, user flows, and system architecture.
        </p>
      </div>

      {/* Develop */}
      <div className="bg-white hover:shadow-lg transition rounded-xl p-6 border border-gray-200">
        <div className="text-4xl mb-4">🛠️</div>
        <h3 className="font-semibold text-xl mb-2">3. Develop</h3>
        <p className="text-gray-600 text-sm">
          We code with precision using modern tech stacks, focusing on performance and scalability.
        </p>
      </div>

      {/* Deploy */}
      <div className="bg-white hover:shadow-lg transition rounded-xl p-6 border border-gray-200">
        <div className="text-4xl mb-4">🚀</div>
        <h3 className="font-semibold text-xl mb-2">4. Deploy & Support</h3>
        <p className="text-gray-600 text-sm">
          We launch securely, monitor systems, and provide ongoing support and optimization.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Final Call to Action */}
<section className="bg-gradient-to-r from-[#00477B] via-[#50D6FE] to-[#00477B] text-white py-20 px-6 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Ready to Build the Future with Binary?
    </h2>
    <p className="text-white/90 mb-8">
      Let’s collaborate to engineer solutions that move industries forward. From strategy to code, we’re your innovation partner.
    </p>
    <a
      href="/contact"
      className="inline-block bg-white text-[#00477B] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#C1F2FF] transition duration-300"
    >
      Start a Project
    </a>
  </div>
</section>

    </div>
  );
};

export default About;
