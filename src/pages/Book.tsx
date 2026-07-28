import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft,
  BookOpen,
  Sparkles,
  Target,
  Database,
  Smartphone,
  Package,
  CheckCircle2,
  Lock,
  ShieldCheck,
  Truck,
  Rocket,
  Wrench,
  Library,
  MessageCircle,
  Mail,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { useScrollToTop } from '../hooks/useScrollToTop';
import BookFlipper, { type FlipBookPage } from '../components/BookFlipper';

const WHATSAPP_NUMBER = '923020402443';
const ORDER_PHONE_DISPLAY = '0302 0402443';
const BOOK_TITLE = 'Start Earning With Your Bioscience Degree';

const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const tocPages: FlipBookPage[] = Array.from({ length: 8 }, (_, i) => ({
  avif: `/images/book/toc-${i + 1}.avif`,
  webp: `/images/book/toc-${i + 1}.webp`,
  jpg: `/images/book/toc-${i + 1}.jpg`,
  alt: `Table of Contents — page ${i + 1} of 8`,
}));

const highlights = [
  {
    icon: BookOpen,
    title: '12 Parts · 78 Chapters',
    desc: 'A complete, structured 330-page career system',
  },
  {
    icon: Sparkles,
    title: '250 AI Startup Ideas',
    desc: 'Plus 500 ready-to-use AI prompts for students',
  },
  {
    icon: Target,
    title: '19 Bioscience Earning Paths',
    desc: 'Field-by-field career and research blueprints',
  },
  {
    icon: Database,
    title: '200+ Research Ideas',
    desc: 'Ready-to-pursue project directions, cheat sheets and worksheets',
  },
];

const whyBook = [
  {
    icon: Wrench,
    title: 'Real Tools, Not Theory',
    desc: 'Every chapter names the exact platform, template, or tool to open the same day — GitHub, LinkedIn, GeneSight, and more.',
  },
  {
    icon: Rocket,
    title: 'Built From Real Execution',
    desc: 'A direct transcription of the skills, research discipline, and strategies that built a funded AI company from scratch.',
  },
  {
    icon: Library,
    title: 'A Standing Reference',
    desc: 'Twelve parts designed to be reopened for years — resources, cheat sheets, checklists, and worksheets, not a single read.',
  },
];

const digitalFeatures = [
  'Instant access immediately after your order is confirmed',
  'Read on any device — phone, tablet, or laptop',
  'The complete 330-page book — all 12 Parts & 9 Appendices',
  '250 AI startup ideas and 500 ready-to-use AI prompts included',
  'Lifetime access — download once and keep forever',
];

const hardcoverFeatures = [
  'Instant digital eBook access the moment you order',
  'Premium printed hardcover, professionally bound',
  'Delivered to your doorstep within 1 week',
  'Everything included in the Digital Edition',
  'The perfect keepsake for offline reading and gifting',
];

