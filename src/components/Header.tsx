
import { Twitter, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-neon-green font-mono">zerovc.xyz</span>
        <div className="flex items-center gap-4">
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
