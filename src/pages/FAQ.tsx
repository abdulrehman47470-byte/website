import { ArrowLeft, Search, MessageCircle, HelpCircle, ChevronDown, ChevronUp, Microscope, Scale, BookOpen, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SEO } from '../components/SEO';
import { useScrollToTop } from '../hooks/useScrollToTop';

const FAQ = () => {
  useScrollToTop();

  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'research', name: 'Research Mentorship', icon: Microscope },
    { id: 'patents', name: 'Patents & IP', icon: Scale },
    { id: 'datascience', name: 'Bio-Data Science', icon: BookOpen },
    { id: 'career', name: 'Consultation', icon: GraduationCap },
  ];

  const faqs = [
    {
      category: 'research',
      question: 'How do you assist with Scopus/High-Impact publications?',
      answer: 'I provide end-to-end guidance, from refining your research methodology and data validation to selecting the appropriate journal and navigating the peer-review process to ensure a successful publication.',
    },
    {
      category: 'patents',
      question: 'Do you help with formulation patents and technical IP?',
      answer: 'Yes. I specialize in technical documentation for biotech and chemical formulations, ensuring your research is legally protected and meets the requirements for international patent filings.',
    },
    {
      category: 'datascience',
      question: 'Can I learn Bio-Data Science without a coding background?',
      answer: 'Absolutely. My courses are designed specifically for biologists. We cover Python and R starting from the basics, focusing purely on biological applications like DNA sequencing and drug modeling.',
    },
    {
      category: 'career',
      question: 'How do I book a private consultation session?',
      answer: 'You can reach out via the Contact page or email biocareer12@gmail.com. We will schedule a session to discuss your academic goals, research obstacles, or professional career path in the biotech industry.',
    },
    {
      category: 'research',
      question: 'Is your mentorship available for international students?',
      answer: 'Yes, I provide remote mentorship globally. We use digital collaboration tools to review manuscripts and conduct data analysis sessions across different time zones.',
    },
    {
      category: 'patents',
      question: 'Is my research data kept confidential?',
      answer: 'Confidentiality is a priority. For patent-related work or unpublished research data, we establish a formal non-disclosure agreement (NDA) before beginning the deep technical review.',
    },
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about BioCareer courses, biology and data science career guidance, and mentorship programs."
        path="/faq"
        image="/images/hero-instructor.jpg"
      />
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-black text-2xl tracking-tighter text-navy">
              BIO<span className="text-purple">CAREER</span>
            </span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-navy font-bold hover:text-purple transition-all">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple/5 to-white py-16">
        <div className="max-w-[1350px] mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-purple/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-purple" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mb-4 tracking-tight">
            Research <span className="text-purple">Knowledge Base</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Find technical answers regarding research mentorship, patent filing, and bio-computational training.
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search research topics (e.g., Patents, Python, Journals)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-5 bg-white rounded-2xl shadow-xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-purple/20 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-slate-50/50">
        <div className="max-w-[1350px] mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all ${
                  activeCategory === category.id
                    ? 'bg-purple text-white shadow-lg'
                    : 'bg-white text-navy border border-slate-200 hover:border-purple'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-purple/30 transition-all shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  >
                    <span className="font-black text-navy text-lg group-hover:text-purple transition-colors pr-4">{faq.question}</span>
                    {openFaq === index ? <ChevronUp className="text-purple flex-shrink-0" /> : <ChevronDown className="text-slate-300 flex-shrink-0" />}
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6 animate-in slide-in-from-top-2 duration-300">
                      <p className="text-slate-600 leading-relaxed font-medium">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-slate-50 rounded-[3rem]">
                <HelpCircle className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy">No matching questions found</h3>
                <p className="text-slate-500">Try searching for broader biotech terms like "Journal" or "Python".</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-[1350px] mx-auto px-4">
          <div className="bg-navy rounded-[3rem] p-12 text-center relative overflow-hidden">
            <MessageCircle className="w-16 h-16 text-white/20 mx-auto mb-6" />
            <h2 className="text-3xl font-black text-white mb-4">Still need technical guidance?</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 font-medium">
              If your research question isn't listed, contact Abd-Ur-Rehman directly for expert advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-10 py-4 bg-purple text-white font-black rounded-2xl hover:scale-105 transition-all">
                Book Consultation
              </Link>
              <a href="mailto:biocareer12@gmail.com" className="px-10 py-4 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                Email Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10 border-t border-slate-100">
        <div className="max-w-[1350px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">
            © 2024 BIOCAREER. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-bold text-slate-400">
            <Link to="/privacy" className="hover:text-purple">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-purple">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;