const Book = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${BOOK_TITLE} — Book by Abdul Rehman`}
        description="Master the high-income skills every bioscience degree holder needs. A 330-page, field-tested career roadmap from Abdul Rehman, Founder & CEO of GeneSight and BioCareer. Available as a Digital eBook or Hardcover Edition."
        path="/book"
        image="/images/book/cover.jpg"
      />
      <Helmet>
        <link rel="preload" as="image" href="/images/book/cover.avif" type="image/avif" fetchPriority="high" />
      </Helmet>

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

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple/5 to-white py-16 sm:py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            {/* Cover */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div
                className="rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-[10px] sm:border-[12px] border-white"
                style={{ aspectRatio: '1959 / 2535' }}
              >
                <picture>
                  <source srcSet="/images/book/cover.avif" type="image/avif" />
                  <source srcSet="/images/book/cover.webp" type="image/webp" />
                  <img
                    src="/images/book/cover.jpg"
                    alt={`${BOOK_TITLE} — book cover by Abdul Rehman`}
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>

            {/* Copy */}
            <div>
              <span className="text-purple font-black text-sm uppercase tracking-widest mb-4 block">
                New Release
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy tracking-tight leading-[1.05] mb-6">
                Start Earning With Your <span className="text-purple">Bioscience Degree</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-6">
                Master the high-income skills every bioscience degree holder needs — a complete,
                field-tested roadmap from a career that moved from a biotechnology programme in
                Lahore to a remote Silicon Valley role, peer review for Wiley and Springer Nature,
                and an internationally funded AI company.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {highlights.map((h) => (
                  <div key={h.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple/10 flex items-center justify-center flex-shrink-0">
                      <h.icon className="w-6 h-6 text-purple" />
                    </div>
                    <div>
                      <p className="font-black text-navy leading-tight">{h.title}</p>
                      <p className="text-sm text-slate-500 font-medium">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-4 mb-6">
                <a
                  href="#pricing"
                  className="w-full text-center px-6 py-4 bg-purple text-white font-black rounded-2xl shadow-2xl shadow-purple/30 hover:bg-navy hover:-translate-y-1 transition-all"
                >
                  Get the Digital eBook <span className="text-white/70 font-bold">&middot; Rs 1,500</span>
                </a>
                <a
                  href="#pricing"
                  className="w-full text-center px-6 py-4 bg-white text-navy font-black rounded-2xl border-2 border-navy/10 hover:border-purple hover:text-purple hover:-translate-y-1 transition-all"
                >
                  Get the Hardcover Edition <span className="text-navy/40 font-bold">&middot; Rs 3,000</span>
                </a>
              </div>

              <a
                href={waLink(`Hi! I'd like to order "${BOOK_TITLE}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 mb-6 bg-purple/10 border-2 border-purple/20 rounded-2xl hover:bg-purple/15 hover:border-purple/40 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-purple flex-shrink-0" />
                <span className="text-navy font-black text-center">
                  To Order, Message This Number <span className="text-purple">{ORDER_PHONE_DISPLAY}</span>
                </span>
              </a>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Secure Ordering</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Instant Digital Delivery</span>
                <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5" /> Nationwide Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flipbook Preview */}
      <section className="py-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-purple font-black text-sm uppercase tracking-widest mb-4 block">
              Look Inside
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">
              Explore the Full Table of Contents
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Flip through every part and chapter before you buy — the complete contents,
              nothing hidden. The rest of the book unlocks the moment your order is confirmed.
            </p>
          </div>

          <BookFlipper pages={tocPages} ratio={1592 / 2060} />
        </div>
      </section>

      {/* Why This Book */}
      <section className="py-24 bg-navy text-white rounded-[4rem] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-[1350px] mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-black mb-16">Why This Book Is Different</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {whyBook.map((v) => (
              <div key={v.title} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <v.icon className="text-purple w-12 h-12 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 scroll-mt-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-purple font-black text-sm uppercase tracking-widest mb-4 block">
              Get Your Copy
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">Choose Your Format</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Two ways to start — the same complete book, delivered how you want to read it.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-14 text-center bg-navy rounded-[2rem] p-8 sm:p-10 shadow-2xl">
            <p className="text-white/60 font-black uppercase tracking-widest text-xs mb-3">
              Prefer to Order Directly?
            </p>
            <a
              href={waLink(`Hi! I'd like to order "${BOOK_TITLE}".`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-black text-white hover:text-purple transition-colors"
            >
              <MessageCircle className="w-7 h-7 text-purple flex-shrink-0" />
              {ORDER_PHONE_DISPLAY}
            </a>
            <p className="text-white/50 font-medium mt-3">
              Message this number anytime to order the eBook or Hardcover Edition
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Digital eBook */}
            <div className="flex flex-col bg-slate-50 rounded-[2.5rem] p-8 sm:p-10 border border-slate-100 hover:border-purple/30 hover:-translate-y-2 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-purple/10 flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-purple" />
              </div>
              <h3 className="text-2xl font-black text-navy mb-1">Digital eBook</h3>
              <p className="text-sm text-slate-500 font-bold mb-6">Instant online access after purchase</p>

              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl font-black text-navy">Rs 1,500</span>
                <span className="text-slate-400 font-bold pb-1.5">/ one-time</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {digitalFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-medium leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(`Hi! I'd like to order the Digital eBook of "${BOOK_TITLE}" for PKR 1,500.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-8 py-4 bg-purple text-white font-black rounded-2xl shadow-xl shadow-purple/25 hover:bg-navy hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Get the Digital eBook
              </a>
              <p className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-4">
                Secure order via WhatsApp &middot; Confirmed in minutes
              </p>
            </div>

            {/* Hardcover */}
            <div className="relative flex flex-col bg-navy rounded-[2.5rem] p-8 sm:p-10 shadow-2xl">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple text-white text-[11px] font-black uppercase tracking-widest px-5 py-2 rounded-full shadow-lg whitespace-nowrap">
                Most Popular
              </span>
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Package className="w-7 h-7 text-purple" />
              </div>
              <h3 className="text-2xl font-black text-white mb-1">Hardcover Edition</h3>
              <p className="text-sm text-slate-400 font-bold mb-6">eBook now &middot; printed copy within 1 week</p>

              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl font-black text-white">Rs 3,000</span>
                <span className="text-slate-400 font-bold pb-1.5">/ one-time</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {hardcoverFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-medium leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(`Hi! I'd like to order the Hardcover Edition of "${BOOK_TITLE}" for PKR 3,000.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-8 py-4 bg-white text-navy font-black rounded-2xl shadow-xl hover:bg-purple hover:text-white hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Get the Hardcover Edition
              </a>
              <p className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-4">
                Secure order via WhatsApp &middot; Confirmed in minutes
              </p>
            </div>
          </div>

          <p className="text-center text-slate-500 font-medium mt-10">
            Prefer email? Write to{' '}
            <a
              href={`mailto:biocareer12@gmail.com?subject=${encodeURIComponent(`Order: ${BOOK_TITLE}`)}`}
              className="text-purple font-bold hover:text-navy transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-4 h-4" /> biocareer12@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Book;
