import { Facebook, Linkedin, Youtube } from "lucide-react";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-muted/50 hover:bg-muted transition-colors rounded"
        aria-label="Facebook"
      >
        <Facebook className="w-5 h-5 text-foreground" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-muted/50 hover:bg-muted transition-colors rounded"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5 text-foreground" />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-youtube hover:bg-youtube-hover transition-colors rounded"
        aria-label="YouTube"
      >
        <Youtube className="w-5 h-5 text-white" />
      </a>
    </div>
  );
};

export default SocialIcons;
