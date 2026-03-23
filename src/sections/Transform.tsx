import { useEffect, useRef, useState } from 'react';
import { Check, Beaker, FileText, Lightbulb } from 'lucide-react';

const Transform = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const milestones = [
    '20+ international first-author research publications',
    'Pharmaceutical patent on diabetes vaccine formulation',
    'Peer reviewer for an international journal',
    'Secured my first job as a Bio-Data Scientist with a montly salary of 2 Lakhs/month',
    'Remote Data Scientist for Silicon Valley AI company',
  ];

  const masterclasses = [
    {
      image: '/images/T1.png',
      title: 'Scientific Research & Paper Writing Masterclass',
      category: 'Research',
      icon: <FileText className="w-5 h-5" />,
    },
    {
      image: '/images/T2.png',
      title: 'Bioentrepreneurship: Lab to Market',
      category: 'Innovation',
      icon: <Lightbulb className="w-5 h-5" />,
    },
    {
      image: '/images/T3.png',
      title: 'Data Science / AI for Biologist',
      category: 'Tech',
      icon: <Beaker className="w-5 h-5" />,
    },
  ];

  return (
    <section id="transform" ref={sectionRef} className="py-24 lg:py-32 bg-purple-light/50 overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Achievement & Story */}
          <div className="space-y-8">
            <div className={`inline-flex items-center gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <span className="w-8 h-[2px] bg-purple" />
              <span className="text-purple font-bold text-sm uppercase tracking-wider">Research Expertise</span>
            </div>

            <div className="space-y-4">
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
                Transform Your Career with <br/><span className="text-purple">Real-World Expertise</span>
              </h2>
              
              <h3 className={`text-xl font-bold text-navy/80 italic transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
                "Here is my success story as a biologist"
              </h3>
            </div>

            <p className={`text-lg text-text-body max-w-lg transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
              Move beyond theory. Learn the exact frameworks I used to publish papers, secure a patent, and land a 6-figure salary as a Data Scientist.
            </p>

            <ul className="space-y-4">
              {milestones.map((text, index) => (
                <li key={index} className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: `${600 + index * 100}ms` }}>
                  <div className="mt-1 w-5 h-5 bg-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-purple" />
                  </div>
                  <span className="text-navy font-medium text-base">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Course Cards */}
          <div className="relative" style={{ perspective: '1200px' }}>
            <div className="grid gap-6">
              {masterclasses.map((course, index) => (
                <div
                  key={course.title}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0 rotate-y-0' : 'opacity-0 translate-x-24 rotate-y-[-30deg]'}`}
                  style={{ transitionDelay: `${400 + index * 150}ms`, transformStyle: 'preserve-3d' }}
                >
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="sm:w-1/3 overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-32 sm:h-full object-cover transition-transform duration-500 hover:scale-110" />
                    </div>
                    <div className="sm:w-2/3 p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="p-1.5 bg-purple-light rounded-lg text-purple">{course.icon}</span>
                        <span className="text-xs font-bold text-purple uppercase tracking-widest">{course.category}</span>
                      </div>
                      <h3 className="font-bold text-navy text-lg leading-tight group-hover:text-purple transition-colors">
                        {course.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Background Accents */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple/20 rounded-full blur-3xl animate-bounce-slow" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Transform;