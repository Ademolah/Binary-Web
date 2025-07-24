import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGlobe, FaHandshake, FaUserFriends } from "react-icons/fa";

const Career = () => {
  return (
    <div className="bg-[#F0F9FF] min-h-screen pt-24 pb-16 px-6 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#00477B] mb-4">
          Build the Future With Us
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          At Binary, we're more than a tech company, we're a community of innovators, engineers, and dreamers crafting intelligent systems that shape the digital future.
        </p>
      </motion.section>

      {/* Core Values Section */}
      <section className="bg-white shadow-lg rounded-2xl p-10 max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#00477B] mb-12 text-center"
        >
          Our Culture & Values
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[{
            icon: <FaLaptopCode className="text-4xl text-[#00477B]" />,
            title: "Innovation-First",
            desc: "We build boldly, experiment rapidly, and use emerging tech to solve critical problems."
          }, {
            icon: <FaUserFriends className="text-4xl text-[#00477B]" />,
            title: "People-Centered",
            desc: "We create inclusive, growth-focused environments that empower every teammate."
          }, {
            icon: <FaGlobe className="text-4xl text-[#00477B]" />,
            title: "Global Thinking",
            desc: "We build with scale in mind — solutions that reach and serve markets worldwide."
          }, {
            icon: <FaHandshake className="text-4xl text-[#00477B]" />,
            title: "True Partnership",
            desc: "We collaborate transparently, treat each other with respect, and grow together."
          }].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-[#F9FAFB] rounded-xl p-6 text-center hover:shadow-xl transition-all"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl text-[#00477B] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#00477B] mb-12 text-center"
        >
          Open Roles
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Frontend Engineer (React + Tailwind)",
              location: "Remote / Hybrid - Abuja, Nigeria",
              type: "Full Time",
              description: "You’ll build responsive, high-performance user interfaces for scalable web platforms. You will collaborate with designers and backend engineers to deliver seamless UX across devices.",
              responsibilities: [
                "Build UIs with React, TailwindCSS, and modern JS frameworks",
                "Translate Figma designs into pixel-perfect components",
                "Ensure mobile-first, responsive layouts",
                "Optimize for speed and accessibility"
              ],
              mailSubject: "Frontend Engineer Application"
            },
            {
              title: "Backend Engineer (Nest Js + Prisma + Neon)",
              location: "Remote / Hybrid - Lagos, Nigeria",
              type: "Full Time",
              description: "You will design and maintain powerful backend systems, microservices, and API layers that support our real-time apps and platforms.",
              responsibilities: [
                "Develop scalable REST and GraphQL APIs",
                "Work with MongoDB, Redis, Neon and PostgreSQL databases",
                "Implement security, authentication, and logging standards",
                "Collaborate on DevOps and CI/CD practices",
                "Implement API monitoring tools like Grafana, Prometheus"
              ],
              mailSubject: "Backend Engineer Application"
            },
            {
              title: "AI Engineer (NLP / LLMs)",
              location: "Remote / Global",
              type: "Full Time",
              description: "You will research, build, and fine-tune machine learning models that solve real-world problems using natural language processing and generative AI.",
              responsibilities: [
                "Train transformer-based models (GPT, BERT, etc.)",
                "Deploy production-grade AI pipelines",
                "Work with vector databases and embeddings",
                "Build chatbots and automated AI workflows"
              ],
              mailSubject: "AI Engineer Application"
            },
            {
              title: "Product Designer (UX/UI)",
              location: "Remote / Hybrid",
              type: "Contract",
              description: "You will design sleek, usable interfaces that align with brand values and customer experience. You'll own end-to-end design delivery across Binary's platforms.",
              responsibilities: [
                "Design wireframes, flows, and high-fidelity screens",
                "Conduct user research and usability testing",
                "Collaborate with developers and stakeholders",
                "Maintain design consistency across products"
              ],
              mailSubject: "Product Designer Application"
            }
          ].map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-bold text-[#00477B] mb-2">{role.title}</h3>
              <p className="text-sm text-gray-600 mb-1">📍 {role.location}</p>
              <p className="text-sm text-gray-600 mb-3">🕒 {role.type}</p>
              <p className="text-sm text-gray-700 mb-4">{role.description}</p>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mb-5">
                {role.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
              <a
                href={`mailto:binaryhq@outlook.com?subject=${encodeURIComponent(role.mailSubject)}&body=Hi%20Binary%20Team%2C%0D%0A%0D%0AI%27d%20like%20to%20apply%20for%20the%20${encodeURIComponent(role.title)}%20role.%20Please%20find%20my%20resume%20attached.`}
                className="inline-block bg-[#00477B] text-white font-medium px-5 py-2 rounded-md hover:bg-[#00345d] transition"
              >
                Apply Now
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Career;
