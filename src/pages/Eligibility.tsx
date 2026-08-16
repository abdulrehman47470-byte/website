import { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  FlaskConical,
  Dna,
  Cpu,
  Briefcase,
  CheckCircle2,
  Globe,
  Calendar,
  Video,
  Clock,
  Award,
  Users,
  MessageCircle,
  ShieldCheck,
  BadgeCheck,
  GraduationCap,
  Mail,
  Facebook,
  Linkedin,
  Youtube,
  ChevronDown,
  Wallet,
  Lock,
  Play,
  BrainCircuit,
  BookOpenCheck,
  Compass,
  Coins,
  FileBadge,
  BarChart3,
  Microscope,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { useScrollToTop } from '../hooks/useScrollToTop';

const WHATSAPP_NUMBER = '923291698616';
const PHONE_DISPLAY = '0329 1698616';
const DEMO_LINK = 'https://drive.google.com/file/d/1cQj-yE7iY1RA-XFCF7w7xlQEZpp9TRUB/view?usp=sharing';

const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

interface FieldEntry {
  name: string;
  desc: string;
}

interface FieldGroup {
  group: string;
  fields: FieldEntry[];
}

const fieldGroups: FieldGroup[] = [
  {
    group: 'General',
    fields: [
      {
        name: 'General Biological Sciences',
        desc: "Doesn't fit one exact field? This general biosciences track covers you too.",
      },
    ],
  },
  {
    group: 'Organismal & Taxonomic Fields',
    fields: [
      { name: 'Zoology', desc: 'Study of animals, their behavior, and physiology.' },
      { name: 'Botany', desc: 'Study of plants, growth, and processes.' },
      { name: 'Microbiology', desc: 'Study of bacteria, viruses, and fungi.' },
      { name: 'Mycology', desc: 'Study of fungi.' },
      { name: 'Entomology', desc: 'Study of insects.' },
      { name: 'Ichthyology', desc: 'Study of fish.' },
      { name: 'Ornithology', desc: 'Study of birds.' },
      { name: 'Herpetology', desc: 'Study of reptiles and amphibians.' },
      { name: 'Mammalogy', desc: 'Study of mammals.' },
    ],
  },
  {
    group: 'Molecular & Cellular Fields',
    fields: [
      { name: 'Genetics', desc: 'Study of genes, heredity, and DNA.' },
      { name: 'Biochemistry', desc: 'Chemical processes inside living things.' },
      { name: 'Cell Biology', desc: 'Structure and function of cells.' },
      { name: 'Molecular Biology', desc: 'Biological activity at the molecular level.' },
      { name: 'Immunology', desc: 'Study of immune systems and disease defense.' },
      { name: 'Virology', desc: 'Study of viruses and how they act.' },
    ],
  },
  {
    group: 'Systems & Environmental Fields',
    fields: [
      { name: 'Ecology', desc: 'How organisms interact with each other and nature.' },
      { name: 'Evolutionary Biology', desc: 'How species change and originate over time.' },
      { name: 'Physiology', desc: 'How living organism systems function.' },
      { name: 'Marine Biology', desc: 'Life in oceans and saltwater environments.' },
      { name: 'Astrobiology', desc: 'Study of potential life in the universe.' },
    ],
  },
  {
    group: 'Health & Medical Sciences',
    fields: [
      { name: 'MBBS', desc: 'Bachelor of Medicine & Surgery — study and practice of human medicine.' },
      { name: 'BDS', desc: 'Bachelor of Dental Surgery — study of oral and dental health.' },
      { name: 'Pharm-D', desc: 'Doctor of Pharmacy — drug therapy, formulation, and clinical practice.' },
      { name: 'DVM', desc: 'Doctor of Veterinary Medicine — diagnosis and treatment of animal health.' },
      { name: 'Nursing', desc: 'Patient care, clinical practice, and health management.' },
      { name: 'Physiotherapy (DPT)', desc: 'Physical rehabilitation and human movement science.' },
      { name: 'Public Health', desc: 'Population health, epidemiology, and disease prevention.' },
      { name: 'Nutrition & Dietetics', desc: 'Study of food, nutrition, and diet planning.' },
      { name: 'Biomedical Engineering', desc: 'Applying engineering principles to medicine and biology.' },
      { name: 'Medical Laboratory Sciences', desc: 'Diagnostic testing and clinical laboratory analysis.' },
    ],
  },
  {
    group: 'Interdisciplinary & Applied Fields',
    fields: [
      { name: 'Biotechnology', desc: 'Using tech and living matter together.' },
      { name: 'Bioinformatics', desc: 'Using computers to analyze genomic and biological data.' },
      { name: 'Biophysics', desc: 'Applying physics principles to biological systems.' },
      { name: 'Paleontology', desc: 'Study of ancient life via fossils.' },
      { name: 'Agricultural Sciences', desc: 'Crop, soil, and livestock production science.' },
      { name: 'Environmental Science', desc: 'Study of ecosystems and human impact on the environment.' },
      { name: 'Food Science & Technology', desc: 'Study of food production, safety, and processing.' },
      { name: 'Forensic Science', desc: 'Applying science to criminal investigation.' },
      { name: 'Neuroscience', desc: 'Study of the brain and nervous system.' },
    ],
  },
];

const allFields = fieldGroups.flatMap((g) => g.fields);

const skillCategories = [
  {
    title: 'High Demand Research Skills',
    icon: FlaskConical,
    accent: 'bg-navy',
    items: [
      'Research Idea Generation',
      'Research Writing',
      'International Research Publication',
      'AI Research Automation',
    ],
  },
  {
    title: 'High Earning PharmD Skills',
    icon: Dna,
    accent: 'bg-purple',
    items: [
      'Bioinformatics Analysis',
      'Mutation Analysis',
      'Target Identification',
      'Structure Prediction',
      'AI & ML in Research',
      'Drug Formulation & Analysis',
      'ADME Analysis',
      'DeNovo Drug Design',
      'Vaccine Formulation, Construction & Analysis',
      'Molecular Docking',
      'Molecular Simulation (GROMACS)',
      'Pharmacokinetic Analysis',
      'Chemical Bond Analysis',
      'Flavonoids Compounds',
    ],
  },
  {
    title: 'High Earning Data Science & AI Automation',
    icon: Cpu,
    accent: 'bg-navy',
    items: [
      'Data Analysis & Visualization',
      'BioPython',
      'Machine Learning for Biological Data',
      'Research AI Automation',
      'Data Analysis AI Automation',
    ],
  },
  {
    title: 'Online Earning & Job',
    icon: Briefcase,
    accent: 'bg-purple',
    items: [
      'Job Hunting',
      'Job Applying',
      'Freelancing',
      'Remote Working',
      'Portfolio Building',
      'CV Building',
      'Scholarship Hunting',
      'LinkedIn Optimisation',
    ],
  },
];

const classDetails = [
  { icon: Globe, title: 'Completely Online', desc: 'Learn from anywhere in the world — no campus, no commute.' },
  { icon: Calendar, title: '3 + 3 Month Structure', desc: '3 months of core learning, then 3 months of hands-on practical implementation.' },
  { icon: Video, title: 'Live + Recorded', desc: 'Join every session live or catch up anytime with full recordings.' },
  { icon: Clock, title: 'Weekend Evening Classes', desc: 'Sessions run on weekend evenings so they never clash with your studies or job.' },
  { icon: Award, title: 'Professional Certificate', desc: 'Earn a BioCareer Certificate of Completion, backed by an internationally approved CPD framework.' },
  { icon: Users, title: 'Limited Seats', desc: 'Small batches only, so every student gets direct, personal mentorship.' },
];

const achievements = [
  { icon: Cpu, title: 'High Earning Computational Skills of Your Field' },
  { icon: BarChart3, title: 'High Demand Data Science Skills' },
  { icon: BrainCircuit, title: 'High Demand Earning AI / Automation Skills of Your Field' },
  { icon: BookOpenCheck, title: 'Research Publication in Top International Journals — Free' },
  { icon: Award, title: 'International Certificate' },
  { icon: Compass, title: 'Job Hunting' },
  { icon: Coins, title: 'Online Earning' },
  { icon: FileBadge, title: 'Professional Portfolio' },
  { icon: Microscope, title: 'International-Level Bioscience Skills' },
];

const feedbackScreenshots = [
  {
    base: '/images/feedback/fb-1',
    alt: "Facebook comments from Heart's Ease and Nabia Nabia praising the Gene and Protein Analysis class",
    source: 'Facebook',
  },
  {
    base: '/images/feedback/fb-2',
    alt: 'Facebook comments from Shazia Dawood and Haroon Hani recommending the course',
    source: 'Facebook',
  },
  {
    base: '/images/feedback/fb-3',
    alt: 'Facebook comments from Jawaria Qureshi, Sami Scientist, Saba Shamim and Jethanand Soothar',
    source: 'Facebook',
  },
  {
    base: '/images/feedback/li-1',
    alt: 'LinkedIn comments from Nikoo Shaikh, Tooba Hussain and Hajra Ilyas',
    source: 'LinkedIn',
  },
  {
    base: '/images/feedback/li-2',
    alt: 'LinkedIn comments from Mahnor Abbasi, Kamran Asif, Sami Rehman and Ayesha Yousaf',
    source: 'LinkedIn',
  },
  {
    base: '/images/feedback/fb-4',
    alt: 'Comments from Honey Noor, Abid Mehmood Makhdoom and Ayesha Ayesha praising the mentorship',
    source: 'YouTube',
  },
  {
    base: '/images/feedback/wa-1',
    alt: 'Student message about the course being worth far more than the fee, with no hidden costs',
    source: 'WhatsApp',
  },
  {
    base: '/images/feedback/fb-5',
    alt: 'Comments from Muhammad Arif, Samreen Amir, Umer Shahzad MS and Romeo Chaudhery about the teaching style',
    source: 'YouTube',
  },
];

const sourceIcons: Record<string, typeof Facebook> = {
  Facebook,
  LinkedIn: Linkedin,
  YouTube: Youtube,
  WhatsApp: MessageCircle,
};

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
    handle: 'Abdur Rehman — BioCareer',
    href: 'https://www.facebook.com/profile.php?id=61586018271684',
  },
];

