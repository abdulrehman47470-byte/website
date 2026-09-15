import { ArrowLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { useScrollToTop } from '../hooks/useScrollToTop';

const DEMO_LINK = 'https://drive.google.com/file/d/1cQj-yE7iY1RA-XFCF7w7xlQEZpp9TRUB/view?usp=sharing';

const DemoPage = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title="Watch the Demo Class - BioCareer"
        description="Watch the full BioCareer program demo to see exactly how the classes, research tools, and workflows work before you enroll."
        path="/demo"
        image="/images/hero-instructor.jpg"
      />

      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/eligibility" className="flex items-center group">
              <span className="font-black text-2xl tracking-tighter text-navy group-hover:text-purple transition-colors">
                BIO<span className="text-purple">CAREER</span>
              </span>
            </Link>
            <Link to="/eligibility" className="flex items-center gap-2 text-navy font-bold hover:text-purple transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back
            </Link>
          </div>
        </div>
      </header>

      {/* Watch the Demo */}
      <section className="py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-navy rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-14 text-center shadow-2xl overflow-hidden ring-4 ring-purple/20">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple text-white text-[11px] font-black uppercase tracking-widest rounded-full mb-6">
                Watch This Before You Decide
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">Watch the Full Program Demo</h1>
              <p className="text-white/70 font-medium max-w-xl mx-auto mb-10 text-base sm:text-lg">
                See exactly how the classes, research tools, and workflows work - so you know precisely what
                you're getting before you enroll.
              </p>
              <a
                href={DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 group bg-white/5 border-2 border-white/10 hover:border-purple rounded-full pl-3 pr-8 py-3 transition-all"
              >
                <div className="relative w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:bg-purple transition-all duration-300 flex-shrink-0">
                  <Play className="w-6 h-6 text-purple ml-1 group-hover:text-white transition-colors duration-300" fill="currentColor" />
                  <span className="absolute inset-0 rounded-full bg-purple/30 animate-ping opacity-30" />
                </div>
                <span className="font-black text-white text-lg sm:text-xl group-hover:text-purple-300 transition-colors duration-300">
                  Watch Full Demo Class
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;
