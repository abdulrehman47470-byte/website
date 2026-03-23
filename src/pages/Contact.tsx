import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, CheckCircle, GraduationCap, Dna } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SEO } from '../components/SEO';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Contact = () => {
  useScrollToTop();

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnnogygk", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    { icon: Mail, title: 'Email Me', content: 'biocareer12@gmail.com', link: 'mailto:biocareer12@gmail.com', desc: 'Expert research queries' },
    { icon: Phone, title: 'Direct Contact', content: '0329 1698616', link: 'tel:+923291698616', desc: 'WhatsApp & Call' },
    { icon: MapPin, title: 'HQ Location', content: 'Lahore, Pakistan', link: '#', desc: 'Remote Global Support' },
    { icon: Clock, title: 'Availability', content: 'Mon - Sat: 10AM - 8PM', link: '#', desc: 'Flexible Timezones' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title="Contact Abd-Ur-Rehman Munir"
        description="Get in touch with Abd-Ur-Rehman Munir, founder of BioCareer. Contact for biology and data science career guidance, courses, and mentorship."
        path="/contact"
        image="/images/hero-instructor.jpg"
      />
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-black text-2xl tracking-tighter text-navy group-hover:text-purple transition-all">
              BIO<span className="text-purple">CAREER</span>
            </span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-navy font-bold hover:text-purple transition-all">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple/5 to-white py-16">
        <div className="max-w-[1350px] mx-auto px-4 text-center">
          <h1 className="text-5xl font-black text-navy mb-4 tracking-tight">Get in <span className="text-purple">Touch</span></h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">Connect with Abdur Rehman for research mentorship and patent consultations.</p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12">
        <div className="max-w-[1350px] mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <a key={info.title} href={info.link} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-purple/30 transition-all hover:-translate-y-2 group">
                <info.icon className="w-8 h-8 text-purple mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-black text-navy mb-1">{info.title}</h3>
                <p className="text-purple font-bold text-sm mb-1">{info.content}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{info.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-[1350px] mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="bg-navy rounded-[3rem] p-10 shadow-2xl relative min-h-[550px] flex flex-col justify-center overflow-hidden">
            {/* VERTICAL DNA LOADING ANIMATION */}
            {status === 'loading' && (
              <div className="absolute inset-0 bg-navy/95 z-50 flex flex-col items-center justify-center">
                <div className="flex flex-col gap-1 items-center animate-pulse">
                  {[...Array(8)].map((_, i) => (
                    <Dna 
                      key={i} 
                      className="w-10 h-10 text-purple animate-bounce" 
                      style={{ animationDelay: `${i * 100}ms` }} 
                    />
                  ))}
                </div>
                <h3 className="text-white font-black mt-8 tracking-[0.3em] text-sm animate-pulse">SEQUENCING DATA...</h3>
              </div>
            )}

            {status === 'success' ? (
              <div className="text-center animate-in zoom-in duration-500">
                <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
                <h3 className="text-3xl font-black text-white">Transmission Complete</h3>
                <p className="text-slate-400 mt-2 font-medium">Your research inquiry has been logged.</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-black text-white mb-8">Direct Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input name="name" type="text" placeholder="Full Name" required className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple transition-all" />
                    <input name="email" type="email" placeholder="Email Address" required className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple transition-all" />
                  </div>
                  <select name="service" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple appearance-none">
                    <option value="" className="text-navy">Inquiry Type</option>
                    <option value="Mentorship" className="text-navy">1-on-1 Research Mentorship</option>
                    <option value="Patent" className="text-navy">Patent & Formulation Support</option>
                    <option value="DataScience" className="text-navy">Bio Data Science Course</option>
                  </select>
                  <textarea name="message" placeholder="Describe your project or query..." rows={4} required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple transition-all resize-none"></textarea>
                  <button type="submit" className="w-full py-5 bg-purple text-white font-black rounded-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                    <Send size={20} /> Transmit Message
                  </button>
                  {status === 'error' && <p className="text-red-400 text-center font-bold text-sm">Transmission Failed. Check Connection.</p>}
                </form>
              </>
            )}
          </div>

          {/* Expert Guidance FAQ */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-navy">Research Support FAQ</h2>
            {[
              { q: "Do you help with Journal selection?", a: "Yes, part of my mentorship involves identifying high-impact Scopus journals for your specific research niche." },
              { q: "Is Data Science necessary for Biology?", a: "Absolutely. Modern research relies on computational analysis. My courses bridge this exact gap." },
              { q: "Is Patent consultation available globally?", a: "Yes, I provide technical documentation support for international patent filings." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                <h3 className="font-black text-navy mb-2 flex gap-3 text-lg"><GraduationCap className="text-purple w-6 h-6" /> {faq.q}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;