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
                Software Developer · GBOB Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-wider font-bold transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-cyan-300 font-extrabold'
                    : 'text-blue-200/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenCertificates && (
              <button
                type="button"
                onClick={onOpenCertificates}
                className="px-3 py-1.5 text-xs font-bold text-cyan-300 bg-[#0c1836] hover:bg-blue-900/60 border border-blue-700/80 hover:border-cyan-400 rounded-lg transition-all shadow-xs"
              >
                Credentials (6)
              </button>
            )}

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=Portfolio%20Inquiry`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg shadow-sm shadow-blue-500/30 transition-all inline-flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3 text-cyan-200" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-blue-200 hover:text-white hover:bg-blue-900/40 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070d1e] border-b border-blue-900/80 px-4 pt-2 pb-5 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-bold rounded-lg transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'bg-blue-950 text-cyan-300 border border-blue-700/60'
                  : 'text-blue-100 hover:bg-blue-900/30'
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-blue-900/60 flex flex-col gap-2">
            {onOpenCertificates && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCertificates();
                }}
                className="w-full text-left px-3 py-2 text-xs font-bold text-cyan-300 bg-blue-950/80 border border-blue-700/60 rounded-lg"
              >
                View 6 Verified Credentials
              </button>
            )}

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=Portfolio%20Inquiry`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-3 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg inline-flex items-center justify-center gap-1.5 shadow-md"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>abrarsafoora161@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
