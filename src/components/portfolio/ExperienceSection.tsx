import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    icon: Briefcase,
    title: "ServiceNow – Virtual Internship",
    organization: "Virtual Internship",
    period: "Feb 2026 – Apr 2026",
    description:
      "Learned ServiceNow fundamentals and basic administration, including user and role management. Worked on ITSM processes like incident management and service request workflows.",
  },
  {
    type: "work",
    icon: Briefcase,
    title: "Viruzverse – MERN Internship",
    organization: "ViruzVerse Solutions",
    period: "Dec 2025 – Jan 2026",
    description:
      "Completed a MERN stack internship, gaining hands-on experience in full-stack web development. Built an expense tracker application with CRUD operations and responsive UI.",
  },
];

const education = [
  {
    type: "education",
    icon: GraduationCap,
    title: "Bachelor of Engineering in Computer Science",
    organization: "V S B College of Engineering Technical Campus, Coimbatore",
    period: "2023 – 2027",
    description: "CGPA: 8.67 / 10",
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "Class XII (Higher Secondary)",
    organization: "Nagamani Ammal Matric Higher Secondary School, [Board - State Board]",
    period: "2022 – 2023",
    description: "Percentage: 81.5% (489/600)",
  },
];

const rightSideItems = [];

const certifications = [
  {
    icon: Award,
    title: "Amazon Junior Software Developer",
    issuer: "Coursera",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Award,
    title: "Data Science & Analytics",
    issuer: "Future Interns",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Award,
    title: "Android Development",
    issuer: "Prodigy InfoTech",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Award,
    title: "Machine Learning",
    issuer: "Codsoft",
    color: "from-emerald-500 to-lime-500",
  },
  {
    icon: Award,
    title: "Crash Course on Python",
    issuer: "Coursera",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Secure Computing",
    issuer: "Brain Trainers Academy",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Big Data Computing, Edge Computing",
    issuer: "NPTEL",
    color: "from-purple-500 to-pink-500",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
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
            <h2 className="text-sm font-mono text-primary mb-2">{"// EXPERIENCE & EDUCATION"}</h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              My <span className="text-gradient">Journey</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Timeline */}
            <div>
              <h4 className="font-mono text-primary mb-8 flex items-center gap-2">
                <Briefcase size={18} />
                Experience & Education
              </h4>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

                {[...experiences, ...education].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="relative pl-12 pb-8 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <item.icon size={14} className="text-primary" />
                    </div>

                    <div className="glass-card rounded-xl p-6 hover:neon-border transition-all duration-300">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Calendar size={12} />
                        {item.period}
                      </div>
                      <h5 className="font-semibold text-lg mb-1">{item.title}</h5>
                      <p className="text-primary text-sm mb-3">{item.organization}</p>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications (right column) */}
            <div>
              <h4 className="font-mono text-primary mb-8 flex items-center gap-2">
                <Award size={18} />
                Certifications
              </h4>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="glass-card rounded-xl p-6 flex items-center gap-4 group hover:neon-border transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <cert.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold group-hover:text-primary transition-colors">
                        {cert.title}
                      </h5>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
