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
    <section id="stats" ref={sectionRef} className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- CERTIFICATE SECTION START --- */}
        <div className={`mb-24 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-navy rounded-[40px] p-8 md:p-16 border border-white/10 overflow-hidden shadow-2xl">
            {/* The Binary (01, 10) background decoration was removed here */}
            
            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left Column: Bold Headline & Accreditation */}
              <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/5 text-white/90 text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/10">
                  <BadgeCheck className="w-3.5 h-3.5 text-purple" />
                  Proprietary Certification
                </div>
                
                {/* --- BEST HEADLINE --- */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tighter">
                  Issuing Your <br/> <span className="text-purple">Research Authority</span>
                </h2>
                
                <p className="text-white/70 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                  At Bio-Career, we don't just provide training; we grant <span className='font-bold text-white'>your</span> official accreditation. Upon completion, you will receive <span className='font-bold text-white'>this unique certification</span>, validating your specialized expertise under my direct mentorship.
                </p>
                <div className="flex justify-center lg:justify-start gap-4">
                   {[
                    { icon: ShieldCheck, label: 'Industry Validated' },
                    { icon: GraduationCap, label: 'Academic Rigor' },
                    { icon: Cpu, label: 'AI/ML Proficiency' }
                   ].map(item => (
                    <div key={item.label} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl transition-all hover:bg-white/10">
                      <item.icon className="w-6 h-6 text-purple" />
                      <span className="text-white text-[11px] font-black uppercase tracking-wider">{item.label}</span>
                    </div>
                   ))}
                </div>
              </div>

              {/* Center Column: THE CERTIFICATE IMAGE (A.jpg) */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative group/cert">
                  {/* Enhanced Outer Glow Effect */}
                  <div className="absolute inset-0 bg-purple/30 blur-[60px] rounded-xl opacity-80 group-hover/cert:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image A.jpg */}
                  <img 
                    src="/images/A.jpg" 
                    alt="Official Research Certificate Template" 
                    className="relative w-full max-w-[340px] h-auto rounded-xl shadow-2xl border-[8px] border-white transform transition-transform duration-700 ease-out group-hover/cert:scale-[1.07] group-hover/cert:-rotate-2"
                  />
                  
                  {/* Verified Ribbon Overlay */}
                  <div className="absolute -top-6 -right-6 bg-purple text-white text-[11px] font-black py-2.5 px-4 rounded-xl shadow-2xl rotate-12 uppercase tracking-tight">
                    Program Accredited
                  </div>
                </div>
              </div>

              {/* Right Column: Validation Details & Professional Signature */}
              <div className="lg:col-span-3 flex flex-col items-center lg:items-end space-y-10">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 w-full">
                    <h4 className="text-purple text-xs font-black uppercase tracking-widest mb-4">Verification Details</h4>
                    <ul className="space-y-3.5 text-white/70 text-sm font-medium">
                        <li>• Unique Student ID</li>
                        <li>• Verified Research Fields</li>
                        <li>• Project Portfolio Validation</li>
                        <li>• In-Silico Modeling Proficiency</li>
                        <li>• Senior Lead Researcher Endorsement</li>
                    </ul>
                </div>
                
                <div className="text-center lg:text-right">
                  <div className="font-signature text-4xl text-white mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    A.R. Munir
                  </div>
                  <div className="h-[1px] w-40 bg-white/20 mb-3 ml-auto" />
                  <div className="text-[11px] font-black text-white/50 uppercase tracking-widest">
                    Lead Researcher & Founder, Bio-Career
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* --- CERTIFICATE SECTION END --- */}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div 
                className={`w-16 h-16 bg-purple rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-12'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="mb-2">
                <span className="text-4xl lg:text-5xl font-black text-navy">{stat.value}</span>
                <span className="text-2xl lg:text-3xl font-black text-purple">{stat.suffix}</span>
              </div>
              <p className="text-[10px] lg:text-xs font-black text-navy/40 uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;