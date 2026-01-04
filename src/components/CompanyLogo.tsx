const CompanyLogo = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Logo circle with PM letters */}
      <div className="relative w-12 h-12">
        <svg viewBox="0 0 64 64" className="w-full h-full">
          {/* Outer circle */}
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          {/* Inner PM stylized letters */}
          <text
            x="32"
            y="40"
            textAnchor="middle"
            fill="white"
            fontSize="22"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
            fontStyle="italic"
          >
            PM
          </text>
        </svg>
      </div>
      {/* Company name text */}
      <div className="flex flex-col leading-none">
        <span className="text-white font-bold text-sm tracking-wide">PAPER</span>
        <span className="text-white font-bold text-sm tracking-wide">MACHINERY</span>
        <span className="text-primary font-bold text-sm tracking-wide">CORPORATION</span>
      </div>
    </div>
  );
};

export default CompanyLogo;
