import { useEffect, useState } from 'react';
import { Search, MessageCircle, Book, Microscope, Mail, Phone, ChevronDown, ChevronUp, ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'cat-research', icon: Microscope, title: 'Research Mentorship', description: 'Guidance on Scopus & high-impact publishing', articles: 15 },
    { id: 'cat-patent', icon: FileText, title: 'Patent Documentation', description: 'Technical writing for biotech IP filing', articles: 10 },
    { id: 'cat-data', icon: Book, title: 'Bio-Data Science', description: 'Resources for Python & R in Biology', articles: 22 },
    { id: 'cat-consult', icon: MessageCircle, title: 'Consultation', description: 'How to book private strategic sessions', articles: 5 },
  ];

  const faqs = [
    {
      question: 'What is included in the Research Mentorship?',
      answer: 'The mentorship covers literature review, experimental design, data validation, and drafting manuscripts for Scopus-indexed or high-impact factor journals.',
    },
    {
      question: 'Can you help with Patent Search and Drafting?',
      answer: 'Yes, I provide technical support for patentability searches and drafting technical specifications for biotech, chemical, and pharmaceutical formulations.',
    },
    {
      question: 'Do you offer online Bio-Data Science training?',
      answer: 'Absolutely. Training is conducted via live digital sessions, focusing on genomic data analysis, molecular modeling, and bioinformatics coding.',
    },
    {
      question: 'How do I start a collaboration with BioCareer?',
      answer: 'Simply use the Contact section or email biocareer12@gmail.com with your project abstract. We will respond within 24 hours to schedule an initial review.',
    },
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <Link to="/" className="flex items-center gap-2 text-navy font-bold hover:text-purple transition-all duration-300">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-[1350px] mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-navy mb-6 tracking-tight">
            Knowledge <span className="text-purple">Base</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Professional assistance for biotech research, patent strategy, and computational biology.
          </p>
          
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-purple transition-colors" />
            <input
              type="text"
              placeholder="Search research protocols or course info..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-6 bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-purple/10 transition-all text-navy font-medium"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid - Error Resolved by using unique ID keys */}
      <section className="py-24 bg-white">
        <div className="max-w-[1350px] mx-auto px-4">
          <h2 className="text-sm font-black text-purple uppercase tracking-[0.3em] text-center mb-12">
            Technical Support Domains
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:border-purple/30 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple group-hover:rotate-6 transition-all duration-500">
                  <category.icon className="w-8 h-8 text-navy group-hover:text-white transition-all" />
                </div>
                <h3 className="font-black text-navy text-xl mb-3 tracking-tight">{category.title}</h3>
                <p className="text-slate-500 mb-6 font-medium leading-relaxed">{category.description}</p>
                <div className="pt-4 border-t border-slate-50">
                  <span className="text-xs text-purple font-black uppercase tracking-widest">{category.articles} Modules</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[850px] mx-auto px-4">
          <h2 className="text-3xl font-black text-navy mb-12 text-center tracking-tight">Technical FAQ</h2>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={`faq-${index}`} className="bg-white rounded-[1.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50/50 transition-all"
                >
                  <span className="font-bold text-navy text-lg pr-4">{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="text-purple w-6 h-6" /> : <ChevronDown className="text-slate-300 w-6 h-6" />}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-2">
                    <p className="text-slate-600 leading-relaxed font-medium text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1350px] mx-auto px-4">
          <div className="bg-navy rounded-[4rem] p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <h2 className="text-4xl font-black mb-6 tracking-tight relative z-10">Direct Mentorship Access</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg font-medium relative z-10">
              For rapid research feedback or urgent patent data analysis, contact the lab directly.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <a href="mailto:biocareer12@gmail.com" className="flex items-center gap-4 px-10 py-5 bg-white text-navy rounded-2xl hover:scale-105 transition-all font-black text-lg">
                <Mail className="w-6 h-6 text-purple" /> biocareer12@gmail.com
              </a>
              <a href="tel:03291698616" className="flex items-center gap-4 px-10 py-5 bg-white/10 text-white rounded-2xl border border-white/20 hover:bg-white/20 transition-all font-black text-lg">
                <Phone className="w-6 h-6 text-purple" /> 0329 1698616
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-[1350px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em]">© 2024 BIOCAREER • ABD-UR-REHMAN MUNIR</p>
          <div className="flex gap-8 text-sm font-bold text-slate-400">
            <Link to="/privacy" className="hover:text-purple transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-purple transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HelpCenter;