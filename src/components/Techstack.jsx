import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaDocker, FaPython, FaAws, 
} from "react-icons/fa";
import {
  SiTensorflow, SiPytorch, SiMongodb, SiPostgresql, SiTailwindcss,
  SiNextdotjs, SiKubernetes, SiVercel, SiFirebase, SiExpress, SiGithubactions,
  SiOpenai, SiHuggingface,
} from "react-icons/si";

const techStack = [
  {
    title: "AI & Machine Learning",
    icons: [SiTensorflow, SiPytorch, SiOpenai, SiHuggingface, FaPython],
  },
  {
    title: "Frontend",
    icons: [FaReact, SiNextdotjs, SiTailwindcss],
  },
  {
    title: "Backend",
    icons: [FaNodeJs, SiExpress, SiMongodb, SiPostgresql],
  },
  {
    title: "DevOps & Cloud",
    icons: [FaDocker, SiKubernetes, FaAws, SiVercel, SiFirebase, SiGithubactions],
  },
];

const TechStack = () => (
  <section className="bg-[#F0F9FF] py-20 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#00477B] mb-8"
      >
        Built With Trusted & Scalable Technologies
      </motion.h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
        We use modern tools, frameworks, and cloud infrastructure to power every Binary product — ensuring performance, reliability, and innovation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {techStack.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-[#00477B] font-semibold mb-4">{group.title}</h3>
            <div className="flex justify-center flex-wrap gap-4 text-3xl text-[#00477B]">
              {group.icons.map((Icon, i) => (
                <Icon key={i} className="hover:scale-110 transition-transform duration-300" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
