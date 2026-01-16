import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <img
  src={`${import.meta.env.BASE_URL}profilepic.jpeg`}
  alt="Mohan Kumar"
  className="w-8 h-8 rounded-full object-cover border border-primary shadow-[0_0_10px_rgba(34,211,238,0.6)]"
/>


          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built by Mohan Kumar © {currentYear}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Mohan130306"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohan-kumar-a-4a6a9a2b7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
