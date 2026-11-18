import React from 'react';
import avatarImg from '../../assets/avatar-user.png';
import bannerExactImg from '../../assets/banner-exact.png';
import mascotHebatImg from '../../assets/mascot-hebat.png';
import SunyiMascot from '../mascot/SunyiMascot';
import SunyiLogo from '../mascot/SunyiLogo';
import AccessibilityBar from '../accessibility/AccessibilityBar';
import {
  Camera,
  Sparkles,
  BookOpen,
  MessageSquareText,
  Target,
  AlertTriangle,
  Settings,
  Bell,
  Home,
  ArrowRight,
  Award,
} from 'lucide-react';

export default function DashboardDesktopLandscape({
  onSelectMenu,
  onOpenNotifications,
  onOpenCelebration,
  onReplayOnboarding,
  activeNavTab = 'beranda',
  onSelectNavTab,
}) {
  const menus = [
    {
      id: 'kamera',
      title: 'Kamera Isyarat',
      subtitle: 'Penerjemah gerakan tangan real-time ke teks & suara',
      icon: Camera,
      bg: 'bg-[#FFF8E6] hover:bg-[#FFF0CC]',
      border: 'border-[#FFDD80]/60',
      iconBg: 'bg-[#FFE58A] text-[#24336B]',
      badge: 'Fitur Utama',
    },
    {
      id: 'bisindo',
      title: 'Modul BISINDO',
      subtitle: 'Bahasa isyarat alami komunitas Tuli Indonesia',
      icon: Sparkles,
      bg: 'bg-[#F3EEFC] hover:bg-[#EBE2FA]',
      border: 'border-[#B8A5F4]/40',
      iconBg: 'bg-[#B8A5F4] text-[#24336B]',
      badge: 'Tersedia',
    },
    {
      id: 'sibi',
      title: 'Modul SIBI',
      subtitle: 'Sistem isyarat baku & tata bahasa lisan',
      icon: BookOpen,
      bg: 'bg-[#EEF3FB] hover:bg-[#E2EDFA]',
      border: 'border-[#3E69C9]/30',
      iconBg: 'bg-[#3E69C9] text-white',
      badge: 'Tersedia',
    },
    {
      id: 'komunikasi',
      title: 'Komunikasi Cepat',
      subtitle: 'Kalimat siap sentuh & suara digital aksesibel',
      icon: MessageSquareText,
      bg: 'bg-[#EEFBF5] hover:bg-[#DDF8EC]',
      border: 'border-[#8EDCC1]/40',
      iconBg: 'bg-[#8EDCC1] text-emerald-950',
      badge: 'Tahap 2',
    },
    {
      id: 'latihan',
      title: 'Latihan & Kuis',
      subtitle: 'Tantangan latihan interaktif kosakata isyarat',
      icon: Target,
      bg: 'bg-[#FFF1E0] hover:bg-[#FFE8CC]',
      border: 'border-[#FF7A6E]/40',
      iconBg: 'bg-[#FF9D00] text-white',
      badge: 'Tahap 3',
    },
    {
      id: 'pengaturan',
      title: 'Pengaturan Aksesibel',
      subtitle: 'Pusat kenyamanan visual & ukuran huruf',
      icon: Settings,
      bg: 'bg-[#EEF3FB] hover:bg-[#E2EDFA]',
      border: 'border-[#3E69C9]/30',
      iconBg: 'bg-[#24336B] text-white',
      badge: 'Aktif',
    },
  ];

  return (
    <div className="w-full min-h-screen flex text-left transition-colors duration-200">
      {/* 1. Left Landscape Sidebar */}
      <aside className="w-72 shrink-0 bg-white dark:bg-[#1A2342] border-r border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between sticky top-0 h-screen select-none shadow-xs">
        <div>
          {/* Logo Brand */}
          <div className="mb-6">
            <SunyiLogo size="md" showTagline={true} />
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <button
              onClick={() => onSelectNavTab && onSelectNavTab('beranda')}
              className={`btn-bouncy w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl font-bubble text-sm font-bold transition-all ${
                activeNavTab === 'beranda'
                  ? 'bg-[#233261] text-white shadow-md'
                  : 'text-[#24336B] dark:text-slate-200 hover:bg-[#FFE58A]/30'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Beranda Utama</span>
            </button>

            <button
              onClick={() => onSelectMenu('kamera')}
              className="btn-bouncy w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl font-bubble text-sm font-bold text-[#24336B] dark:text-slate-200 hover:bg-[#FFE58A]/30 transition-all"
            >
              <Camera className="w-5 h-5 text-[#3E69C9]" />
              <span>Kamera Isyarat</span>
            </button>

            <button
              onClick={() => onSelectMenu('bisindo')}
              className="btn-bouncy w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl font-bubble text-sm font-bold text-[#24336B] dark:text-slate-200 hover:bg-[#FFE58A]/30 transition-all"
            >
              <Sparkles className="w-5 h-5 text-[#B8A5F4]" />
              <span>Modul BISINDO</span>
            </button>

            <button
              onClick={() => onSelectMenu('sibi')}
              className="btn-bouncy w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl font-bubble text-sm font-bold text-[#24336B] dark:text-slate-200 hover:bg-[#FFE58A]/30 transition-all"
            >
              <BookOpen className="w-5 h-5 text-[#3E69C9]" />
              <span>Modul SIBI</span>
            </button>

            <button
              onClick={() => onSelectMenu('komunikasi')}
              className="btn-bouncy w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl font-bubble text-sm font-bold text-[#24336B] dark:text-slate-200 hover:bg-[#FFE58A]/30 transition-all"
            >
              <MessageSquareText className="w-5 h-5 text-[#8EDCC1]" />
              <span>Komunikasi Cepat</span>
            </button>

            <button
              onClick={onOpenCelebration}
              className="btn-bouncy w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl font-bubble text-sm font-bold text-[#24336B] dark:text-slate-200 hover:bg-[#FFE58A]/30 transition-all"
            >
              <Award className="w-5 h-5 text-[#FF9D00]" />
              <span>Latihan & Prestasi</span>
            </button>

            <button
              onClick={() => onSelectMenu('pengaturan')}
              className="btn-bouncy w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl font-bubble text-sm font-bold text-[#24336B] dark:text-slate-200 hover:bg-[#FFE58A]/30 transition-all"
            >
              <Settings className="w-5 h-5 text-[#24336B] dark:text-slate-300" />
              <span>Pengaturan</span>
            </button>
          </nav>
        </div>

        {/* Mascot Encouragement Card in Sidebar */}
        <div className="p-4 rounded-3xl bg-linear-to-br from-[#FFE58A]/60 to-[#FFC99F]/40 border border-[#FFE58A] relative overflow-hidden">
          <div className="flex items-center gap-1.5 mb-1 text-xs font-bubble font-bold text-[#24336B]">
            <Sparkles className="w-4 h-4 text-[#FF7A6E]" />
            <span>Semangat Belajar!</span>
          </div>
          <p className="text-xs text-[#24336B]/80 font-medium leading-relaxed">
            Bahasa isyarat kaya akan ekspresi. Jangan lupa tersenyum ya! 😊
          </p>
          <div className="mt-2 flex justify-end">
            <SunyiMascot expression="winking" size={60} />
          </div>
        </div>
      </aside>

      {/* 2. Main Landscape Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Landscape Header */}
        <header className="sticky top-0 z-20 bg-white/90 dark:bg-[#1A2342]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-8 py-3.5 flex items-center justify-between shadow-xs">
          {/* User Profile Info */}
          <div className="flex items-center gap-3.5">
            <img
              src={avatarImg}
              alt="Avatar Pengguna"
              className="w-11 h-11 rounded-full border-2 border-[#B8A5F4] object-cover bg-[#EEF2FB] shadow-xs"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bubble text-lg font-black text-[#24336B] dark:text-[#FFE58A] leading-tight">
                  Halo, Teman!
                </h2>
                <span className="text-[10px] font-bubble font-bold px-2 py-0.5 rounded-full bg-[#FFE58A] text-[#24336B]">
                  Level 1 • Sahabat SUNYI
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-400 leading-none mt-0.5">
                Senang bertemu lagi! Siap belajar hari ini? ✨
              </p>
            </div>
          </div>

          {/* Right Toolbar: Notification & Accessibility */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenNotifications}
              className="btn-bouncy relative p-2.5 rounded-full bg-slate-100 hover:bg-[#FFE58A]/30 text-[#24336B] transition-colors"
              aria-label="Pemberitahuan"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#FF7A6E]" />
            </button>

            <AccessibilityBar onReplayOnboarding={onReplayOnboarding} />
          </div>
        </header>

        {/* Scrollable Dashboard Body */}
        <main className="flex-1 p-8 overflow-y-auto max-w-6xl mx-auto w-full space-y-6">
          {/* Landscape Wide Hero Learning Banner */}
          <div className="relative overflow-hidden p-8 rounded-3xl bg-[#24336B] text-white shadow-xl flex items-center justify-between gap-6 border border-[#3E69C9]/30">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-[#3E69C9]/50 blur-2xl pointer-events-none" />
            <div className="absolute top-0 right-1/3 w-40 h-40 rounded-full bg-[#FFE58A]/20 blur-xl pointer-events-none" />

            <div className="relative z-10 max-w-lg">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE58A] text-[#24336B] text-xs font-bubble font-bold mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7A6E]" />
                <span>Modul Isyarat Inklusif</span>
              </div>

              <h1 className="font-bubble text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-2">
                Ayo belajar Bahasa Isyarat bersama SUNYI!
              </h1>

              <p className="text-sm text-blue-100 font-medium leading-relaxed mb-5">
                Pelajari alfabet jari, sapaan hangat, sampai percakapan sehari-hari dengan materi terpisah BISINDO & SIBI secara inklusif.
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onSelectMenu('bisindo')}
                  className="btn-bouncy inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#24336B] hover:bg-[#FFE58A] font-bubble font-bold text-xs shadow-md transition-all"
                >
                  <span>Buka Modul BISINDO</span>
                  <ArrowRight className="w-4 h-4 text-[#24336B]" />
                </button>
                <button
                  onClick={() => onSelectMenu('sibi')}
                  className="btn-bouncy inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8A5F4]/30 hover:bg-[#B8A5F4]/50 text-white font-bubble font-bold text-xs border border-white/30 transition-all"
                >
                  <span>Buka Modul SIBI</span>
                </button>
              </div>
            </div>

            <div className="relative z-10 shrink-0 hidden md:block hover:scale-105 transition-transform duration-300">
              <SunyiMascot expression="winking" size={160} />
            </div>
          </div>

          {/* Section: Menu Utama */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bubble text-xl font-black text-[#24336B] dark:text-[#FFE58A]">
                  Fitur Aksesibilitas Utama
                </h3>
                <p className="text-xs text-slate-400 font-semibold">
                  Pilih modul pembelajaran isyarat atau alat komunikasi siap pakai
                </p>
              </div>
            </div>

            {/* 3-Column Grid for Laptop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {menus.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => onSelectMenu(item.id)}
                    className={`group cursor-pointer p-6 rounded-3xl bg-white dark:bg-[#1A2342] border-2 ${item.border} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.iconBg} shadow-xs group-hover:scale-110 transition-transform`}
                        >
                          <IconComponent className="w-6 h-6 stroke-[2.2]" />
                        </div>
                        <span className="text-[10px] font-bubble font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300">
                          {item.badge}
                        </span>
                      </div>

                      <h4 className="font-bubble text-lg font-black text-[#24336B] dark:text-[#FFE58A] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bubble font-bold text-[#3E69C9] dark:text-[#B8A5F4] group-hover:translate-x-1 transition-transform">
                      <span>Buka Fitur</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
