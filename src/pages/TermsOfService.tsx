import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, UserCheck, CreditCard, Copyright, AlertTriangle } from 'lucide-react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 'ts-registration',
      icon: UserCheck,
      title: 'Academic & Professional Access',
      content: `To access advanced research modules or mentorship, you must provide accurate academic credentials. You are responsible for maintaining the confidentiality of your research portal access.

BioCareer reserves the right to verify institutional affiliations to ensure the integrity of technical data sharing.`,
    },
    {
      id: 'ts-ip',
      icon: Copyright,
      title: 'Intellectual Property & Authorship',
      content: `Ownership of research data shared for review remains with the user. However, all BioCareer training materials, Python/R scripts, and proprietary methodology are the property of Abd-Ur-Rehman Munir.

BioCareer does not claim authorship on mentored manuscripts unless a specific formal collaboration is established. Use of our proprietary drafting templates is restricted to personal academic use.`,
    },
    {
      id: 'ts-payments',
      icon: CreditCard,
      title: 'Consultation & Mentorship Fees',
      content: `Fees for strategic consultations, patent drafting technicalities, and Bio-Data Science courses are processed securely. 

Given the nature of personalized technical labor in research review, refunds are processed based on the stage of work completed. Strategic session cancellations require 24-hour notice.`,
    },
    {
      id: 'ts-conduct',
      icon: Shield,
      title: 'Professional Research Conduct',
      content: `Users agree to use the platform only for legitimate scientific advancement. Prohibited actions include:
      • Submitting plagiarized data for technical review.
      • Redistributing BioCareer’s proprietary bioinformatics datasets.
      • Attempting to circumvent secure data-transfer protocols for unpublished manuscripts.`,
    },
    {
      id: 'ts-liability',
      icon: AlertTriangle,
      title: 'Scientific Disclaimer',
      content: `While BioCareer provides expert guidance for Scopus-indexed publishing and patent strategy, the final acceptance of manuscripts or patent approval is subject to external peer-review and legal bodies. 

BioCareer is not liable for research outcomes or legal rejections based on external institutional decisions.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple selection:text-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-black text-2xl tracking-tighter text-navy uppercase">
              BIO<span className="text-purple">CAREER</span>
            </span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-navy font-bold hover:text-purple transition-all">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-[1350px] mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-purple/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-purple" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mb-4 tracking-tight">
            Terms of <span className="text-purple">Service</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Strategic guidelines for research collaboration, patent strategy, and technical mentorship.
          </p>
          <p className="text-sm font-bold text-slate-400 mt-6 uppercase tracking-widest">
            Effective Date: February 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center">
                    <section.icon className="w-7 h-7 text-purple" />
                  </div>
                  <h2 className="text-2xl font-black text-navy">{section.title}</h2>
                </div>
                <div className="text-slate-600 leading-relaxed font-medium text-lg whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-20 bg-navy rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
            <h2 className="text-2xl font-black mb-4 tracking-tight">Legal & Support Inquiries</h2>
            <p className="text-slate-400 mb-8 font-medium">For questions regarding mentorship contracts or authorship policies:</p>
            <div className="flex justify-center">
              <a href="mailto:biocareer12@gmail.com" className="px-10 py-5 bg-white text-navy font-black rounded-2xl hover:bg-purple hover:text-white transition-all shadow-xl">
                biocareer12@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-[1350px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em]">© 2024 BIOCAREER • ABD-UR-REHMAN MUNIR</p>
          <div className="flex gap-8 text-sm font-bold text-slate-400">
            <Link to="/privacy" className="hover:text-purple transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;