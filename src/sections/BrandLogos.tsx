import { useEffect, useRef, useState } from 'react';

const BrandLogos = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const brands = [
    { name: 'Patent Holder', display: <span className="font-bold text-xl text-amber-600">PATENT HOLDER</span> },
    { name: 'Data Scientist', display: <span className="font-bold text-xl text-navy">DATA SCIENTIST AT REVCLOUD</span> },
    { name: 'First Author', display: <span className="font-bold text-xl text-blue-700">FIRST AUTHOR PUBLISHED RESEARCHER</span> },
    { name: 'Springer Nature Peer Reviewer', display: <span className="font-bold text-xl tracking-tight text-gray-800">SPRINGER <span className="text-blue-500">NATURE PEER REVIEWER</span></span> },
    { name: 'Top Researcher', display: <span className="font-black text-xl text-red-600 uppercase">TOP INTERNATIONAL RESEARCHER</span> },
    { name: 'Biogerontology', display: <span className="italic font-serif text-lg text-green-800">CERTIFIED BIOGERONTOLOGY</span> },
    { name: 'Research Medalist', display: <span className="font-bold text-xl text-[#003366]">RESEARCH MEDALIST (3.87 CGPA)</span> },
    { name: 'Impact Factor', display: <span className="font-black text-2xl text-navy">4.4 IMPACT FACTOR</span> },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <p 
          className={`text-center mb-12 transition-all duration-600 text-3xl md:text-4xl font-bold text-navy ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
        >
          Professional Achievements & Academic Milestones
        </p>

        <div 
          className={`relative transition-all duration-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionTimingFunction: 'var(--ease-smooth)', transitionDelay: '300ms' }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee items-center">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center min-w-[250px]"
                style={{ transitionTimingFunction: 'var(--ease-smooth)' }}
              >
                {brand.display}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;