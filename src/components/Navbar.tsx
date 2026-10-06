import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCertificates?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCertificates }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'projects', 'skills', 'experience', 'interests', 'education', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#interests', label: 'Interests' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#070d1e]/90 backdrop-blur-md border-b border-blue-900/70 shadow-lg shadow-black/30'
          : 'bg-[#070d1e]/60 backdrop-blur-xs border-b border-blue-950/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Identifier - Title positioned strictly below name with ample separation */}
          <a
            href="#about"
            className="flex items-center gap-3 text-white font-bold tracking-tight hover:opacity-90 transition-opacity shrink-0 mr-6 md:mr-8 lg:mr-12"
          >
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 text-stone-950 flex items-center justify-center text-xs font-black tracking-normal shadow-sm shadow-cyan-500/25 shrink-0">
              SA
            </span>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white leading-tight whitespace-nowrap">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-semibold text-cyan-400 tracking-normal leading-tight whitespace-nowrap mt-0.5">
                {PERSONAL_INFO.title}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-wider font-bold transition-colors duration-150 relative py-1 ${
                  activeSection === link.href.substring(1)
                    ? 'text-cyan-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-cyan-400 after:shadow-sm after:shadow-cyan-400'
                    : 'text-blue-200/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenCertificates && (
              <button
                type="button"
                onClick={onOpenCertificates}
                className="text-xs font-bold px-3 py-2 text-cyan-300 hover:text-white hover:bg-blue-900/50 rounded-lg transition-colors border border-blue-800/80"
              >
                Certificates
              </button>
            )}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=Portfolio%20Inquiry`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3.5 py-2 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all shadow-md shadow-blue-500/25"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-blue-200 hover:text-white hover:bg-blue-900/50 rounded-lg focus-visible:outline-cyan-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-blue-900 bg-[#070d1e] px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-blue-600 text-white font-extrabold shadow-sm'
                    : 'text-blue-200 hover:bg-blue-900/50 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-blue-900 flex flex-col gap-2">
            {onOpenCertificates && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCertificates();
                }}
                className="w-full text-center py-2.5 px-3 text-sm font-bold border border-blue-700 rounded-lg text-cyan-300 hover:bg-blue-900/50"
              >
                View Verified Certificates (6)
              </button>
            )}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=Portfolio%20Inquiry`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold rounded-lg hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-500/25"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Directly via Email</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
