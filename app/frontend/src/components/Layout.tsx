import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Sparkles } from 'lucide-react';
import { client } from '@/lib/api';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await client.auth.me();
        if (res?.data) setUser(res.data);
      } catch {
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Generator', path: '/generator' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
  ];

  const handleLogin = () => {
    client.auth.toLogin();
  };

  const handleLogout = async () => {
    await client.auth.logout();
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F8F8F8] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0F0F0F]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#6C63FF]" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] bg-clip-text text-transparent">
                DramaAI
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#6C63FF] ${
                    location.pathname === link.path ? 'text-[#6C63FF]' : 'text-[#A0A0A0]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Auth Button */}
            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6C63FF]/20 flex items-center justify-center">
                    <User className="w-4 h-4 text-[#6C63FF]" />
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-sm text-[#A0A0A0] hover:text-white transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-[#6C63FF] hover:bg-[#5A52E0] transition-colors text-white"
                >
                  Sign In
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#0F0F0F]/95 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.path ? 'text-[#6C63FF]' : 'text-[#A0A0A0]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/5">
                {user ? (
                  <button
                    onClick={() => { handleLogout(); setMobileOpen(false); }}
                    className="text-sm text-[#A0A0A0] hover:text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => { handleLogin(); setMobileOpen(false); }}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-[#6C63FF] text-white"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#6C63FF]" />
                <span className="text-lg font-bold bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] bg-clip-text text-transparent">
                  DramaAI
                </span>
              </div>
              <p className="text-sm text-[#A0A0A0] max-w-md">
                AI-powered short drama script generator. Create compelling storylines, 
                character profiles, and full episode scripts in seconds.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-[#A0A0A0] hover:text-[#6C63FF] transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-sm text-[#A0A0A0] hover:text-[#6C63FF] transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="text-sm text-[#A0A0A0] hover:text-[#6C63FF] transition-colors">Privacy Policy</Link></li>
                <li><Link to="/pricing" className="text-sm text-[#A0A0A0] hover:text-[#6C63FF] transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-[#A0A0A0]">
                <li>hello@dramaai.com</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-[#A0A0A0]">
            © {new Date().getFullYear()} DramaAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}