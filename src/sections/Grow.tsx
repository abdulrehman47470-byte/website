import { useEffect, useRef, useState } from 'react';
import { Beaker, Award, Globe, Database, Cpu, Layout, FileText, PieChart, GraduationCap, Search, DollarSign, BookOpen, Microscope } from 'lucide-react';

const Grow = () => {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const studentAchievements = [
    { icon: <GraduationCap className="w-5 h-5" />, title: "Industry Skills", text: "Learn high-paying, industry-relevant skills universities don't teach—including bioinformatics and real research workflows." },
    { icon: <Cpu className="w-5 h-5" />, title: "AI & ML Proficiency", text: "Master BioPython, N8N workflows, and AI-driven biotech tools, opening doors to high-paying career opportunities." },
    { icon: <BookOpen className="w-5 h-5" />, title: "Research Publication", text: "Learn to produce high-impact scientific publications, mastering the end-to-end process from data to international journals." },
    { icon: <Search className="w-5 h-5" />, title: "Global Job Hunting", text: "Master the art of tracking international remote roles, scholarship hunting, and supervisor outreach with proven strategies." },
    { icon: <DollarSign className="w-5 h-5" />, title: "Online Earning", text: "Learn to monetize your research expertise through freelancing and remote data roles, building a sustainable income stream." },
    { icon: <FileText className="w-5 h-5" />, title: "Scientific Writing", text: "Master research writing and data interpretation to significantly improve your employability in global academia." },
    { icon: <Layout className="w-5 h-5" />, title: "Expert Portfolio", text: "Build a strong professional CV and project showcase demonstrating expertise in AI and computational research." },
    { icon: <PieChart className="w-5 h-5" />, title: "Data Dashboards", text: "Gain practical exposure to Power BI and Looker Studio—solving real-world problems that make you stand out globally." },
    { icon: <Microscope className="w-5 h-5" />, title: "Novel Discoveries", text: "Conduct original in-silico research work under my guidance to make independent discoveries in Biotech and Drug Design." }
  ];

  return (
    <section id="grow" ref={sectionRef} className="py-6 lg:py-8 overflow-hidden bg-white">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Founder Banner */}
        <div 
          className={`relative rounded-[40px] overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
          style={{ background: 'linear-gradient(135deg, #161440 0%, #6440fb 100%)' }}
        >
          <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center p-8 lg:p-14">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
                  About Bio_Career
                </span>
                <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-white leading-tight">
                  Founded by <span className="text-purple-light">Abdur Rehman</span>
                </h2>
                <p className="mt-4 text-lg text-white/90 font-bold italic leading-relaxed">
                  "Empowering the next generation of biologist and bioscience professionals through innovation and research education."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Beaker className="w-4 h-4" />, text: "20+ Publications" },
                  { icon: <Award className="w-4 h-4" />, text: "Patent Holder" },
                  { icon: <Globe className="w-4 h-4" />, text: "Data Scientist" },
                  { icon: <Database className="w-4 h-4" />, text: "Research Medalist" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <div className="p-2 rounded-lg bg-white/10 border border-white/5">{item.icon}</div>
                    <span className="text-[11px] font-black uppercase tracking-wider">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Column - Now centered more to the left */}
            <div className="lg:col-span-5 flex justify-center lg:justify-center">
              <div className="relative">
                <img 
                  src="/images/grow.png" 
                  alt="Abdul Rehman" 
                  className="w-full max-w-[290px] rounded-[40px] shadow-2xl border-4 border-white/10" 
                />
              </div>
            </div>

          </div>
        </div>

        {/* --- ACHIEVEMENTS GRID --- */}
        <div className="mt-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-4xl font-black text-navy uppercase tracking-tighter">
              Achievements <span className="text-purple">After This Program</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentAchievements.map((item, index) => (
              <div 
                key={index}
                className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-purple/30 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 text-purple group-hover:bg-purple group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-navy mb-3 uppercase tracking-tight leading-tight group-hover:text-purple transition-colors">
                  {item.title}
                </h3>
                <p className="text-[15px] text-navy/70 leading-relaxed font-bold">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grow;