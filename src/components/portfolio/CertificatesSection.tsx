import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    id: 1,
    title: "MERN Stack Internship",
    issuer: "Viruzverse Solutions",
    date: "Jan 2026",
    image: "/certificates/viruzverse.png",
    documentLink: "/certificates/Viruzverse Internship Mohan Kumar.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "ServiceNow Virtual Internship",
    issuer: "ServiceNow",
    date: "Apr 2026",
    image: "/certificates/service-now.pdf",
    documentLink: "/certificates/Service Now Virtual Internship - Mohan Kumar.pdf",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    issuer: "Codsoft",
    date: "2025",
    image: "/certificates/codsoft.pdf",
    documentLink: "/certificates/Codsoft Machine Learning.pdf",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "Data Science & Analytics",
    issuer: "Future Interns",
    date: "2025",
    image: "/certificates/future-interns.pdf",
    documentLink: "/certificates/Future Interns Data Science.pdf",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 5,
    title: "Android Development",
    issuer: "Prodigy InfoTech",
    date: "2025",
    image: "/certificates/prodigy.pdf",
    documentLink: "/certificates/Prodigy Android Development.pdf",
    color: "from-indigo-500 to-violet-500",
  },
  {
    id: 6,
    title: "Amazon Junior Software Developer",
    issuer: "Coursera",
    date: "2025",
    image: "/certificates/coursera-aws.pdf",
    documentLink: "/certificates/Coursera Amazon Junior Software Developer AXMDG5ZDNUMR.pdf",
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 7,
    title: "Full Stack Web Developer",
    issuer: "Coursera",
    date: "2025",
    image: "/certificates/coursera-fullstack.pdf",
    documentLink: "/certificates/Coursera Full Stack Web Developer E03383MJOEIR.pdf",
    color: "from-pink-500 to-red-500",
  },
  {
    id: 8,
    title: "Data Structures and Algorithms",
    issuer: "Coursera",
    date: "2025",
    image: "/certificates/coursera-dsa.pdf",
    documentLink: "/certificates/Coursera Data Structures and Algorithm S9VEFUJBVK7B.pdf",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 9,
    title: "Database Management with Java and SQL",
    issuer: "Coursera",
    date: "2025",
    image: "/certificates/coursera-db.pdf",
    documentLink: "/certificates/Coursera Database Management with Java and SQL 1LKIPUH8MBIL.pdf",
    color: "from-lime-500 to-green-500",
  },
  {
    id: 10,
    title: "Introduction to Software Development",
    issuer: "Coursera",
    date: "2025",
    image: "/certificates/coursera-intro.pdf",
    documentLink: "/certificates/Coursera Introduction to Software Development IL8RPHWFFCLW.pdf",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 11,
    title: "Programming with Java",
    issuer: "Coursera",
    date: "2025",
    image: "/certificates/coursera-java.pdf",
    documentLink: "/certificates/Coursera Programming with Java71C2RXELNZ6F.pdf",
    color: "from-red-500 to-pink-500",
  },
  {
    id: 12,
    title: "Application Development",
    issuer: "Coursera",
    date: "2025",
    image: "/certificates/coursera-appdev.pdf",
    documentLink: "/certificates/Coursera Application Development KJ8H7BW27G05.pdf",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 13,
    title: "Crash Course on Python",
    issuer: "Coursera",
    date: "2025",
    image: "/certificates/coursera-python.pdf",
    documentLink: "/certificates/Coursera Crash Course on Python IYNPT7NLXU5Q.pdf",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 14,
    title: "Generative AI in Software Development",
    issuer: "Coursera",
    date: "2025",
    image: "/certificates/coursera-genai.pdf",
    documentLink: "/certificates/Coursera Generative AI in Software Development GLAOUV1UK7FAI.pdf",
    color: "from-emerald-500 to-cyan-500",
  },
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[0] | null>(null);

  return (
    <section id="certificates" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
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
            <h2 className="text-sm font-mono text-primary mb-2">{"// CREDENTIALS"}</h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              My <span className="text-gradient">Certifications</span>
            </h3>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of professional certifications and credentials earned through various online courses and internships
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div
                  className="group h-full glass-card rounded-xl p-6 hover:neon-border transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  onClick={() => setSelectedCertificate(cert)}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Award size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-primary text-sm mb-1">{cert.issuer}</p>
                    <p className="text-muted-foreground text-sm">{cert.date}</p>
                  </div>

                  {/* View Button */}
                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">View Certificate</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Preview Dialog */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedCertificate?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-muted rounded-lg flex items-center justify-center overflow-hidden min-h-[500px]">
              {selectedCertificate?.documentLink.endsWith(".pdf") ? (
                <iframe
                  src={`${selectedCertificate?.documentLink}#toolbar=0`}
                  type="application/pdf"
                  className="w-full h-[600px] rounded-lg"
                  title={selectedCertificate?.title}
                />
              ) : (
                <img
                  src={selectedCertificate?.documentLink}
                  alt={selectedCertificate?.title}
                  className="w-full h-full object-contain max-h-[600px]"
                />
              )}
            </div>
            <div className="space-y-2">
              <p>
                <strong>Issuer:</strong> {selectedCertificate?.issuer}
              </p>
              <p>
                <strong>Date:</strong> {selectedCertificate?.date}
              </p>
            </div>
            <a
              href={selectedCertificate?.documentLink}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button className="w-full">
                <ExternalLink size={16} className="mr-2" />
                Download Certificate
              </Button>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificatesSection;
