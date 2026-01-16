import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Calendar, Sparkles } from "lucide-react";

const hobbies = [
  {
    icon: Code,
    title: "Competitive Coding",
    description: "Solving algorithmic challenges on platforms like LeetCode and CodeForces to sharpen problem-solving skills.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Calendar,
    title: "Event Coordination",
    description: "Organizing and managing technical events, workshops, and coding competitions at college.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Learning New Tech",
    description: "Constantly exploring emerging technologies, frameworks, and best practices in software development.",
    color: "from-purple-500 to-pink-500",
  },
];

const HobbiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
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
            <h2 className="text-sm font-mono text-primary mb-2">{"// HOBBIES"}</h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              Beyond <span className="text-gradient">Code</span>
            </h3>
          </div>

          {/* Hobbies Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="glass-card rounded-xl p-8 text-center group hover:neon-border transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${hobby.color} flex items-center justify-center mx-auto mb-6 group-hover:animate-float`}
                >
                  <hobby.icon size={32} className="text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {hobby.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {hobby.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HobbiesSection;
