import React from 'react';
import SunyiMascot from '../mascot/SunyiMascot';
import { X, Clock, CheckCircle2, Sparkles } from 'lucide-react';

export default function FeatureModal({ feature, onClose }) {
  if (!feature) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="w-full max-w-sm rounded-3xl bg-[#FFF8ED] dark:bg-[#1A213D] border-2 border-[#B9A7F5]/50 dark:border-slate-700 p-6 shadow-2xl relative text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup jendela informasi"
          className="btn-bouncy absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-[#303F83] dark:hover:text-white bg-white dark:bg-slate-800 transition-colors shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Mascot & Status */}
        <div className="flex items-center gap-3 mb-4">
          <SunyiMascot
            expression={feature.isReady ? 'happy' : 'confused'}
            size={70}
            className="shrink-0"
          />
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bubble font-bold mb-1 bg-[#FFE58A] text-[#303F83]">
              <Clock className="w-3.5 h-3.5 text-[#FF8278]" />
              <span>{feature.statusBadge}</span>
            </div>
            <h3 className="font-bubble text-xl font-black text-[#303F83] dark:text-[#FFE58A] leading-tight">
              {feature.title}
            </h3>
          </div>
        </div>

        <p className="text-xs font-semibold text-[#4777D1] dark:text-[#B9A7F5] mb-3">
          {feature.subtitle}
        </p>

        {/* Description Box */}
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-xs text-[#303F83] dark:text-slate-200 font-medium leading-relaxed mb-4">
          {feature.description}
        </div>

        {/* Honest Note */}
        <div className="flex items-start gap-2.5 text-[11px] text-[#303F83]/80 dark:text-slate-300 bg-[#8EDCC1]/25 dark:bg-slate-800 p-3 rounded-2xl border border-[#8EDCC1]/40 mb-4">
          <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <span>
            {feature.isReady
              ? 'Fitur ini sudah aktif dan siap kamu jelajahi di tahap ini!'
              : 'Fitur ini akan segera diaktifkan secara bertahap pada tahap pengembangannya!'}
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn-bouncy w-full py-3 px-5 rounded-full bg-[#303F83] hover:bg-[#253268] text-white font-bubble font-bold text-sm shadow-md transition-colors"
        >
          Siap, Mengerti!
        </button>
      </div>
    </div>
  );
}
