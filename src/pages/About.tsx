import { ArrowLeft, Target, Eye, Heart, Microscope, Award, BookOpen, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { useScrollToTop } from '../hooks/useScrollToTop';

const About = () => {
  useScrollToTop();

  const stats = [
    { icon: BookOpen, value: '20+', label: 'Published Papers' },
    { icon: Brain, value: 'Patent Holder', label: 'Diabetes Formulation' },
    { icon: Award, value: 'Research Medalist', label: 'UCP Research Track' },
    { icon: Microscope, value: 'Expert', label: 'Biotech & Data Science' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Abd-Ur-Rehman Munir"
        description="Learn about Abd-Ur-Rehman Munir, the visionary founder of BioCareer. With 20+ published papers, a diabetes formulation patent, and expertise in biotech and data science."
        path="/about"
        image="/images/hero-instructor.jpg"
      />
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center group">
              <span className="font-black text-2xl tracking-tighter text-navy group-hover:text-purple transition-colors">
                BIO<span className="text-purple">CAREER</span>
              </span>
            </Link>
            <Link to="/" className="flex items-center gap-2 text-navy font-bold hover:text-purple transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple/5 to-white py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-7xl font-black text-navy mb-6 tracking-tight">
            The Visionary Behind <span className="text-purple">BioCareer</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Bridging the gap between Biology and Data Science to create high-income research skillsets for the next generation of scientists.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <img 
                  src="/images/Hero.png" 
                  alt="Abd-Ur-Rehman Munir" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-purple hidden md:block">
                <p className="text-purple font-black text-2xl">Founder & Lead</p>
                <p className="text-navy font-bold">Abdur Rehman</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="text-purple font-black text-sm uppercase tracking-widest mb-4 block">Our Story</span>
                <h2 className="text-4xl font-black text-navy mb-6">Revolutionizing Research Education</h2>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                  <p>
                    As a 20+ published researcher and patent holder in Diabetes Formulation, I founded BioCareer to solve a critical gap: the disconnect between biological theory and data-driven execution.
                  </p>
                  <p>
                    I believe that modern biology is no longer just about the lab; it’s about the data. My mission is to empower researchers with the computational tools and entrepreneurial mindset needed to build high-income careers in science.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <stat.icon className="text-purple w-8 h-8 mb-4" />
                    <div className="text-2xl font-black text-navy">{stat.value}</div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Values */}
      <section className="py-24 bg-navy text-white rounded-[4rem] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-[1350px] mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-black mb-16">The Core Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Target, title: 'Precision', desc: 'Focusing on high-impact research methodologies that deliver results.' },
              { icon: Eye, title: 'Innovation', desc: 'Merging AI and Data Science with traditional Biotech protocols.' },
              { icon: Heart, title: 'Mentorship', desc: 'Providing direct, expert-led guidance to every aspiring researcher.' }
            ].map((v) => (
              <div key={v.title} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <v.icon className="text-purple w-12 h-12 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black text-navy mb-8">Ready to Master Modern Research?</h2>
          <Link 
            to="/#courses" 
            className="inline-block px-12 py-5 bg-purple text-white font-black rounded-2xl shadow-2xl shadow-purple/30 hover:bg-navy transition-all hover:-translate-y-2"
          >
            Join My Courses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;