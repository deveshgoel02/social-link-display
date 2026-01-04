import heroImage from "@/assets/hero-machine.png";

const Index = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Paper Machinery Corporation - Model Machine"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Social Icons */}
      <div className="absolute top-[4%] right-[4%] z-20 flex items-center gap-4 bg-black/40 px-4 py-2 rounded-md">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:scale-110 transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
            className="w-6 h-6"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-110 transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
            alt="LinkedIn"
            className="w-6 h-6"
          />
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="hover:scale-110 transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733646.png"
            alt="YouTube"
            className="w-6 h-6"
          />
        </a>
      </div>

      {/* Read More Button */}
      <a
        href="#products"
        className="absolute top-[52%] left-[4%] z-20 bg-sky-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-sky-600 transition"
      >
        Read More
      </a>
    </div>
  );
};

export default Index;
