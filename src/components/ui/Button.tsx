import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'default' | 'sm';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  target?: '_blank';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  target,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-xl font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

  const sizeStyles = size === 'sm'
    ? 'px-3 py-1.5 text-xs'
    : 'px-4 py-2 text-sm';

  const variantStyles = variant === 'primary'
    ? 'bg-zinc-900 text-white hover:bg-zinc-800 focus-visible:outline-zinc-900'
    : 'bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 focus-visible:outline-zinc-300';

  const styles = `${base} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    const rel = target ? 'noopener noreferrer' : undefined;
    return (
      <a href={href} target={target} rel={rel} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
