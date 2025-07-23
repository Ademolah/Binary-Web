import React from 'react';
import CanvasBackground from '../components/CanvasBackground';
import { Typewriter } from 'react-simple-typewriter';
import TechStack from '../components/Techstack';
import { motion } from 'framer-motion';
import IndustriesSection from '../components/IndustriesSection';

const Home = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden bg-black text-white">
        <CanvasBackground />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#50D6FE]">
            <Typewriter
              words={['Empowering Innovation.', 'Engineering Intelligent Software.', 'Building the Future with Code.']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h1>

            <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="mt-6 max-w-2xl text-white text-lg sm:text-xl md:text-2xl font-light leading-relaxed tracking-wide text-center bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg"
    >
    <span className="text-[#50D6FE] font-semibold">At Binary</span>, we engineer <span className="text-[#50D6FE] font-semibold">world-class digital intelligence</span> fusing <span className="text-[#50D6FE]">AI</span>, <span className="text-[#50D6FE]">cloud</span>, and <span className="text-[#50D6FE]">code</span> to power the next generation of global innovation.
    </motion.p>

        </div>
      </div>

      {/* ✅ Insert "Why Binary?" Section here */}
      <section className="bg-white py-20 px-6 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00477B] mb-4">
            Why Choose Binary?
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We’re not just a tech company. We’re your innovation partner building future-proof solutions with excellence, speed, and strategy.
          </p>

          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {/* Card 1 */}
            <div className="p-6 bg-[#F9FAFB] rounded-lg shadow hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-[#00477B] mb-2">AI-Driven Solutions</h3>
              <p className="text-sm text-gray-700">
                We integrate advanced AI to help clients automate, predict, and optimize their operations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-[#F9FAFB] rounded-lg shadow hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-[#00477B] mb-2">Custom-Built Platforms</h3>
              <p className="text-sm text-gray-700">
                Every project is tailored from SaaS platforms to scalable APIs, with enterprise-grade architecture.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-[#F9FAFB] rounded-lg shadow hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-[#00477B] mb-2">Cross-Industry Expertise</h3>
              <p className="text-sm text-gray-700">
                We’ve built for finance, healthcare, education, public sector, and startups, globally.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-[#F9FAFB] rounded-lg shadow hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-[#00477B] mb-2">Partnership Mentality</h3>
              <p className="text-sm text-gray-700">
                We don’t just deliver, we collaborate, support, and scale with your vision long-term.
              </p>
            </div>
          </div>
        </div>
      </section>
   
   {/* Industry we serve */}


    <IndustriesSection/>



                    {/* Our Process Section */}
            <section className="bg-white py-20 px-6 text-gray-800">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#00477B] mb-4">
                Our Process
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                We partner with clients from idea to launch, providing hands-on support and transparency every step of the way.
                </p>

                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {/* Step 1 */}
                <div className="relative p-6 bg-[#F9FAFB] rounded-lg shadow hover:shadow-md transition-all">
                    <div className="text-2xl font-bold text-white bg-[#00477B] w-10 h-10 flex items-center justify-center rounded-full mb-4 mx-auto">
                    1
                    </div>
                    <h3 className="text-lg font-semibold text-[#00477B] mb-2">Consult & Discover</h3>
                    <p className="text-sm text-gray-700">
                    We understand your goals, users, and challenges to define the best-fit solution.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="relative p-6 bg-[#F9FAFB] rounded-lg shadow hover:shadow-md transition-all">
                    <div className="text-2xl font-bold text-white bg-[#00477B] w-10 h-10 flex items-center justify-center rounded-full mb-4 mx-auto">
                    2
                    </div>
                    <h3 className="text-lg font-semibold text-[#00477B] mb-2">Design & Architect</h3>
                    <p className="text-sm text-gray-700">
                    We design intuitive interfaces and plan robust system architecture to scale.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="relative p-6 bg-[#F9FAFB] rounded-lg shadow hover:shadow-md transition-all">
                    <div className="text-2xl font-bold text-white bg-[#00477B] w-10 h-10 flex items-center justify-center rounded-full mb-4 mx-auto">
                    3
                    </div>
                    <h3 className="text-lg font-semibold text-[#00477B] mb-2">Build & Test</h3>
                    <p className="text-sm text-gray-700">
                    Our dev team brings the vision to life with agile sprints, testing, and reviews.
                    </p>
                </div>

                {/* Step 4 */}
                <div className="relative p-6 bg-[#F9FAFB] rounded-lg shadow hover:shadow-md transition-all">
                    <div className="text-2xl font-bold text-white bg-[#00477B] w-10 h-10 flex items-center justify-center rounded-full mb-4 mx-auto">
                    4
                    </div>
                    <h3 className="text-lg font-semibold text-[#00477B] mb-2">Launch & Support</h3>
                    <p className="text-sm text-gray-700">
                    We deploy, monitor, and support your product, iterating with you as you scale.
                    </p>
                </div>
                </div>
            </div>
            </section>
                            {/* Case Studies Section */}
                            {/* Our Work in Action Section */}
                    {/* Our Work in Action Section (with icons) */}
        <section
        className="py-20 px-6 text-white bg-gradient-to-r from-[#00477B] via-[#50D6FE] to-[#00477B] bg-[length:200%_200%] animate-gradient-x"
        >
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Work in Action
            </h2>
            <p className="text-white/90 mb-12 max-w-2xl mx-auto">
            Explore a few of the powerful solutions we’ve built across industries. From idea to execution, Binary delivers impact.
            </p>

            <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
            {/* Project 1 */}
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow hover:shadow-lg transition-all text-left">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-bold text-white mb-2">FinTech Wallet Platform</h3>
                <p className="text-sm text-white/80 mb-3">
                Built a secure digital wallet & real-time transaction system with KYC, fraud detection, and merchant API support.
                </p>
                <span className="text-xs text-[#C1F2FF] font-medium">Client: NovaPay</span>
            </div>

            {/* Project 2 */}
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow hover:shadow-lg transition-all text-left">
                <div className="text-4xl mb-4">🧬</div>
                <h3 className="text-xl font-bold text-white mb-2">AI Health Diagnostics</h3>
                <p className="text-sm text-white/80 mb-3">
                Developed a machine-learning tool to predict patient health outcomes based on vital data and medical history.
                </p>
                <span className="text-xs text-[#C1F2FF] font-medium">Client: NeuroPharmAI</span>
            </div>

            {/* Project 3 */}
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow hover:shadow-lg transition-all text-left">
                <div className="text-4xl mb-4">🏫</div>
                <h3 className="text-xl font-bold text-white mb-2">University Portal Suite</h3>
                <p className="text-sm text-white/80 mb-3">
                Created a robust academic platform with student portals, staff dashboards, course management & results automation.
                </p>
                <span className="text-xs text-[#C1F2FF] font-medium">Client: Baze University</span>
            </div>
            </div>
        </div>
        </section>

        <TechStack/>

        {/* Trusted by Brands Section */}

        {/* Trusted by Brands Section */}
        {/* Trusted by Brands Section */}
        <section className="bg-white py-20 px-6 text-center overflow-hidden">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00477B] mb-4">
            Trusted by Forward-Thinking Brands
            </h2>
            <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            We collaborate with businesses, institutions, and government partners to engineer smart, scalable software solutions.
            </p>

            {/* Scrolling container */}
            <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll space-x-16 w-max">
                {/* Logos */}
                {[
                { src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png", alt: "Mastercard" },
                { src: "https://cdn.worldvectorlogo.com/logos/ibm.svg", alt: "IBM" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg", alt: "MIT" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg", alt: "NVIDIA" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png", alt: "Google" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg", alt: "Microsoft" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", alt: "Oracle" },
                { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", alt: "AWS" },
                ].map((logo, index) => (
                <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 grayscale hover:grayscale-0 transition duration-300"
                />
                ))}
            </div>
            </div>
        </div>
        </section>

            {/* Final Call to Action Section */}
        <section className="bg-gradient-to-r from-[#00477B] via-[#50D6FE] to-[#00477B] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Build Something Incredible Together
            </h2>
            <p className="text-white/90 mb-8">
            Whether you're a startup, enterprise, or public institution — Binary is ready to turn your vision into scalable, secure, and smart technology.
            </p>
            <a
            href="/contact"
            className="inline-block bg-white text-[#00477B] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#C1F2FF] transition duration-300"
            >
            Get Started
            </a>
        </div>
        </section>



    </>
  );
};

export default Home;
