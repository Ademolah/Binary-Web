import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaDocker, FaPython, FaAws, FaSwift,
} from "react-icons/fa";
import {
  SiTensorflow, SiPytorch, SiMongodb, SiPostgresql, SiTailwindcss,
  SiNextdotjs, SiKubernetes, SiVercel, SiFirebase, SiExpress, SiGithubactions,
  SiOpenai, SiHuggingface, SiFlutter, SiIonic, SiKotlin,
} from "react-icons/si";

const techStack = [
  { icon: SiTensorflow, name: "TensorFlow" },
  { icon: SiPytorch, name: "PyTorch" },
  { icon: SiOpenai, name: "OpenAI" },
  { icon: SiHuggingface, name: "Hugging Face" },
  { icon: FaPython, name: "Python" },

  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },

  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },

  { icon: FaReact, name: "React Native" },
  { icon: SiFlutter, name: "Flutter" },
  { icon: FaSwift, name: "Swift" },
  { icon: SiKotlin, name: "Kotlin" },
  { icon: SiIonic, name: "Ionic" },

  { icon: FaDocker, name: "Docker" },
  { icon: SiKubernetes, name: "Kubernetes" },
  { icon: FaAws, name: "AWS" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiGithubactions, name: "GitHub Actions" },
];

const TechStack = () => (
  <section className="bg-[#F0F9FF] py-20 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#00477B] mb-6"
      >
        Built With Trusted & Scalable Technologies
      </motion.h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
        We use modern tools, frameworks, and cloud infrastructure to power every Binary product — ensuring performance, reliability, and innovation.
      </p>

      {/* Scrolling row */}
      <div className="overflow-hidden">
        <div className="flex w-max animate-scroll space-x-12 px-4">
          {techStack.map(({ icon: Icon, name }, index) => (
            <div key={index} className="flex flex-col items-center text-[#00477B] w-20">
              <Icon className="text-4xl hover:scale-110 transition-transform duration-300 mb-1" />
              <span className="text-xs font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TechStack;
