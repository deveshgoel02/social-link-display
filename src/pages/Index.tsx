export default function Index() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://go.demo.pardot.com/l/328763/2026-01-04/33wxbp/328763/1767553153lwWYM1NZ/Gemini_Generated_Image_wchboywchboywchb_clean.png')",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Social Icons */}
      <div className="absolute top-6 right-6 z-20 flex gap-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
            className="w-8 h-8 hover:scale-110 transition"
          />
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
            alt="LinkedIn"
            className="w-8 h-8 hover:scale-110 transition"
          />
        </a>

        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733646.png"
            alt="YouTube"
            className="w-8 h-8 hover:scale-110 transition"
          />
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 py-32 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          MODEL <span className="text-sky-400">MACHINE</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-200">
          High-performance industrial machinery engineered for precision,
          efficiency, and reliability.
        </p>

        <button className="mt-8 rounded bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-600 transition">
          Read More
        </button>
      </div>
    </div>
  );
}
