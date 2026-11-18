import React, { useState } from 'react';
import { MAIN_MENUS } from '../../data/menuData';
import FeatureCard from './FeatureCard';
import FeatureModal from './FeatureModal';
import SunyiMascot from '../mascot/SunyiMascot';
import { ArrowRight, Sparkles, ShieldCheck, Heart, Info, Award } from 'lucide-react';

export default function DashboardHome({ onNavigateTab }) {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleCardClick = (item) => {
    setSelectedFeature(item);
  };

  const handleBannerClick = () => {
    const belajarMenu = MAIN_MENUS.find((m) => m.id === 'belajar');
    if (belajarMenu) {
      setSelectedFeature(belajarMenu);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-5 pb-24 md:pb-8 text-left">
      {/* Featured Learning Banner (As in the Mockup) */}
      <div className="relative overflow-hidden p-6 sm:p-7 rounded-3xl bg-[#303F83] text-white shadow-xl mb-6 border border-[#4777D1]/30">
        {/* Decorative Pastel Clouds & Blobs inside Banner */}
        <div className="absolute -right-8 -bottom-10 w-48 h-48 rounded-full bg-[#4777D1]/60 blur-xl pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-32 h-32 rounded-full bg-[#FFE58A]/20 blur-xl pointer-events-none" />
        <div className="absolute -left-8 -top-8 w-28 h-28 rounded-full bg-[#B9A7F5]/20 blur-lg pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="max-w-xs sm:max-w-md">
            {/* Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE58A] text-[#303F83] text-xs font-bubble font-bold mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8278]" />
              <span>Petualangan Isyarat</span>
            </div>

            <h1 className="font-bubble text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight mb-3">
              Ayo belajar Bahasa Isyarat bersama SUNYI!
            </h1>

            <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed mb-4 hidden sm:block">
              Mulai dari alfabet jari, sapaan hangat, sampai kosakata sehari-hari dengan panduan yang menyenangkan.
            </p>

            {/* Action Button inside Banner */}
            <button
              onClick={handleBannerClick}
              className="btn-bouncy inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#303F83] hover:bg-[#FFE58A] font-bubble font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <span>Mulai Belajar</span>
              <div className="w-6 h-6 rounded-full bg-[#303F83] text-white flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 text-[#FFE58A]" />
              </div>
            </button>
          </div>

          {/* Mascot Peaking inside Banner */}
          <div className="shrink-0 transition-transform hover:scale-105 duration-300">
            <SunyiMascot expression="winking" size={130} />
          </div>
        </div>
      </div>

      {/* Honest Status Notification Pill */}
      <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#FFE58A]/35 dark:bg-slate-800 border border-[#FFE58A]/80 dark:border-slate-700 mb-6">
        <Info className="w-4 h-4 text-[#FF8278] shrink-0 mt-0.5" />
        <p className="text-xs text-[#303F83] dark:text-slate-200 font-semibold leading-relaxed">
          <strong>Tahap 1 Desain Baru Selesai:</strong> Identitas visual, maskot 2D flat, dan navigasi multi-perangkat sudah aktif. Kartu di bawah menampilkan transparansi tahap pengembangan.
        </p>
      </div>

      {/* Section Title: Menu Utama */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div>
          <h2 className="font-bubble text-lg sm:text-xl font-black text-[#303F83] dark:text-[#FFE58A]">
            Menu Utama
          </h2>
          <p className="text-xs font-semibold text-[#4777D1] dark:text-[#B9A7F5]">
            Jelajahi seluruh fitur aksesibilitas dan edukasi
          </p>
        </div>
        <span className="text-xs font-bubble font-bold px-3 py-1 rounded-full bg-[#B9A7F5]/25 text-[#303F83] dark:text-[#FFE58A]">
          6 Pilihan
        </span>
      </div>

      {/* Grid Cards (2 columns on mobile, 3 columns on tablet/desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6">
        {MAIN_MENUS.map((menu) => (
          <FeatureCard
            key={menu.id}
            item={menu}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {/* Daily Encouragement & Achievement Card (Inspired by 3rd mockup screen) */}
      <div className="p-5 rounded-3xl bg-linear-to-r from-[#8EDCC1]/25 to-[#B9A7F5]/25 border border-[#8EDCC1]/40 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-[#FFE58A] text-[#303F83] shadow-xs shrink-0">
            <Award className="w-6 h-6 text-[#FF8278]" />
          </div>
          <div>
            <h3 className="font-bubble text-sm sm:text-base font-black text-[#303F83] dark:text-[#FFE58A]">
              Komunikasi Tanpa Batas
            </h3>
            <p className="text-xs text-[#303F83]/80 dark:text-slate-300 font-medium">
              Aplikasi ini dirancang khusus untuk kenyamanan teman Tuli, wicara, dan dengar.
            </p>
          </div>
        </div>

        <div className="hidden sm:block shrink-0">
          <SunyiMascot expression="cheer" size={70} />
        </div>
      </div>

      {/* Detail Modal */}
      <FeatureModal
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </div>
  );
}
