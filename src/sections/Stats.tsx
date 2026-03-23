import { useEffect, useRef, useState } from 'react';
import { Users, FileText, Award, BadgeCheck, ShieldCheck, GraduationCap, Cpu } from 'lucide-react';

const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    researchers: 0,
    publications: 0,
    salary: 0,
    rating: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const targets = { researchers: 500, publications: 10, salary: 200, rating: 4.9 };
    let step = 0;
    const steps = 60;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCounts({
        researchers: Math.floor(targets.researchers * easeOut),
        publications: Math.floor(targets.publications * easeOut),
        salary: Math.floor(targets.salary * easeOut),
        rating: Math.round(targets.rating * easeOut * 10) / 10,
      });
      if (step >= steps) clearInterval(timer);
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    { icon: Users, value: counts.researchers.toLocaleString(), suffix: '+', label: 'Researchers Mentored' },
    { icon: FileText, value: counts.publications.toString(), suffix: '+', label: 'Research Publications' },
    { icon: BadgeCheck, value: counts.salary.toString(), suffix: 'K+', label: 'Avg. Starting Salary (PKR)' },
    { icon: Award, value: counts.rating.toFixed(1), suffix: '/5', label: 'Success Rating' },
  ];

  return (
    <section id="stats" ref={sectionRef} className="pb-16 lg:pb-24 pt-0 bg-white overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- CERTIFICATE SECTION START --- */}
        <div className={`mb-16 lg:mb-24 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-navy rounded-[30px] lg:rounded-[40px] p-6 md:p-16 border border-white/10 overflow-hidden shadow-2xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Bold Headline & Accreditation */}
              <div className="lg:col-span-5 space-y-6 lg:space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/5 text-white/90 text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/10">
                  <BadgeCheck className="w-3.5 h-3.5 text-purple" />
                  Proprietary Certification
                </div>
                
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight lg:leading-[1.05] tracking-tighter">
                  Issuing Your <br/> <span className="text-purple">Research Authority</span>
                </h2>
                
                <p className="text-white/70 text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                  At Bio-Career, we don't just provide training; we grant <span className='font-bold text-white'>your</span> official accreditation. Upon completion, you will receive <span className='font-bold text-white'>this unique certification</span>, validating your specialized expertise.
                </p>

                {/* Badges Stacked for Mobile */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4">
                   {[
                    { icon: ShieldCheck, label: 'Industry Validated' },
                    { icon: GraduationCap, label: 'Academic Rigor' },
                    { icon: Cpu, label: 'AI/ML Proficiency' }
                   ].map(item => (
                    <div key={item.label} className="flex items-center gap-2 lg:gap-3 bg-white/5 border border-white/10 px-3 py-2 lg:p-3 rounded-xl transition-all hover:bg-white/10">
                      <item.icon className="w-4 h-4 lg:w-6 lg:h-6 text-purple" />
                      <span className="text-white text-[9px] lg:text-[11px] font-black uppercase tracking-wider">{item.label}</span>
                    </div>
                   ))}
                </div>
              </div>

              {/* Center Column: THE CERTIFICATE IMAGE */}
              <div className="lg:col-span-4 flex justify-center py-4 lg:py-0">
                <div className="relative group/cert w-full max-w-[280px] lg:max-w-[340px]">
                  <div className="absolute inset-0 bg-purple/30 blur-[40px] lg:blur-[60px] rounded-xl opacity-80 group-hover/cert:opacity-100 transition-opacity duration-500" />
                  
                  <img 
                    src="/images/A.jpg" 
                    alt="Official Research Certificate Template" 
                    className="relative w-full h-auto rounded-lg lg:rounded-xl shadow-2xl border-[4px] lg:border-[8px] border-white transform transition-transform duration-700 ease-out group-hover/cert:scale-[1.05] lg:group-hover/cert:-rotate-2"
                  />
                  
                  <div className="absolute -top-3 -right-3 lg:-top-6 lg:-right-6 bg-purple text-white text-[9px] lg:text-[11px] font-black py-1.5 px-3 lg:py-2.5 lg:px-4 rounded-lg lg:rounded-xl shadow-2xl rotate-12 uppercase tracking-tight">
                    Program Accredited
                  </div>
                </div>
              </div>

              {/* Right Column: Validation Details & Professional Signature */}
              <div className="lg:col-span-3 flex flex-col items-center lg:items-end space-y-8 lg:space-y-10">
                <div className="bg-white/5 p-5 lg:p-6 rounded-2xl border border-white/10 w-full">
                    <h4 className="text-purple text-[10px] lg:text-xs font-black uppercase tracking-widest mb-4">Verification Details</h4>
                    <ul className="space-y-2 lg:space-y-3.5 text-white/70 text-xs lg:text-sm font-medium text-left">
                        <li>• Unique Student ID</li>
                        <li>• Verified Research Fields</li>
                        <li>• Project Portfolio Validation</li>
                        <li>• In-Silico Modeling Proficiency</li>
                        <li>• Senior Lead Researcher Endorsement</li>
                    </ul>
                </div>
                
                <div className="text-center lg:text-right w-full">
                  <div className="font-signature text-3xl lg:text-4xl text-white mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    A.R. Munir
                  </div>
                  <div className="h-[1px] w-32 lg:w-40 bg-white/20 mb-3 mx-auto lg:ml-auto lg:mr-0" />
                  <div className="text-[9px] lg:text-[11px] font-black text-white/50 uppercase tracking-widest">
                    Lead Researcher & Founder, Bio-Career
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* --- CERTIFICATE SECTION END --- */}

        {/* Stats Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div 
                className={`w-12 h-12 lg:w-16 lg:h-16 bg-purple rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 transition-all duration-500 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-12'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <div className="mb-1 lg:mb-2">
                <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-navy">{stat.value}</span>
                <span className="text-lg sm:text-2xl lg:text-3xl font-black text-purple">{stat.suffix}</span>
              </div>
              <p className="text-[8px] lg:text-xs font-black text-navy/40 uppercase tracking-[0.15em] lg:tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;