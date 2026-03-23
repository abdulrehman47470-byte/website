import { useEffect, useRef, useState } from 'react';
import { Beaker, Code, LineChart, Globe, PenTool, Search, Dna, Cpu, Layout } from 'lucide-react';

const Courses = () => {
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

  const courses = [
    { id: 1, image: '/images/C1.png', title: 'Advanced Vaccine Construction & Analysis', category: 'In Silico BioTech', icon: <Beaker className="w-5 h-5" />, description: 'Master vaccine formulation, multi-epitope construction, and immunoinformatics analysis from basics to professional level.' },
    { id: 2, image: '/images/C2.png', title: 'AI & Machine Learning in Life Sciences', category: 'Computational Tech', icon: <Code className="w-5 h-5" />, description: 'Integrate AI/ML into biological research. Learn mutation analysis, target identification, and automated data processing.' },
    { id: 3, image: '/images/C3.png', title: 'Research Analytics & Data Visualization', category: 'Data Science', icon: <LineChart className="w-5 h-5" />, description: 'Expertise in Data Cleaning, Tableau, Power BI, and Looker Studio for high-impact research storytelling.' },
    { id: 4, image: '/images/C4.png', title: 'Scientific Writing & Publication Mastery', category: 'Research Skills', icon: <PenTool className="w-5 h-5" />, description: 'Learn research idea generation, methodology design, proposal writing, and navigating international publications.' },
    { id: 5, image: '/images/C5.png', title: 'Global Scholarship & Grant Strategy', category: 'Earning Skills', icon: <Search className="w-5 h-5" />, description: 'Master scholarship hunting, proposal building, and global networking strategies to secure fully funded opportunities.' },
    { id: 6, image: '/images/C6.png', title: 'LinkedIn Branding & Freelance Strategy', category: 'Career Growth', icon: <Globe className="w-5 h-5" />, description: 'Optimize your LinkedIn, build a powerful research portfolio, and master freelancing/remote work in the Bio-Data niche.' },
    { id: 7, image: '/images/C7.png', title: 'Drug Design & Pharmo-Kinetic Analysis', category: 'Pharmacology AI', icon: <Dna className="w-5 h-5" />, description: 'DeNovo Drug formulation, ADME analysis, Molecular Docking, and Molecular Simulation using advanced AI tools.' },
    { id: 8, image: '/images/C8.png', title: 'Molecular Simulation & GROMACS', category: 'Biotech Mastery', icon: <Cpu className="w-5 h-5" />, description: 'Perform complex Molecular Simulations, Chemical Bond analysis, and GROMACS workflows for structure prediction.' },
    { id: 9, image: '/images/C9.png', title: 'Agentic Research Automation with n8n', category: 'Automation', icon: <Layout className="w-5 h-5" />, description: 'Build autonomous research agents using n8n automation to handle data cleaning and repetitive scientific tasks.' },
  ];

  return (
    /* Reducer py-24 to py-12 to tighten the whole section */
    <section id="courses" ref={sectionRef} className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Reduced mb-16 to mb-10 */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className={`inline-flex items-center gap-3 mb-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-8 h-[2px] bg-purple" />
            <span className="text-purple font-bold text-sm uppercase tracking-wider">Skill-Based Learning</span>
            <span className="w-8 h-[2px] bg-purple" />
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold text-navy mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '150ms' }}>
            Master the High-Income Bio-Research Ecosystem
          </h2>
          <p className={`text-lg text-text-body transition-all duration-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            From basics to advanced applications—gain the Biotech and Research skills required to land 6-figure remote jobs.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${400 + index * 50}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1.5 px-5 py-2.5 bg-white/95 backdrop-blur-md rounded-full text-xs font-black text-purple uppercase tracking-tight shadow-md">
                    {course.icon} {course.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-extrabold text-navy text-xl mb-3 leading-tight group-hover:text-purple transition-colors">
                  {course.title}
                </h3>
                <p className="text-base text-navy/70 leading-relaxed font-bold">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;