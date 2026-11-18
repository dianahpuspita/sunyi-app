import React from 'react';

export default function OrganicBlobs({ variant = 'welcome' }) {
  if (variant === 'celebration') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
        {/* Top waves */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#FFE58A] opacity-80 blur-xl" />
        <div className="absolute -top-14 -right-10 w-52 h-52 rounded-full bg-[#C4B5FD] opacity-70 blur-xl" />
        {/* Bottom waves */}
        <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-[#B8A5F4] opacity-75 blur-xl" />
        <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full bg-[#FFE58A] opacity-80 blur-xl" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* Top Left: Bright Yellow & Orange Blobs */}
      <div className="absolute -top-10 -left-10 w-44 h-44 bg-[#FFDE7D] opacity-90 rounded-full blur-xl" />
      <div className="absolute top-0 -left-6 w-32 h-32 bg-[#FFB088] opacity-80 rounded-full blur-lg" />
      
      {/* 3 Radiating Yellow Rays (Exactly from Mockup!) */}
      <div className="absolute top-6 left-6 flex gap-1.5 transform -rotate-12 z-10">
        <span className="w-1.5 h-4.5 rounded-full bg-[#FF9D00] block" />
        <span className="w-1.5 h-6.5 rounded-full bg-[#FF9D00] block -translate-y-1" />
        <span className="w-1.5 h-4.5 rounded-full bg-[#FF9D00] block" />
      </div>

      {/* Top Right: Sky Blue & Coral Pink Blobs */}
      <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#70A6FF] opacity-65 rounded-full blur-xl" />
      <div className="absolute top-8 right-6 w-11 h-11 bg-[#5B92FF] opacity-70 rounded-full" />
      <div className="absolute top-12 -right-4 w-28 h-32 bg-[#FF7E75] opacity-75 rounded-full blur-lg" />

      {/* Floating Sprinkles (Coral, Mint, Yellow) */}
      <div className="absolute top-40 left-5 w-2 h-5 bg-[#FF6B6B] rounded-full transform rotate-45 opacity-85" />
      <div className="absolute top-44 right-7 w-2 h-4.5 bg-[#4ADE80] rounded-full transform -rotate-30 opacity-90" />
      <div className="absolute top-56 right-12 w-2.5 h-4.5 bg-[#FFC727] rounded-full transform rotate-12 opacity-95" />
      <div className="absolute top-64 left-8 w-2 h-4 bg-[#A78BFA] rounded-full transform -rotate-45 opacity-85" />

      {/* Bottom Left: Coral Pink & Warm Yellow Fluid Blobs */}
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#FF6E65] opacity-85 rounded-full blur-xl" />
      <div className="absolute bottom-2 -left-4 w-36 h-24 bg-[#FFD768] opacity-90 rounded-full blur-lg" />

      {/* Bottom Right: Sky Blue Fluid */}
      <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#60A5FA] opacity-80 rounded-full blur-xl" />
    </div>
  );
}
