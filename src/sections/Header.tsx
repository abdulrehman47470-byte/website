import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useOptimizedScroll } from '../hooks/useOptimizedScroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useOptimizedScroll(() => setIsScrolled(window.scrollY > 20));

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/#courses' },
    {
      name: 'Explore',
      href: '#',
      dropdown: [
        { name: 'Testimonials', href: '/#testimonials' },
        { name: 'Mentorship', href: '/#grow' },
        { name: 'Impact Stats', href: '/#stats' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    if (href.startsWith('/#')) {
      if (location.pathname === '/') {
        document.querySelector(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => document.querySelector(href.substring(1))?.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      {/* Width decreased to 1280px and padding optimized for a "Fitted" look */}
      <div 
        className={`max-w-[1280px] mx-auto mt-4 transition-all duration-500 pointer-events-auto flex items-center
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-md py-1 rounded-full border border-slate-200 shadow-lg px-8 translate-y-1' 
            : 'bg-white py-2 rounded-full border border-slate-100 shadow-md px-6'
          }`}
      >
        <div className="flex items-center justify-between w-full">
          
          {/* LOGO: Scaled to fit perfectly in the tighter bar */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img 
              src="/images/logo.png" 
              alt="BioCareer" 
              className={`object-contain transition-all duration-300 group-hover:scale-105 
                ${isScrolled ? 'h-16' : 'h-24 sm:h-32'}`} 
            />
          </Link>

          {/* NAV: Bold and Large but spaced for the smaller box */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/nav">
                {link.dropdown ? (
                  <div 
                    onMouseEnter={() => setActiveDropdown(link.name)} 
                    onMouseLeave={() => setActiveDropdown(null)} 
                    className="py-4"
                  >
                    <button className="flex items-center gap-1.5 font-black text-navy hover:text-purple uppercase text-base tracking-wider transition-colors">
                      {link.name} <ChevronDown className={`w-4 h-4 stroke-[3px] transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-60 bg-white rounded-[2rem] shadow-2xl border border-slate-100 py-4 overflow-hidden animate-in fade-in slide-in-from-top-2">
                        {link.dropdown.map((item) => (
                          <button 
                            key={item.name} 
                            onClick={() => handleNavigation(item.href)} 
                            className="block w-full text-center px-6 py-4 text-xs font-black text-navy hover:bg-purple/5 hover:text-purple transition-all uppercase tracking-widest"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button 
                    onClick={() => handleNavigation(link.href)} 
                    className="font-black text-navy hover:text-purple uppercase text-base tracking-wider py-4 transition-colors relative after:content-[''] after:absolute after:bottom-2 after:left-0 after:w-0 after:h-[3px] after:bg-purple after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* CTA: Compact yet Bold */}
          <div className="hidden lg:block flex-shrink-0">
            <button 
              onClick={() => handleNavigation('/#courses')} 
              className="px-8 py-3.5 bg-purple text-white font-black text-xs uppercase tracking-[0.2em] rounded-full shadow-xl shadow-purple/20 hover:bg-navy transition-all active:scale-95"
            >
              COURSE CONTENT
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-navy" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-4 bg-white rounded-[2.5rem] shadow-2xl p-8 border border-slate-100 pointer-events-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavigation(link.href)} 
                className="text-center py-4 px-6 text-lg font-black text-navy hover:bg-purple/5 rounded-[1.5rem] uppercase tracking-widest transition-all"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavigation('/#courses')} 
              className="mt-6 w-full py-5 bg-purple text-white font-black rounded-full text-base uppercase tracking-widest shadow-lg"
            >
              START RESEARCH
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;