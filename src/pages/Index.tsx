import heroImage from "@/assets/hero-machine.png";

const Index = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Full hero background image */}
      <img
        src={heroImage}
        alt="Paper Machinery Corporation - Model Machine"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for visibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Social icons */}
      <div className="absolute top-[4%] right-[4%] z-20 flex items-center gap-6">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:scale-110 transition-transform"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
            className="w-8 h-8"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="hover:scale-110 transition-transform"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733646.png"
            alt="YouTube"
            className="w-8 h-8"
          />
        </a>
      </div>

      {/* Read More button */}
      <a
        href="#products"
        className="absolute top-[52%] left-[4%] z-20 inline-block bg-sky-500 text-white px-6 py-3 rounded font-semibold hover:bg-sky-600 transition"
      >
        Read More
      </a>
    </div>
  );
};

export default Index;
