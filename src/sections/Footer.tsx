import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Research Tracks', href: '/#courses' },
    { name: 'Contact', href: '/contact' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'FAQ', href: '/faq' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://web.facebook.com/profile.php?id=61586018271684', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abdul-rehman147', label: 'LinkedIn' },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href.substring(1));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(href);
    }
  };

  return (
    <footer id="footer" ref={sectionRef} className="bg-navy pt-20 pb-8 overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          
          <div className={`space-y-6 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link to="/" className="flex items-center gap-2">
              <span className="font-black text-2xl tracking-tighter text-white">
                BIO<span className="text-purple">CAREER</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Advancing Biotechnology through expert research mentorship, patent strategy, and specialized Bio-Data Science training.
            </p>
          </div>

          <div className={`transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '150ms' }}>
            <h3 className="text-white font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={link.name} className="transition-all duration-500" style={{ transitionDelay: `${200 + index * 80}ms` }}>
                  <button onClick={() => handleNavigation(link.href)} className="text-white/70 hover:text-purple hover:translate-x-2 transition-all duration-300">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={`transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              {supportLinks.map((link, index) => (
                <li key={link.name} className="transition-all duration-500" style={{ transitionDelay: `${350 + index * 80}ms` }}>
                  <Link to={link.href} className="text-white/70 hover:text-purple hover:translate-x-2 transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={`space-y-6 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '450ms' }}>
            <h3 className="text-white font-bold text-lg mb-6">Direct Contact</h3>
            <div className="space-y-4">
              <a href="mailto:biocareer12@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-white transition-all">
                <Mail className="w-5 h-5 text-purple" />
                <span>biocareer12@gmail.com</span>
              </a>
              <a href="tel:03291698616" className="flex items-center gap-3 text-white/70 hover:text-white transition-all">
                <Phone className="w-5 h-5 text-purple" />
                <span>0329 1698616</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-purple" />
                <span>Lahore, Pakistan (Global Support)</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-purple hover:scale-110 transition-all ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                  style={{ transitionDelay: `${600 + index * 50}ms` }}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm font-bold uppercase tracking-widest">
            © 2024 BIOCAREER. Mentored by Abd-Ur-Rehman Munir.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-white/50 hover:text-white">Privacy</Link>
            <Link to="/terms" className="text-white/50 hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;