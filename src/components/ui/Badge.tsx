import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'accent';
}

export function Badge({ children, className = '', variant = 'default' }: BadgeProps) {
  const base = 'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium';

  const variantStyles = variant === 'accent'
    ? 'bg-amber-100 text-amber-700'
    : 'border border-zinc-200 bg-white text-zinc-700';

  return <span className={`${base} ${variantStyles} ${className}`}>{children}</span>;
}
