import SocialIcons from "@/components/SocialIcons";
import CompanyLogo from "@/components/CompanyLogo";
import machineImage from "@/assets/hero-machine.png";

const Index = () => {
  return (
    <div className="min-h-screen h-screen bg-background relative overflow-hidden pb-8">
      {/* Social Icons - Top Right */}
      <div className="absolute top-6 right-8 z-20">
        <SocialIcons />
      </div>

      {/* Full blue rectangle behind the machine area */}
      <div 
        className="absolute top-0 right-0 h-full z-0"
        style={{ 
          backgroundColor: 'hsl(207, 90%, 54%)',
          width: '60%'
        }}
      />

      {/* Blue diagonal triangle on the left - matching original */}
      <svg
        className="absolute inset-0 w-full h-full z-[1]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,35 50,0 50,100 0,100"
          fill="hsl(207, 90%, 54%)"
        />
      </svg>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center pl-8 md:pl-16 lg:pl-24 max-w-[45%]">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 italic">
          <span className="text-foreground">MODEL </span>
          <span className="text-primary">MACHINE</span>
        </h1>
        
        {/* Description */}
        <p className="text-foreground text-base md:text-lg font-semibold tracking-widest uppercase mb-10">
          DESCRIPTION HERE
        </p>
        
        {/* Read More Button */}
        <div>
          <button className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-teal-light transition-colors">
            Read More
          </button>
        </div>
      </div>

      {/* Machine Image - Positioned right, smaller to show text */}
      <div className="absolute right-0 bottom-0 w-[55%] z-10 flex items-end justify-end">
        <img
          src={machineImage}
          alt="Paper Machinery"
          className="w-full h-auto object-contain max-h-[70vh]"
        />
      </div>

      {/* Company Logo - Bottom Left */}
      <div className="absolute bottom-5 left-8 md:left-16 lg:left-24 z-20">
        <CompanyLogo />
      </div>
    </div>
  );
};

export default Index;
