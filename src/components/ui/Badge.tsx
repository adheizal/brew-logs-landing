import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const base = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';

  const variantStyles = variant === 'accent'
    ? 'bg-amber-100 text-amber-800 border border-amber-200'
    : 'bg-zinc-100 text-zinc-700 border border-zinc-200';

  return <span className={`${base} ${variantStyles} ${className}`}>{children}</span>;
}
