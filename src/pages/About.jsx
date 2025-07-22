import React from 'react';

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      <h2 className="text-4xl font-bold text-[#00477B] mb-4">About Binary</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Binary is a forward-thinking software and internet technology company committed to powering innovation across industries. 
        From AI-driven platforms to enterprise applications, we design, develop, and deploy solutions that deliver real-world impact 
        — helping private individuals, startups, governments, and global enterprises solve complex challenges through technology.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div>
          <h3 className="text-2xl font-semibold text-[#00477B] mb-2">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To empower innovation through cutting-edge software solutions that redefine what’s possible in industries ranging from 
            finance and healthcare to education and government infrastructure.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#00477B] mb-2">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To be a global leader in intelligent, scalable technologies — enabling a smarter, more connected future.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-[#00477B] mb-2">Core Values</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Innovation at the core of everything we do</li>
          <li>Client-first approach across all partnerships</li>
          <li>Transparency and long-term accountability</li>
          <li>Global perspective, local impact</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
