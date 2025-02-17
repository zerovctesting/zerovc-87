
import { Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <section className="bg-dark text-white py-20 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold font-mono leading-tight">
          Join the future of
          <span className="text-neon-green"> venture building.</span>
        </h2>
        
        <div className="flex justify-center items-center gap-6">
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
