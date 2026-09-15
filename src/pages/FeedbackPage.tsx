import { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, MessageCircle, Facebook, Linkedin, Youtube, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { useScrollToTop } from '../hooks/useScrollToTop';

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

const FeedbackPage = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title="Student Feedback & Results - BioCareer"
        description="Real feedback from BioCareer students on Facebook, LinkedIn, YouTube and WhatsApp - verified results from a 100% success rate across every live session."
        path="/feedback"
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

      {/* Social Proof - thousands of students on Facebook & LinkedIn */}
      <section className="py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-purple font-black text-sm uppercase tracking-widest mb-4 block">
              Real Results
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-navy mb-4">
              Trusted by <span className="text-purple">Thousands of Students</span>
            </h1>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              A 100% success rate across every live session - verified publicly by students, in their own words.
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

      {/* Video Feedback - live class recordings */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <VideoFeedback />
        </div>
      </section>
    </div>
  );
};

export default FeedbackPage;
