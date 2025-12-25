import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
];

export function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container-main flex items-center justify-between h-16">
        <Link to="/" className="text-sm font-mono text-foreground hover:text-accent transition-colors">
          ~/bailey
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            isHome ? (
              <a 
                key={item.label}
                href={item.href.replace('/', '')} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link 
                key={item.label}
                to={item.href} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )
          ))}
          <Link to="/resume" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Resume
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container-main py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              isHome ? (
                <a
                  key={item.label}
                  href={item.href.replace('/', '')}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-foreground"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-foreground"
                >
                  {item.label}
                </Link>
              )
            ))}
            <Link
              to="/resume"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-foreground"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
