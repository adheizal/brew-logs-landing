'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  className?: string;
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  priority = false,
  loading,
  className = '',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // Fallback placeholder
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 ${className}`}
        style={{ width, height }}
      >
        <span className="text-sm text-zinc-500">{alt || 'Image not available'}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={loading}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
