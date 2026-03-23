import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Video } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

  const videoFeedback = [
    { id: 1, src: "/images/v.mp4", title: "Live Research Session A" },
    { id: 2, src: "/images/v1.mp4", title: "Global Batch Interaction" }
  ];

  const testimonials = [
    {
      id: 1,
      content: "Really enjoyed the session. The session was very informative, effectively demonstrate practical implementation of the field and skills, also beautifully described the importance of critical thinking for effective research work. Your work in the field and research experience is very inspiring, excited to learn a lot from you.",
      author: "Nikoo Shaikh",
      role: "Researcher",
      rating: 5,
    },
    {
      id: 2,
      content: "Amazing session on Critical Thinking! Your focus on problem identification, asking the right questions, and logical analysis really opened my eyes to how deep thinking drives real research and biotech careers. Loved the in-silico drug design demo, it showed how skills and mindset shape future professionals.",
      author: "Tooba Hussain",
      role: "Biotech Student",
      rating: 5,
    },
    {
      id: 3,
      content: "Thankful for the dedication and effort in guiding students toward advanced biotech and overall research careers. Highly recommended for anyone who wants to grow in modern scientific research and skill development.",
      author: "Hajra Ilyas",
      role: "Biotechnologist | Research & Innovation Enthusiast",
      rating: 5,
    },
    {
      id: 4,
      content: "I attended my first class of Biocareer by Abdur Rehman on Gene and Protein Analysis, and it was honestly very useful and productive. Sir explained complex concepts in such a clear and practical way that it made the topic easy to understand and exciting to learn. Truly grateful for this learning opportunity.",
      author: "Heart's Ease",
      role: "Bioinformatics Student",
      rating: 5,
    },
    {
      id: 5,
      content: "I attended this class. It was a top notch of guidance and information. Sir clear difficult steps in a very easy way.. It's easy to learn understand and work practically with this platform. Recommended 👍",
      author: "Nabia Nabia",
      role: "Research Scholar",
      rating: 5,
    },
    {
      id: 6,
      content: "Irreplaceable job you r doing sir rehman truly indispensable.",
      author: "Mahnor Abbasi",
      role: "Biotech Professional",
      rating: 5,
    },
    {
      id: 7,
      content: "Your course content is excellent and highly aligned with the current job market. If all the course components are covered thoroughly, it will be an outstanding program.",
      author: "Kamran Asif",
      role: "Assistant Scientific Officer at Jhpiego - Johns Hopkins University",
      rating: 5,
    },
    {
      id: 8,
      content: "The lecture had covered the first key step of any big project which the 'newal Idea' a great topic for each scientist or researcher. Thanks alot. Very Interactive session 👍",
      author: "Sami Rehman / Sami Scientist",
      role: "Sales and Application Officer at PMA",
      rating: 5,
    },
    {
      id: 9,
      content: "Sir It was a great learning experience.",
      author: "Ayesha Yousaf",
      role: "Life Sciences Student",
      rating: 5,
    },
    {
      id: 10,
      content: "I am great ful to have had the opportunity to learn from an amazing mentor his expertise in bioinformatics has been transformative my research for my research. Thanks to his guidance, now I am confident in publishing innovative work in high impact journal.",
      author: "Shazia Dawood",
      role: "Post-Graduate Researcher",
      rating: 5,
    },
    {
      id: 11,
      content: "This course is highly recommended. Its the need of time for bio students/instructors to go through advances in applied bio & genetic research. Mentor has some extra golds (very much supportive).",
      author: "Haroon Hani",
      role: "Applied Biology Instructor",
      rating: 5,
    },
    {
      id: 12,
      content: "Truly an affable session! I abhor passive learning and the acrimonious gap between theory and industry. Your audacious approach makes bioinformatics exciting, and the aesthetic of practical workflows is inspiring.",
      author: "Hassan Butt",
      role: "3rd Year PharmD Student at UoK | Pharmaceutical Research",
      rating: 5,
    },
    {
      id: 13,
      content: "Great to have such supportive mentor.",
      author: "Muhammad Imran",
      role: "Pharmacist | MedyLix Healthcare",
      rating: 5,
    },
    {
      id: 14,
      content: "I joined the session and found it really helpful. Initially, I had doubts and thought it might be a scam, but the way you respond, encouraged critical thinking and idea generation was impressive. As a Biotechnology student, I have lots of ideas, but struggle to execute them. Your approach was inspiring and I appreciate it",
      author: "IRFA Abbasi",
      role: "Biotechnologist | Quality Controller",
      rating: 5,
    },
    {
      id: 15,
      content: "I sincerely appreciate the insightful session on bioinformatic tools; it greatly enhanced my understanding of modern computational approaches in biological research. Thank you for sharing your expertise and making the concepts clear and practically useful.",
      author: "Nabeela Tariq",
      role: "Professor at SBK Women University",
      rating: 5,
    },
    {
      id: 16,
      content: "Dedication to research work and his support to every student is much impressive. Mentor of great worth",
      author: "abid makhdoom",
      role: "Digital Freelancer | Web Developer | Biologist",
      rating: 5,
    },
    {
      id: 17,
      content: "Grateful for the opportunity to share knowledge and inspire future innovators in biotechnology.",
      author: "Hajra ILyas",
      role: "Biotechnologist",
      rating: 5,
    },
    {
      id: 18,
      content: "Today's session was a game-changer! You shifted the focus from memorizing pathways to designing solutions and thinking like a scientist. The blend of computational biology, AI, and critical thinking was 🔥. RECOMMEND for students want to tackle real-world drug discovery challenges 💡.",
      author: "Jawaria Qureshi",
      role: "Computational Biology Enthusiast",
      rating: 5,
    },
    {
      id: 19,
      content: "Best platform indeed!! Proud of Honorable Mentor because of his high ranked achievements! Highly recommended!!",
      author: "Saba Shamim",
      role: "Research Scholar",
      rating: 5,
    },
    {
      id: 20,
      content: "Indeed best platform",
      author: "Jethanand Soothar",
      role: "Biotech Student",
      rating: 5,
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 lg:py-24 bg-white overflow-hidden text-navy">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- LIVE CLASS VIDEO SLIDER --- */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                  <button onClick={() => setVideoIndex((prev) => (prev - 1 + videoFeedback.length) % videoFeedback.length)} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-600 transition-all">
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button onClick={() => setVideoIndex((prev) => (prev + 1) % videoFeedback.length)} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-600 transition-all">
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
                    src={video.src}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- TEXT TESTIMONIALS SLIDER --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className={`inline-flex items-center gap-3 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <span className="w-8 h-[2px] bg-purple-600" />
              <span className="text-purple-600 font-black text-xs uppercase tracking-widest">Student Reviews ({testimonials.length})</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black leading-none tracking-tighter">
              What Our <br /> <span className="text-purple-600">Scientists</span> Say
            </h2>
            <div className="flex gap-4">
              <button onClick={prevSlide} className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all shadow-sm">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all shadow-sm">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="relative h-[420px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95 pointer-events-none'}`}
              >
                <div className="bg-white rounded-[2.5rem] p-10 h-full border border-gray-100 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-purple/20 transition-all duration-500">
                  <Quote className="absolute -top-4 -right-4 w-32 h-32 text-purple-600/5 rotate-12 transition-transform group-hover:rotate-0" />
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-purple-400" fill="currentColor" />)}
                    </div>
                    <p className="text-lg lg:text-xl leading-relaxed font-extrabold italic text-navy group-hover:text-purple transition-colors line-clamp-6">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="relative z-10 border-t border-gray-100 pt-6">
                    <div className="font-black text-xl tracking-tight text-navy">{testimonial.author}</div>
                    <div className="text-[10px] text-purple font-black mt-1 uppercase tracking-widest">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;