const avatarPalette = [
  'bg-purple text-white',
  'bg-navy text-white',
  'bg-amber-500 text-white',
  'bg-emerald-600 text-white',
  'bg-rose-500 text-white',
  'bg-sky-600 text-white',
];

function initialsAvatar(name: string, index: number) {
  const initial = name.trim().charAt(0).toUpperCase() || '?';
  const palette = avatarPalette[index % avatarPalette.length];
  return { initial, palette };
}

const videoFeedback = [
  { id: 1, src: '/images/v.mp4', title: 'Live Research Session A' },
  { id: 2, src: '/images/v1.mp4', title: 'Global Batch Interaction' },
];

const VideoFeedback = () => {
  const [videoIndex, setVideoIndex] = useState(0);

  return (
    <div className="bg-[#161440] rounded-[40px] overflow-hidden relative border border-white/10 shadow-2xl">
      <div className="grid lg:grid-cols-2 items-center">
        <div className="p-8 lg:p-16 space-y-6 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple/20 border border-purple/30 text-purple-300 text-[10px] font-bold uppercase tracking-widest">
            <Video className="w-3 h-3" /> Video Case Studies
          </div>
          <h2 className="text-3xl lg:text-5xl font-black leading-tight tracking-tighter">
            Watch Our <span className="text-purple-400">Live Impact</span>
          </h2>
          <p className="text-white/70 text-lg font-medium italic leading-relaxed">
            "{videoFeedback[videoIndex].title}"
          </p>

          <div className="flex gap-4 pt-4">
            <button
              onClick={() => setVideoIndex((prev) => (prev - 1 + videoFeedback.length) % videoFeedback.length)}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-600 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => setVideoIndex((prev) => (prev + 1) % videoFeedback.length)}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-600 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="relative aspect-video lg:aspect-square bg-black flex items-center justify-center overflow-hidden">
          {videoFeedback.map((video, index) => (
            <video
              key={video.id}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              controls
              muted
              playsInline
              preload={videoIndex === index ? 'metadata' : 'none'}
              src={video.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Eligibility = () => {
  useScrollToTop();

  const [selectedField, setSelectedField] = useState('');
  const [isRevealing, setIsRevealing] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const roadmapRef = useRef<HTMLDivElement>(null);

  const fieldInfo = useMemo(
    () => allFields.find((f) => f.name === selectedField),
    [selectedField]
  );

  useEffect(() => {
    if (!selectedField) {
      setShowRoadmap(false);
      return;
    }
    setIsRevealing(true);
    setShowRoadmap(false);
    const timer = window.setTimeout(() => {
      setIsRevealing(false);
      setShowRoadmap(true);
      window.setTimeout(() => {
        roadmapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 900);
    return () => window.clearTimeout(timer);
  }, [selectedField]);

  const waMessage = fieldInfo
    ? `Hi! I'm a ${fieldInfo.name} student/researcher and I'm interested in the BioCareer Skills Program. Please send me the payment details.`
    : `Hi! I'm interested in the BioCareer Skills Program. Please send me the payment details.`;

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title="Find Your Bio-Data Science Track — Skills Eligibility Check"
        description="Select your bioscience or health field — Zoology, Bioinformatics, Genetics, Microbiology, BDS, MBBS, Pharm-D, and more — and get a personalized roadmap of high-income research, PharmD, data science, and AI automation skills taught by Abdul Rehman, founder of BioCareer."
        path="/eligibility"
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

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple/5 to-white py-16 sm:py-24">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple/10 text-purple text-[11px] font-black uppercase tracking-widest rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Free Skills-Matching Tool
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy tracking-tight leading-[1.05] mb-6">
            Find Your Personalized <span className="text-purple">Bio-Data Science</span> Roadmap
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Select your field of study below — whether it's Zoology, Genetics, Bioinformatics, BDS, MBBS, or any of
            the {allFields.length} bioscience & health fields — and instantly see the exact high-income skills built
            for you.
          </p>
        </div>
      </section>

      {/* Field Selector */}
      <section className="pb-16 sm:pb-24 scroll-mt-24">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <p className="text-purple font-black text-xs uppercase tracking-widest mb-3">Step 1</p>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">
                What is your field of study or interest?
              </h2>

              <div className="relative">
                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="w-full appearance-none bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-5 text-white font-bold text-lg focus:outline-none focus:border-purple transition-all cursor-pointer"
                >
                  <option value="" className="text-navy">
                    Select your field...
                  </option>
                  {fieldGroups.map((group) => (
                    <optgroup key={group.group} label={group.group} className="text-navy font-bold">
                      {group.fields.map((f) => (
                        <option key={f.name} value={f.name} className="text-navy">
                          {f.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
              </div>

              {fieldInfo && (
                <p className="mt-4 text-white/60 font-medium italic animate-in fade-in duration-500">
                  {fieldInfo.name}: {fieldInfo.desc}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Loading / Analyzing state */}
      {isRevealing && (
        <section className="pb-24 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-5 bg-purple/10 rounded-2xl">
            <Dna className="w-6 h-6 text-purple animate-bounce" />
            <span className="text-navy font-black tracking-widest text-sm uppercase">
              Building your roadmap...
            </span>
          </div>
        </section>
      )}

      {/* Personalized Roadmap */}
      {showRoadmap && (
        <div ref={roadmapRef} className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <section className="pb-16 lg:pb-24 scroll-mt-24">
            <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="text-purple font-black text-sm uppercase tracking-widest mb-4 block">Step 2</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4">
                  Your Personalized Roadmap for <span className="text-purple">{selectedField}</span> Students
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  No matter which bio field you come from, these are the exact high-income skills that turn a{' '}
                  {selectedField} degree into a research, pharma, or data science career.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((cat, i) => {
                  const title = selectedField ? cat.title.replace('PharmD', selectedField) : cat.title;
                  return (
                  <div
                    key={cat.title}
                    className="bg-slate-50 rounded-[2.5rem] p-8 sm:p-10 border border-slate-100 hover:border-purple/30 hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${cat.accent} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <cat.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-navy leading-tight">
                        {i + 1}. {title}
                      </h3>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium leading-snug text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  );
                })}
              </div>

              <p className="text-center text-navy/60 font-bold italic mt-10 max-w-2xl mx-auto">
                Note: All skills will be taught from basics — designed to be easy to understand, whatever your
                starting point.
              </p>
            </div>
          </section>

          {/* Achievements After This Program */}
          <section className="pb-16 lg:pb-24">
            <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-purple font-black text-sm uppercase tracking-widest mb-4 block">
                  The Outcome
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">Achievements After This Program</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((a) => (
                  <div
                    key={a.title}
                    className="flex items-center gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-purple/30 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                      <a.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-black text-navy leading-snug">{a.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Watch the Demo */}
          <section className="pb-16 lg:pb-24">
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative bg-navy rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-14 text-center shadow-2xl overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple/20 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative z-10">
                  <span className="text-purple font-black text-sm uppercase tracking-widest mb-4 block">
                    See It In Action
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Watch the Full Program Demo</h2>
                  <p className="text-white/70 font-medium max-w-xl mx-auto mb-10">
                    See exactly how the classes, research tools, and workflows work before you enroll.
                  </p>
                  <a
                    href={DEMO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 group"
                  >
                    <div className="relative w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:bg-purple transition-all duration-300">
                      <Play className="w-6 h-6 text-purple ml-1 group-hover:text-white transition-colors duration-300" fill="currentColor" />
                      <span className="absolute inset-0 rounded-full bg-purple/30 animate-ping opacity-30" />
                    </div>
                    <span className="font-black text-white text-lg group-hover:text-purple transition-colors duration-300">
                      Watch Demo
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof — thousands of students on Facebook & LinkedIn */}
          <section className="pb-16 lg:pb-24">
            <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-purple font-black text-sm uppercase tracking-widest mb-4 block">
                  Real Results
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">
                  Trusted by <span className="text-purple">Thousands of Students</span>
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  A 100% success rate across every live session — verified publicly by students, in their own words.
                </p>
              </div>

              <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
                {feedbackScreenshots.map((shot) => {
                  const SourceIcon = sourceIcons[shot.source] ?? MessageCircle;
                  return (
                    <div
                      key={shot.base}
                      className="relative break-inside-avoid rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
                    >
                      <picture>
                        <source srcSet={`${shot.base}.avif`} type="image/avif" />
                        <img
                          src={`${shot.base}.webp`}
                          alt={shot.alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto block"
                        />
                      </picture>
                      <span className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black text-purple uppercase tracking-wide shadow-md">
                        <SourceIcon className="w-3 h-3" />
                        {shot.source}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Video Feedback — live class recordings */}
          <section className="pb-16 lg:pb-24">
            <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
              <VideoFeedback />
            </div>
          </section>

          {/* International Recognition */}
          <section className="py-16 lg:py-24">
            <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative bg-navy rounded-[2.5rem] lg:rounded-[3rem] p-8 md:p-14 overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
                  <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/5 text-white/90 text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/10">
                      <BadgeCheck className="w-3.5 h-3.5 text-purple" /> Internationally Recognized
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter">
                      Backed by <span className="text-purple">Global Standards</span>
                    </h2>
                    <p className="text-white/70 text-base lg:text-lg leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                      BioCareer is an <span className="font-bold text-white">Approved CPD Provider through The CPD
                      Group (UK)</span> and a recognized <span className="font-bold text-white">Partner
                      Organization of the International Bioscience Affiliation Initiative (IBAI)</span> — reflecting
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
                          alt="BioCareer — Approved CPD Provider Certificate"
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
                          alt="BioCareer — IBAI Certificate of Recognition, Partner Organization"
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

          {/* About the Classes */}
          <section className="pb-16 lg:pb-24">
            <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-purple font-black text-sm uppercase tracking-widest mb-4 block">
                  How It Works
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">About the Classes</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {classDetails.map((d) => (
                  <div
                    key={d.title}
                    className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-purple/10 flex items-center justify-center mb-5">
                      <d.icon className="w-6 h-6 text-purple" />
                    </div>
                    <h3 className="font-black text-navy text-lg mb-2">{d.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing / CTA */}
          <section className="pb-16 lg:pb-24">
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative bg-navy rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-14 text-center shadow-2xl overflow-hidden">
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple/20 blur-[90px] rounded-full pointer-events-none" />
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple text-white text-[11px] font-black uppercase tracking-widest rounded-full mb-6 animate-pulse">
                    Limited Seats Left
                  </span>
                  <p className="text-white/70 font-bold text-lg max-w-2xl mx-auto mb-2">
                    Universities take lakhs in fees but still don't teach these skills.
                  </p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8 max-w-2xl mx-auto leading-tight">
                    I'm teaching these high-demand skills for only
                  </h2>

                  <div className="inline-flex items-end gap-3 mb-10">
                    <Wallet className="w-10 h-10 text-purple mb-2" />
                    <span className="text-6xl sm:text-7xl font-black text-white">Rs 3,000</span>
                    <span className="text-white/50 font-bold pb-3">/ one-time</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                    <a
                      href={waLink(waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-purple text-white font-black rounded-2xl shadow-2xl shadow-purple/30 hover:bg-white hover:text-navy hover:-translate-y-1 transition-all"
                    >
                      <MessageCircle className="w-5 h-5" /> Interested? Message Me
                    </a>
                  </div>
                  <p className="text-white/50 font-bold mt-5 text-sm">
                    Only if you're interested — message{' '}
                    <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-purple font-black">
                      {PHONE_DISPLAY}
                    </a>{' '}
                    and I'll personally send you the payment details.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-[11px] font-black text-white/40 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Secure Enrollment</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Personally Mentored</span>
                    <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> Certified on Completion</span>
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
                Founder of BioCareer — researcher, patent holder, and mentor to hundreds of biology and pharmacy
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

          {/* Final CTA */}
          <section className="pb-24 text-center">
            <div className="max-w-2xl mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">
                Ready to Turn Your {selectedField} Degree Into a Career?
              </h2>
              <p className="text-slate-600 font-medium mb-8">
                Seats are limited each batch. Message now to lock your spot and get the payment details.
              </p>
              <a
                href={waLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-purple text-white font-black rounded-2xl shadow-2xl shadow-purple/30 hover:bg-navy hover:-translate-y-1 transition-all"
              >
                <MessageCircle className="w-5 h-5" /> Message {PHONE_DISPLAY}
              </a>
              <p className="text-slate-400 font-bold mt-6 text-sm flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" /> Or email biocareer12@gmail.com
              </p>
            </div>
          </section>
        </div>
      )}

      {/* Empty state prompt when no field selected yet */}
      {!selectedField && !isRevealing && (
        <section className="pb-24 text-center">
          <div className="max-w-lg mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 mb-6 opacity-60">
              {['Zoology', 'Genetics', 'Bioinformatics', 'Microbiology', 'Biotechnology'].map((f, i) => {
                const { initial, palette } = initialsAvatar(f, i);
                return (
                  <span
                    key={f}
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-xs ${palette}`}
                  >
                    {initial}
                  </span>
                );
              })}
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
              Pick a field above to see your personalized skill roadmap
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Eligibility;
