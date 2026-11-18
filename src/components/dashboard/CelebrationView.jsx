import React from 'react';
import mascotHebatImg from '../../assets/mascot-hebat.png';
import PhoneStatusBar from '../common/PhoneStatusBar';
import OrganicBlobs from '../common/OrganicBlobs';
import { ArrowLeft } from 'lucide-react';

export default function CelebrationView({ onBack }) {
  return (
    <div className="relative w-full h-full min-h-[620px] flex flex-col justify-between items-center text-center px-6 py-5 overflow-hidden bg-white rounded-[32px] select-none shadow-inner">
      {/* Celebration Pastel Waves & Confetti */}
      <OrganicBlobs variant="celebration" />
      <PhoneStatusBar time="9:41" />

      {/* Back button */}
      <div className="w-full flex justify-start z-10">
        <button
          onClick={onBack}
          className="btn-bouncy flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EEF2FB] hover:bg-[#FFE58A]/50 text-xs font-bubble font-bold text-[#24336B] transition-colors shadow-2xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali</span>
        </button>
      </div>

      {/* Mascot Hebat from Mockup */}
      <div className="relative z-10 my-auto flex flex-col items-center max-w-xs">
        <div className="relative mb-3 transition-transform hover:scale-105 duration-300">
          <img
            src={mascotHebatImg}
            alt="Mascot Merayakan: Hebat!"
            className="w-56 sm:w-60 h-auto object-contain mx-auto drop-shadow-sm"
          />
        </div>

        <h1 className="font-bubble text-3xl sm:text-4xl font-black text-[#24336B] leading-tight mb-2">
          Hebat!
        </h1>

        <p className="font-sans text-xs sm:text-sm font-bold text-[#4777D1] max-w-xs">
          Kamu sudah menyelesaikan latihan hari ini!
        </p>
      </div>

      {/* Bottom Buttons Matching Mockup */}
      <div className="relative z-10 w-full max-w-xs flex flex-col items-center gap-2.5 mb-2">
        <button
          onClick={onBack}
          className="btn-bouncy w-full py-3.5 px-6 rounded-full bg-[#233261] hover:bg-[#1a264a] text-white font-bubble font-bold text-sm shadow-md active:scale-95 transition-all"
        >
          Lanjut Lagi
        </button>

        <button
          onClick={onBack}
          className="btn-bouncy w-full py-3 px-6 rounded-full bg-[#EEF2FB] text-[#24336B] font-bubble font-bold text-xs hover:bg-[#FFE58A]/40 transition-all border border-slate-200"
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
}
