import React from 'react';
import logoNewImg from '../../assets/logo-new.jpg';

export default function SunyiLogo({ size = 'md', showTagline = true, className = '' }) {
  const sizeMap = {
    sm: { img: 'w-10 h-10', text: 'text-xl', tagline: 'text-[9px]' },
    md: { img: 'w-16 h-16', text: 'text-3xl', tagline: 'text-xs' },
    lg: { img: 'w-24 h-24', text: 'text-5xl', tagline: 'text-sm' },
    xl: { img: 'w-32 h-32', text: 'text-6xl', tagline: 'text-base' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* Logo Image / Emblem */}
      <div className="relative group">
        <img
          src={logoNewImg}
          alt="Logo Resmi SUNYI: Karakter tangan 2D flat yang ramah"
          className={`${currentSize.img} object-contain rounded-3xl drop-shadow-sm transition-transform duration-300 group-hover:scale-105`}
        />
      </div>

      {/* Brand Title with Playful Bubble Font */}
      <div className="mt-1 text-center">
        <h1
          className={`font-bubble font-black tracking-wide text-[#303F83] dark:text-[#FFE58A] ${currentSize.text} leading-none`}
        >
          sunyi
        </h1>

        {showTagline && (
          <p
            className={`font-sans font-bold text-[#4777D1] dark:text-[#B9A7F5] ${currentSize.tagline} tracking-normal mt-1`}
          >
            Communication can be colorful.
          </p>
        )}
      </div>
    </div>
  );
}

