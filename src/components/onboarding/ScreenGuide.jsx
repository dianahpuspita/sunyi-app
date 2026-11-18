import React from 'react';
import PhoneStatusBar from '../common/PhoneStatusBar';
import OrganicBlobs from '../common/OrganicBlobs';
import SunyiMascot from '../mascot/SunyiMascot';
import {
  GraduationCap,
  BookOpen,
  Target,
  MessageSquareText,
  AlertTriangle,
  Settings,
  Check,
} from 'lucide-react';

export default function ScreenGuide({ onComplete, onDotClick, activeStep = 2 }) {
  const guideMenus = [
    { name: 'Belajar', icon: GraduationCap, color: 'bg-[#EEF2FB] text-[#24336B]' },
    { name: 'Kamus', icon: BookOpen, color: 'bg-[#EEF3FB] text-[#3E69C9]' },
    { name: 'Latihan', icon: Target, color: 'bg-[#FFF1E0] text-[#FFB800]' },
    { name: 'Komunikasi', icon: MessageSquareText, color: 'bg-[#F3EEFC] text-[#B8A5F4]' },
    { name: 'SOS', icon: AlertTriangle, color: 'bg-[#FDECEB] text-[#FF7A6E]' },
    { name: 'Pengaturan', icon: Settings, color: 'bg-[#EEF3FB] text-[#24336B]' },
  ];

  return (
    <div className="relative w-full h-full min-h-[620px] flex flex-col justify-between items-center text-center px-6 py-5 overflow-hidden bg-white rounded-[32px] select-none shadow-inner">
      <OrganicBlobs variant="welcome" />
      <PhoneStatusBar time="9:41" />

      {/* Main Content Area */}
      <div className="relative z-10 my-auto flex flex-col items-center max-w-xs text-left w-full">
        {/* Mascot Header */}
        <div className="flex items-center gap-3 mb-3 w-full">
          <SunyiMascot expression="cheer" size={72} className="shrink-0" />
          <div>
            <span className="text-[10px] font-bubble font-bold px-2.5 py-0.5 rounded-full bg-[#8EDCC1]/40 text-emerald-900">
              Cara Penggunaan
            </span>
            <h2 className="font-bubble text-xl font-black text-[#24336B] leading-tight">
              Kenali 6 Menu Utama
            </h2>
          </div>
        </div>

        {/* 6 Menu Icons Grid as Preview of Dashboard */}
        <div className="grid grid-cols-3 gap-2 w-full mb-3">
          {guideMenus.map((m, idx) => {
            const IconComp = m.icon;
            return (
              <div
                key={idx}
                className="p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center justify-center text-center"
              >
                <div className={`p-2 rounded-xl ${m.color} mb-1`}>
                  <IconComp className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-[11px] font-bubble font-bold text-[#24336B]">
                  {m.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Instructions */}
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs w-full text-xs text-[#24336B]/80 font-medium leading-relaxed">
          <p className="mb-1 font-bold text-[#24336B]">
            💡 Panduan Praktis:
          </p>
          <ul className="space-y-1 text-[11px]">
            <li>• Pilih <strong>Belajar</strong> untuk materi isyarat bertahap.</li>
            <li>• Pilih <strong>Komunikasi</strong> untuk pesan cepat.</li>
            <li>• Tekan tombol <strong>A</strong> di kanan atas untuk perbesar teks.</li>
          </ul>
        </div>
      </div>

      {/* Bottom Action Area: Masuk ke Beranda & 3 Dots */}
      <div className="relative z-10 w-full max-w-xs flex flex-col items-center gap-4 mb-2">
        <button
          onClick={onComplete}
          className="btn-bouncy w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-full bg-[#233261] hover:bg-[#1a264a] text-white font-bubble font-bold text-base shadow-md active:scale-95 transition-all"
        >
          <Check className="w-5 h-5 text-[#8EDCC1]" />
          <span>Masuk ke Beranda</span>
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
