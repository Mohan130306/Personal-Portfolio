import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Layout,
  Terminal,
  Database,
  GitBranch,
  Monitor,
  Zap,
  Globe,
  Sparkles,
} from "lucide-react";

const skills = [
  { name: "React", icon: Code2, color: "from-[#61dafb] to-[#22d3ee]" },
  { name: "HTML5", icon: Globe, color: "from-[#f06529] to-[#fb923c]" },
  { name: "CSS3", icon: Layout, color: "from-[#2965f1] to-[#60a5fa]" },
  { name: "JavaScript", icon: Zap, color: "from-[#f7df1e] to-[#eab308]" },
  { name: "Node.js", icon: Terminal, color: "from-[#3c873a] to-[#4ade80]" },
  { name: "MongoDB", icon: Database, color: "from-[#00a86b] to-[#34d399]" },
  { name: "Git", icon: GitBranch, color: "from-[#f05032] to-[#fb7185]" },
  { name: "VS Code", icon: Monitor, color: "from-[#0a84ff] to-[#38bdf8]" },
  { name: "IntelliJ IDEA", icon: Sparkles, color: "from-[#8250df] to-[#a78bfa]" },
  { name: "Fast Dev", icon: Zap, color: "from-[#facc15] to-[#f97316]" },
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

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -10 }}
                  className="relative overflow-hidden rounded-full border border-white/10 bg-card/80 p-6 text-center shadow-[0_0_30px_rgba(14,165,233,0.12)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(14,165,233,0.25)]"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 via-transparent to-slate-900/10 blur-2xl" />
                  <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-slate-950/90 mx-auto mb-4 shadow-[0_0_30px_rgba(56,189,248,0.15)]">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${skill.color} from-opacity-20 to-opacity-20`}>
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                  <p className="relative z-10 text-sm font-medium tracking-wide text-white">
                    {skill.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
