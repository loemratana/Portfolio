import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { scrollToSection } from '../../lib/utils';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map(item => item.id));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>

            <div className="hidden lg:flex gap-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>

          {mobileOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-white/10 space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-white/10 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}