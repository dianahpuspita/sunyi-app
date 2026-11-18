import React from 'react';
import PhoneStatusBar from '../common/PhoneStatusBar';
import OrganicBlobs from '../common/OrganicBlobs';
import SunyiMascot from '../mascot/SunyiMascot';
import { HeartHandshake, Sparkles, BookOpen, ArrowRight } from 'lucide-react';

export default function ScreenAbout({ onNext, onDotClick, activeStep = 1 }) {
  return (
    <div className="relative w-full h-full min-h-[620px] flex flex-col justify-between items-center text-center px-6 py-5 overflow-hidden bg-white rounded-[32px] select-none shadow-inner">
      <OrganicBlobs variant="welcome" />
      <PhoneStatusBar time="9:41" />

      {/* Main Content Area */}
      <div className="relative z-10 my-auto flex flex-col items-center max-w-xs text-left w-full">
        {/* Mascot Header */}
        <div className="flex items-center gap-3 mb-3 w-full">
          <SunyiMascot expression="happy" size={72} className="shrink-0" />
          <div>
            <span className="text-[10px] font-bubble font-bold px-2.5 py-0.5 rounded-full bg-[#FFE58A] text-[#24336B]">
              Tujuan Aplikasi
            </span>
            <h2 className="font-bubble text-xl font-black text-[#24336B] leading-tight">
              Kenapa Ada SUNYI?
            </h2>
          </div>
        </div>

        {/* 3 Audience Pills */}
        <div className="grid grid-cols-3 gap-2 w-full mb-3 text-center">
          <div className="p-2.5 rounded-2xl bg-[#EEF2FB] border border-[#B8A5F4]/40 shadow-xs">
            <span className="text-lg">🧏</span>
            <div className="text-[11px] font-bubble font-bold text-[#24336B] mt-0.5">Teman Tuli</div>
            <div className="text-[9px] font-semibold text-[#4777D1]">Visual Isyarat</div>
          </div>
          <div className="p-2.5 rounded-2xl bg-[#FFF5E9] border border-[#FFC99F]/50 shadow-xs">
            <span className="text-lg">🗣️</span>
            <div className="text-[11px] font-bubble font-bold text-[#24336B] mt-0.5">Teman Wicara</div>
            <div className="text-[9px] font-semibold text-[#FF7A6E]">Teks & Suara</div>
          </div>
          <div className="p-2.5 rounded-2xl bg-[#E8F8F3] border border-[#8EDCC1]/50 shadow-xs">
            <span className="text-lg">👥</span>
            <div className="text-[11px] font-bubble font-bold text-[#24336B] mt-0.5">Masyarakat</div>
            <div className="text-[9px] font-semibold text-emerald-700">Jembatan Bahasa</div>
          </div>
        </div>

        {/* Value Points */}
        <div className="space-y-2 w-full">
          <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-2.5">
            <div className="p-2 rounded-xl bg-[#EEF2FB] text-[#24336B] shrink-0 mt-0.5">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bubble font-bold text-[#24336B]">
                Tuli & Tunawicara Itu Berbeda
              </h3>
              <p className="text-[11px] text-[#24336B]/80 font-medium leading-relaxed">
                Tidak semua teman Tuli adalah tunawicara. SUNYI hadir mendukung cara komunikasi unik setiap orang.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-2.5">
            <div className="p-2 rounded-xl bg-[#FFF5E9] text-[#FF7A6E] shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bubble font-bold text-[#24336B]">
                Tujuan Kemandirian Harian
              </h3>
              <p className="text-[11px] text-[#24336B]/80 font-medium leading-relaxed">
                Mempermudah interaksi di kafe, toko, stasiun, hingga bantuan darurat secara mandiri dan percaya diri.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-2.5">
            <div className="p-2 rounded-xl bg-[#E8F8F3] text-emerald-700 shrink-0 mt-0.5">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bubble font-bold text-[#24336B]">
                Materi SIBI & BISINDO Terpisah
              </h3>
              <p className="text-[11px] text-[#24336B]/80 font-medium leading-relaxed">
                Materi isyarat disusun rapi dari sumber resmi tanpa mencampuradukkan gerakannya.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Area: Lanjut Button & 3 Dots */}
      <div className="relative z-10 w-full max-w-xs flex flex-col items-center gap-4 mb-2">
        <button
          onClick={onNext}
          className="btn-bouncy w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-full bg-[#233261] hover:bg-[#1a264a] text-white font-bubble font-bold text-base shadow-md active:scale-95 transition-all"
        >
          <span>Lanjut ke Panduan</span>
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
