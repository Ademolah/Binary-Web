import React from 'react';
import CanvasBackground from '../components/CanvasBackground';
import { Typewriter } from 'react-simple-typewriter';

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

          <p className="mt-4 max-w-xl text-base sm:text-lg md:text-xl text-white">
            Binary builds intelligent, scalable digital solutions for startups, enterprises, and governments.
          </p>
        </div>
      </div>

      {/* ✅ Insert "Why Binary?" Section here */}
      <section className="bg-white py-20 px-6 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00477B] mb-4">
            Why Choose Binary?
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We’re not just a tech company. We’re your innovation partner — building future-proof solutions with excellence, speed, and strategy.
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
                Every project is tailored — from SaaS platforms to scalable APIs, with enterprise-grade architecture.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-[#F9FAFB] rounded-lg shadow hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-[#00477B] mb-2">Cross-Industry Expertise</h3>
              <p className="text-sm text-gray-700">
                We’ve built for finance, healthcare, education, public sector, and startups — globally.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-[#F9FAFB] rounded-lg shadow hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-[#00477B] mb-2">Partnership Mentality</h3>
              <p className="text-sm text-gray-700">
                We don’t just deliver — we collaborate, support, and scale with your vision long-term.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
