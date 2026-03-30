'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ImageOff } from 'lucide-react';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | '4/5';
  className?: string;
  showIcon?: boolean;
  iconSize?: number;
  shimmer?: boolean;
}

export default function ImagePlaceholder({
  src,
  alt,
  aspectRatio = '16/9',
  className = '',
  showIcon = true,
  iconSize = 32,
  shimmer = true,
}: ImagePlaceholderProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const aspectRatioClasses: Record<string, string> = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/4': 'aspect-[3/4]',
    '4/5': 'aspect-[4/5]',
  };

  const hasValidImage = src && !imageError;

  return (
    <div 
      className={`relative overflow-hidden ${aspectRatioClasses[aspectRatio]} ${className}`}
      style={{
        background: 'linear-gradient(135deg, #160f0b 0%, #1a120e 50%, #0d0a08 100%)'
      }}
    >
      {/* Shimmer effect */}
      {shimmer && !hasValidImage && (
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(201, 169, 110, 0.05) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      )}

      {/* Image */}
      {hasValidImage && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setImageError(true);
              setIsLoading(false);
            }}
          />
          
          {/* Loading state */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-8 h-8 rounded-full animate-pulse"
                style={{ background: 'rgba(201, 169, 110, 0.2)' }}
              />
            </div>
          )}
        </>
      )}

      {/* Placeholder content */}
      {!hasValidImage && showIcon && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="rounded-full flex items-center justify-center"
            style={{ 
              background: 'linear-gradient(135deg, rgba(201, 169, 110, 0.15), rgba(160, 120, 64, 0.08))',
              border: '1px solid rgba(201, 169, 110, 0.15)',
              width: iconSize * 2,
              height: iconSize * 2,
            }}
          >
            <Sparkles size={iconSize} className="text-gold-400/40" />
          </div>
        </div>
      )}

      {/* Border overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          border: '1px solid rgba(201, 169, 110, 0.08)',
          borderRadius: 'inherit'
        }}
      />
    </div>
  );
}
