import { ArrowLeft, BadgeCheck, ShieldCheck, GraduationCap, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { useScrollToTop } from '../hooks/useScrollToTop';

const socialProfiles = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'abdul-rehman147',
    href: 'https://www.linkedin.com/in/abdul-rehman147',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    handle: 'Abdur Rehman - BioCareer',
    href: 'https://www.facebook.com/profile.php?id=61586018271684',
  },
];

const MentorPage = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title="About / Mentor - BioCareer"
        description="BioCareer is an Approved CPD Provider (UK) and IBAI Partner Organization. Meet Abdur Rehman, founder of BioCareer and mentor to hundreds of biology and pharmacy students."
        path="/mentor"
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

      {/* International Recognition */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-navy rounded-[2.5rem] lg:rounded-[3rem] p-8 md:p-14 overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/5 text-white/90 text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/10">
                  <BadgeCheck className="w-3.5 h-3.5 text-purple" /> Internationally Recognized
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter">
                  Backed by <span className="text-purple">Global Standards</span>
                </h1>
                <p className="text-white/70 text-base lg:text-lg leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                  BioCareer is an <span className="font-bold text-white">Approved CPD Provider through The CPD
                  Group (UK)</span> and a recognized <span className="font-bold text-white">Partner
                  Organization of the International Bioscience Affiliation Initiative (IBAI)</span> - reflecting
                  our commitment to quality training, academic excellence, and continuous professional
                  development.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {[
                    { icon: ShieldCheck, label: 'Approved CPD Provider (UK)' },
                    { icon: GraduationCap, label: 'IBAI Partner Organization' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-3 rounded-xl"
                    >
                      <item.icon className="w-5 h-5 text-purple" />
                      <span className="text-white text-[11px] font-black uppercase tracking-wider">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
                <div className="relative group/cert">
                  <div className="absolute inset-0 bg-purple/30 blur-[50px] rounded-xl opacity-80 group-hover/cert:opacity-100 transition-opacity duration-500" />
                  <picture>
                    <source srcSet="/images/cpd-certificate.avif" type="image/avif" />
                    <img
                      src="/images/cpd-certificate.webp"
                      alt="BioCareer - Approved CPD Provider Certificate"
                      loading="lazy"
                      decoding="async"
                      width={700}
                      height={495}
                      className="relative w-full h-auto rounded-xl shadow-2xl border-[4px] sm:border-[6px] border-white transform transition-transform duration-700 ease-out group-hover/cert:scale-[1.05] group-hover/cert:-rotate-2"
                    />
                  </picture>
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-purple text-white text-[8px] sm:text-[10px] font-black py-1.5 px-2.5 sm:py-2 sm:px-3.5 rounded-lg sm:rounded-xl shadow-2xl rotate-12 uppercase tracking-tight">
                    #790540
                  </div>
                </div>

                <div className="relative group/cert">
                  <div className="absolute inset-0 bg-emerald-400/25 blur-[50px] rounded-xl opacity-80 group-hover/cert:opacity-100 transition-opacity duration-500" />
                  <picture>
                    <source srcSet="/images/ibai-certificate.avif" type="image/avif" />
                    <img
                      src="/images/ibai-certificate.webp"
                      alt="BioCareer - IBAI Certificate of Recognition, Partner Organization"
                      loading="lazy"
                      decoding="async"
                      width={1280}
                      height={904}
                      className="relative w-full h-auto rounded-xl shadow-2xl border-[4px] sm:border-[6px] border-white transform transition-transform duration-700 ease-out group-hover/cert:scale-[1.05] group-hover/cert:rotate-2"
                    />
                  </picture>
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-emerald-700 text-white text-[8px] sm:text-[10px] font-black py-1.5 px-2.5 sm:py-2 sm:px-3.5 rounded-lg sm:rounded-xl shadow-2xl rotate-12 uppercase tracking-tight">
                    Partner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor / Social */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-purple font-black text-sm uppercase tracking-widest mb-4 block">
            Your Mentor
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">Connect with Abdur Rehman</h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-xl mx-auto">
            Founder of BioCareer - researcher, patent holder, and mentor to hundreds of biology and pharmacy
            students moving into research and data science careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            {socialProfiles.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 hover:border-purple/30 hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-purple transition-colors">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-black text-navy">{s.label}</p>
                  <p className="text-xs text-slate-400 font-bold">{s.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorPage;
