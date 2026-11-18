import React from 'react';
import PhoneStatusBar from '../common/PhoneStatusBar';
import avatarImg from '../../assets/avatar-user.png';
import bannerExactImg from '../../assets/banner-exact.png';
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
  User,
} from 'lucide-react';

export default function DashboardPhoneView({
  onSelectMenu,
  onOpenNotifications,
  onOpenCelebration,
  activeNavTab = 'beranda',
  onSelectNavTab,
}) {
  const menus = [
    {
      id: 'kamera',
      title: 'Kamera',
      icon: Camera,
      bg: 'bg-[#FFF8E6]',
      iconColor: 'text-[#FF9D00]',
    },
    {
      id: 'bisindo',
      title: 'BISINDO',
      icon: Sparkles,
      bg: 'bg-[#F3EEFC]',
      iconColor: 'text-[#B8A5F4]',
    },
    {
      id: 'sibi',
      title: 'SIBI',
      icon: BookOpen,
      bg: 'bg-[#EEF3FB]',
      iconColor: 'text-[#3E69C9]',
    },
    {
      id: 'komunikasi',
      title: 'Komunikasi',
      icon: MessageSquareText,
      bg: 'bg-[#EEFBF5]',
      iconColor: 'text-emerald-700',
    },
    {
      id: 'latihan',
      title: 'Latihan',
      icon: Target,
      bg: 'bg-[#FFF1E0]',
      iconColor: 'text-[#FF7A6E]',
    },
    {
      id: 'pengaturan',
      title: 'Pengaturan',
      icon: Settings,
      bg: 'bg-[#EEF3FB]',
      iconColor: 'text-[#24336B]',
    },
  ];

  return (
    <div className="relative w-full h-full min-h-[620px] flex flex-col justify-between bg-white rounded-[32px] overflow-hidden select-none shadow-inner">
      {/* 1. Mobile Status Bar (9:41) */}
      <PhoneStatusBar time="9:41" />

      {/* 2. Top Profile Row Exactly Matching Mockup */}
      <div className="px-5 pt-1 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img
            src={avatarImg}
            alt="Avatar Pengguna"
            className="w-10 h-10 rounded-full border-2 border-[#B8A5F4] object-cover bg-[#EEF2FB] shadow-xs"
          />
          <div>
            <h2 className="font-bubble text-base font-black text-[#24336B] leading-none">
              Halo, Teman!
            </h2>
            <p className="text-[10px] font-semibold text-slate-400 leading-none mt-1">
              Senang bertemu lagi! ✨
            </p>
          </div>
        </div>

        {/* Notification Bell matching mockup */}
        <button
          onClick={onOpenNotifications}
          className="btn-bouncy relative p-2 rounded-full bg-slate-100 hover:bg-[#FFE58A]/30 text-[#24336B] transition-colors"
          aria-label="Pemberitahuan"
        >
          <Bell className="w-4 h-4 stroke-[2.2]" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#FF7A6E]" />
        </button>
      </div>

      {/* 3. Main Scrollable Container */}
      <div className="flex-1 px-4 py-1 space-y-4 overflow-y-auto">
        {/* Exact Hero Learning Banner Replica from Mockup */}
        <div
          onClick={onOpenCelebration}
          className="btn-bouncy cursor-pointer relative rounded-3xl overflow-hidden shadow-lg border border-[#3E69C9]/20 hover:scale-[1.01] transition-transform duration-200"
        >
          <img
            src={bannerExactImg}
            alt="Ayo belajar Bahasa Isyarat bersama SUNYI!"
            className="w-full h-auto object-cover block"
          />
        </div>

        {/* 6 Menu Cards (3 columns x 2 rows) matching mockup */}
        <div>
          <div className="grid grid-cols-3 gap-2.5">
            {menus.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectMenu(item.id)}
                  className="btn-bouncy cursor-pointer flex flex-col items-center justify-center p-3 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:bg-[#EEF2FB] hover:border-[#B8A5F4] shadow-2xs hover:shadow-sm transition-all"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.bg} ${item.iconColor} mb-2 shadow-2xs`}
                  >
                    <IconComponent className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <span className="font-bubble text-xs font-bold text-[#24336B] text-center leading-tight">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Bottom Navigation Bar Matching Mockup */}
      <nav
        aria-label="Navigasi Bawah"
        className="w-full bg-white border-t border-slate-100 px-4 py-2 flex items-center justify-around z-20 shadow-xs"
      >
        <button
          onClick={() => onSelectNavTab && onSelectNavTab('beranda')}
          className={`btn-bouncy flex flex-col items-center justify-center min-w-[56px] py-1 transition-all ${
            activeNavTab === 'beranda'
              ? 'text-[#24336B] font-black'
              : 'text-slate-400 hover:text-[#24336B]'
          }`}
        >
          <Home className="w-5 h-5 stroke-[2.2]" />
          <span className="font-bubble text-[10px] mt-0.5">Beranda</span>
        </button>

        <button
          onClick={() => onSelectMenu('kamera')}
          className={`btn-bouncy flex flex-col items-center justify-center min-w-[56px] py-1 transition-all ${
            activeNavTab === 'kamera'
              ? 'text-[#24336B] font-black'
              : 'text-slate-400 hover:text-[#24336B]'
          }`}
        >
          <Camera className="w-5 h-5 stroke-[2.2]" />
          <span className="font-bubble text-[10px] mt-0.5">Kamera</span>
        </button>

        <button
          onClick={() => onSelectMenu('bisindo')}
          className={`btn-bouncy flex flex-col items-center justify-center min-w-[56px] py-1 transition-all ${
            activeNavTab === 'bisindo'
              ? 'text-[#24336B] font-black'
              : 'text-slate-400 hover:text-[#24336B]'
          }`}
        >
          <Sparkles className="w-5 h-5 stroke-[2.2]" />
          <span className="font-bubble text-[10px] mt-0.5">BISINDO</span>
        </button>

        <button
          onClick={() => onSelectMenu('pengaturan')}
          className={`btn-bouncy flex flex-col items-center justify-center min-w-[56px] py-1 transition-all ${
            activeNavTab === 'profil'
              ? 'text-[#24336B] font-black'
              : 'text-slate-400 hover:text-[#24336B]'
          }`}
        >
          <User className="w-5 h-5 stroke-[2.2]" />
          <span className="font-bubble text-[10px] mt-0.5">Profil</span>
        </button>
      </nav>
    </div>
  );
}
