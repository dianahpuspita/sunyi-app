import React from 'react';
import mascotWelcomeImg from '../../assets/mascot-welcome.png';
import PhoneStatusBar from '../common/PhoneStatusBar';
import OrganicBlobs from '../common/OrganicBlobs';
import { ArrowRight } from 'lucide-react';

export default function ScreenWelcome({ onNext, onDotClick, activeStep = 0 }) {
  return (
    <div className="relative w-full h-full min-h-[620px] flex flex-col justify-between items-center text-center px-6 py-5 overflow-hidden bg-white rounded-[32px] select-none shadow-inner">
      {/* 1. Organic Blobs (Vibrant & Colorful) */}
      <OrganicBlobs variant="welcome" />

      {/* 2. Top Status Bar (9:41) */}
      <PhoneStatusBar time="9:41" />

      {/* 3. Center: Mascot & Titles */}
      <div className="relative z-10 my-auto flex flex-col items-center max-w-xs">
        {/* Mascot */}
        <div className="relative mb-5 transition-transform hover:scale-105 duration-300">
          <img
            src={mascotWelcomeImg}
            alt="Mascot SUNYI: Karakter tangan tersenyum"
            className="w-48 sm:w-52 h-auto object-contain mx-auto drop-shadow-sm"
          />
        </div>

        {/* Title Exactly Matching Mockup */}
        <h1 className="font-bubble text-3xl sm:text-4xl font-black text-[#24336B] leading-tight tracking-tight mb-2">
          Welcome to<br />
          <span className="text-3xl sm:text-4xl text-[#24336B]">SUNYI!</span>
        </h1>

        {/* Tagline */}
        <p className="font-sans text-xs sm:text-sm font-bold text-[#4777D1] tracking-normal">
          Communication can be colorful.
        </p>
      </div>

      {/* 4. Bottom Action Area: Mulai Button & 3 Dots */}
      <div className="relative z-10 w-full max-w-xs flex flex-col items-center gap-4 mb-2">
        <button
          onClick={onNext}
          className="btn-bouncy w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-full bg-[#233261] hover:bg-[#1a264a] text-white font-bubble font-bold text-base shadow-md active:scale-95 transition-all"
        >
          <span>Mulai</span>
          <ArrowRight className="w-5 h-5 text-white stroke-[2.5]" />
        </button>

        {/* 3 Step Dots */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onDotClick && onDotClick(0)}
            className={`transition-all duration-300 ${
              activeStep === 0
                ? 'w-7 h-2 rounded-full bg-[#233261]'
                : 'w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label="Langkah 1"
          />
          <button
            onClick={() => onDotClick && onDotClick(1)}
            className={`transition-all duration-300 ${
              activeStep === 1
                ? 'w-7 h-2 rounded-full bg-[#233261]'
                : 'w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label="Langkah 2"
          />
          <button
            onClick={() => onDotClick && onDotClick(2)}
            className={`transition-all duration-300 ${
              activeStep === 2
                ? 'w-7 h-2 rounded-full bg-[#233261]'
                : 'w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label="Langkah 3"
          />
        </div>
      </div>
    </div>
  );
}
