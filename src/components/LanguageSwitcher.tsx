'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { locales } from '@/i18n';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Get current path without locale
    const segments = pathname.split('/').filter(Boolean);

    // Remove locale from beginning if present
    if (segments.length > 0 && locales.includes(segments[0] as any)) {
      segments.shift();
    }

    // Build the new path - always add locale prefix
    const pathWithoutLocale = segments.length > 0 ? '/' + segments.join('/') : '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    // Use window.location for force reload
    window.location.href = newPath;
  };

  return (
    <div className="relative z-50">
      <div className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-white p-0.5 shadow-sm">
        {locales.map((loc) => {
          const isActive = locale === loc;
          return (
            <button
              key={loc}
              type="button"
              onClick={() => switchLocale(loc)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                isActive
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
              }`}
              aria-label={`Switch to ${loc === 'en' ? 'English' : 'Indonesian'}`}
              aria-current={isActive ? 'true' : undefined}
            >
              {loc.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
