delete my projectdelete my projectimport heroImage from "@/assets/hero-machine.png";

const Index = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Full hero background image */}
      <img
        src={heroImage}
        alt="Paper Machinery Corporation - Model Machine"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Clickable social icons overlay - positioned over image icons */}
      <div className="absolute top-[4%] right-[4%] z-20 flex items-center gap-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Facebook"
        />
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="LinkedIn"
        />
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-10 cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="YouTube"
        />
      </div>

      {/* Clickable Read More button overlay */}
      <a
        href="#products"
        className="absolute top-[52%] left-[4%] w-28 h-10 z-20 cursor-pointer hover:opacity-80 transition-opacity"
        aria-label="Read More"
      />
    </div>
  );
};

export default Index;
