'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Screens', href: '#screens' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/images/brew-logs-grey.png"
              alt="Brew Logs"
              width={32}
              height={32}
              className="h-6 w-6"
            />
            <span className="text-sm font-semibold text-zinc-900">Brew Logs</span>
            <Badge variant="accent">Beta</Badge>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button href="https://brewlog.app/brew">Open Brew Logs</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-700 hover:text-zinc-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button href="https://brewlog.app/brew" className="w-full">
                Open Brew Logs
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
