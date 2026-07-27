import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, Eye, Database, Share2, ShieldCheck, WalletCards } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 1,
      icon: Eye,
      title: 'Information We Collect',
      content: `We collect specific technical and personal data to facilitate high-level research mentorship:
      
      • Research Data: Manuscripts, abstracts, and datasets shared for Scopus-indexed review.
      • Technical IP: Formulation details and experimental protocols for patent strategy.
      • Identifiers: Name, professional email address, and academic/institutional affiliation.
      • Usage Data: Information on how you interact with our Bio-Data science modules.`
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: 'How We Use Your Information',
      content: `Your data is utilized strictly for scientific and professional advancement:
      
      • To provide expert technical feedback on unpublished research.
      • To draft and prepare documentation for biotech intellectual property filing.
      • To personalize your Bio-Data Science training in Python and R.
      • To respond to strategic consultation queries regarding academic publishing.`
    },
    {
      id: 3,
      icon: WalletCards,
      title: 'Refund & Resource Policy',
      content: `Please note our strict enrollment and refund terms:
      
      • Immediate Resource Access: Unlike traditional courses where materials are released gradually, BioCareer provides full access to all research documentation and comprehensive recording materials at the very start of the program.
      • Non-Refundable Fee: Because all proprietary instructional assets and recording materials are delivered upon enrollment, all course fees are strictly non-refundable. By initiating enrollment, you acknowledge receipt of these resources as full value for the transaction.`
    },
    {
      id: 4,
      icon: Share2,
      title: 'Information Sharing & Confidentiality',
      content: `BioCareer operates under a strict "Non-Disclosure" framework:
      
      • No Sale of Data: We do not sell, trade, or rent your research assets to third parties.
      • Legal Disclosure: Shared only with legal authorities or patent offices upon your direct request.
      • NDA Compliance: All mentorship is conducted under standard guidelines to protect your research novelty.`
    },
    {
      id: 5,
      icon: Lock,
      title: 'Data Security & Storage',
      content: `We implement technical measures to protect sensitive scientific information:
      
      • Encryption: All shared manuscripts and datasets are encrypted at rest and in transit.
      • Access Control: Only authorized mentorship leads have access to your raw research files.
      • Data Retention: We retain files only as long as necessary for the project timeline or until publication.`
    },
    {
      id: 6,
      icon: Database,
      title: 'Your Rights & Control',
      content: `You maintain full ownership of your intellectual property and have the right to:
      
      • Request a copy of all personal and research data stored on our platform.
      • Request the immediate and permanent deletion of unpublished manuscripts.
      • Withdraw consent for ongoing mentorship or data processing at any time.`
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple selection:text-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
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
            <Lock className="w-10 h-10 text-purple" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mb-4 tracking-tight">
            Privacy & <span className="text-purple">Refund Policy</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            At BioCareer, protecting your research novelty and establishing clear terms for our professional mentorship is our primary directive.
          </p>
          <p className="text-sm font-bold text-slate-400 mt-6 uppercase tracking-widest">
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="space-y-12">
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

          {/* Direct Contact for Privacy */}
          <div className="mt-20 bg-navy rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
            <h2 className="text-2xl font-black mb-4">Privacy & Data Inquiries</h2>
            <p className="text-slate-400 mb-8 font-medium">
              For questions regarding research NDAs or to request data deletion:
            </p>
            <a 
              href="mailto:biocareer12@gmail.com" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-navy rounded-2xl font-black text-xl hover:bg-purple hover:text-white transition-all shadow-xl"
            >
              biocareer12@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-[1350px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em]">
            © 2024 BIOCAREER • ABD-UR-REHMAN MUNIR
          </p>
          <div className="flex gap-8 text-sm font-bold text-slate-400">
            <Link to="/terms" className="hover:text-purple transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;