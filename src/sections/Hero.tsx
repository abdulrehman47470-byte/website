import { useEffect, useRef } from 'react';
import { Award, Microscope, Brain, Rocket, Play } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const demoLink = "https://drive.google.com/file/d/1dEIkSWms5M9IIO6NctAn-IR12SGTaw7o/view?usp=sharing";

  useEffect(() => {
    const handleScroll = () => {
      // Parallax ONLY for Desktop (1024px+) to prevent mobile overlap issues
      if (imageRef.current && window.innerWidth >= 1024) {
        const scrollY = window.scrollY;
        const parallaxValue = scrollY * 0.25;
        const scaleValue = Math.max(0.9, 1 - scrollY * 0.00015);
        imageRef.current.style.transform = `translateY(${-parallaxValue}px) scale(${scaleValue})`;
      } else if (imageRef.current) {
        imageRef.current.style.transform = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: Award, value: 'Research Medalist', label: 'UCP Research Track' },
    { icon: Microscope, value: '20+', label: 'Published Papers' },
    { icon: Brain, value: 'Patent Holder', label: 'Diabetes Formulation' },
    { icon: Rocket, value: 'Founder & CEO', label: 'BioCareer Entrepreneur' },
  ];

  return (
    <section
      id="hero"
      ref={sectionRef}
      // Fixed: Added pt-32 to push content down away from the header on mobile
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-12 lg:py-32 overflow-hidden bg-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 -right-20 -translate-y-1/2 w-[300px] h-[300px] lg:w-[700px] lg:h-[700px] rounded-full opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(100, 64, 251, 0.5) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-4 lg:mt-20">
        {/* Fixed: Used flex-col to stack on mobile and lg:grid for desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Area */}
          <div className="space-y-8 flex flex-col justify-center text-center lg:text-left animate-in fade-in slide-in-from-bottom-10 lg:slide-in-from-left-10 duration-1000 ease-out order-1">
            <div className="inline-flex items-center justify-center lg:justify-start gap-3">
              <span className="w-10 h-[2px] bg-purple" />
              <span className="text-purple font-black text-[10px] md:text-sm uppercase tracking-[0.2em]">
                Biotechnologist | Biogerontologist | Data Scientist 
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.2] lg:leading-[1.1] tracking-tighter">
                Master Research & <br className="hidden lg:block" /> Build a <span className="text-purple">High-Income</span> Skillset
              </h1>

              <p className="text-base md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Learn from a Published Researcher and Entrepreneur. Master the skills to become irreplaceable by bridging Biology with advanced Data Science.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2">
              <button
                onClick={() => document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-purple text-white font-black text-lg px-10 py-5 rounded-2xl shadow-xl shadow-purple/20 hover:shadow-purple/40 hover:-translate-y-1 transition-all duration-300"
              >
                Explore Courses
              </button>

              <a 
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="relative w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group-hover:bg-purple group-hover:shadow-purple/30 border border-slate-100">
                  <Play className="w-4 h-4 lg:w-5 lg:h-5 text-purple ml-1 transition-colors duration-300 group-hover:text-white" fill="currentColor" />
                  <span className="absolute inset-0 rounded-full bg-purple/20 animate-ping opacity-20" />
                </div>
                <span className="font-bold text-navy group-hover:text-purple transition-colors duration-300 tracking-wide text-sm lg:text-base">
                  Watch Demo
                </span>
              </a>
            </div>

            {/* Stats Grid - Fixed: Stacked on mobile, 2-col on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 pt-10 border-t border-gray-100">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-center lg:justify-start gap-4 group">
                  <div className="shrink-0 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-purple group-hover:rotate-6 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-purple group-hover:text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-black text-lg lg:text-xl text-navy leading-tight">{stat.value}</div>
                    <div className="text-[10px] lg:text-[11px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Responsive Image Area */}
          <div className="relative flex justify-center lg:justify-end order-2 mt-8 lg:mt-0" ref={imageRef}>
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[520px] animate-in fade-in zoom-in-50 duration-1000 delay-300 ease-out">
              <div className="absolute -left-6 top-1/4 w-3 h-48 bg-purple/80 rounded-full z-20 hidden lg:block blur-[1px]" />
              
              <div className="relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] lg:border-[8px] border-white bg-white group">
                <img
                  src="/images/Hero.png"
                  alt="Abdur Rehman Munir"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 280px, 520px"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/520x650?text=Hero+Image+Not+Found";
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;