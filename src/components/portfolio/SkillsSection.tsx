import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "HTML5", icon: "🌐"},
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "💛" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "💚"},
      { name: "MongoDB", icon: "🍃"},
      { name: "JWT Auth", icon: "🔐"},
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "DSA", icon: "🧮"},
      { name: "OOPs", icon: "🏗️"},
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "📊"},
      { name: "VS Code", icon: "💻"},
      { name: "IntelliJ IDEA", icon: "🧠"},
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-2">{"// SKILLS"}</h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              My <span className="text-gradient">Tech Stack</span>
            </h3>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <h4 className="font-mono text-primary text-sm mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                  {category.title}
                </h4>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <div className="flex items-center gap-3 py-1">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium tracking-wide">
                          {skill.name}
                        </span>
                      </div>

                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
