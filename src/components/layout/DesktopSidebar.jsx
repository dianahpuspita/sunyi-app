import React from 'react';
import SunyiLogo from '../mascot/SunyiLogo';
import SunyiMascot from '../mascot/SunyiMascot';
import { Home, BookOpen, Bell, User, Sparkles, ShieldCheck } from 'lucide-react';

export default function DesktopSidebar({ activeTab, onSelectTab, onReplayOnboarding }) {
  const navItems = [
    { id: 'beranda', label: 'Beranda Utama', icon: Home, badge: 'Aktif' },
    { id: 'belajar', label: 'Materi Belajar', icon: BookOpen, badge: 'Tahap 3' },
    { id: 'notifikasi', label: 'Kabar & Notifikasi', icon: Bell, badge: 'Info' },
    { id: 'pengaturan', label: 'Aksesibilitas & Akun', icon: User, badge: 'Setelan' },
  ];

  return (
    <aside
      aria-label="Navigasi Desktop"
      className="hidden md:flex flex-col w-64 lg:w-72 shrink-0 min-h-screen bg-white/80 dark:bg-[#1A213D]/80 backdrop-blur-md border-r border-[#B9A7F5]/30 dark:border-slate-800 p-6 justify-between sticky top-0"
    >
      <div>
        {/* Brand Header */}
        <div className="mb-8">
          <SunyiLogo size="md" showTagline={true} />
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const IconComp = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`btn-bouncy w-full flex items-center justify-between px-4 py-3 rounded-2xl text-left transition-all ${
                  isActive
                    ? 'bg-[#303F83] text-white shadow-md shadow-[#303F83]/20 font-bubble'
                    : 'text-[#303F83] dark:text-slate-200 hover:bg-[#FFE58A]/30 font-semibold'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-xl ${
                      isActive ? 'bg-[#FFE58A] text-[#303F83]' : 'bg-[#FFF8ED] dark:bg-slate-800 text-[#4777D1]'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bubble">{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bubble font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-[#B9A7F5]/25 text-[#303F83] dark:text-[#FFE58A]'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mascot Friendly Widget in Sidebar */}
      <div className="mt-6">
        <div className="p-4 rounded-3xl bg-linear-to-br from-[#FFE58A]/60 to-[#FFC99F]/50 border border-[#FFE58A] text-left relative overflow-hidden">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-[#FF8278]" />
            <span className="text-xs font-bubble font-bold text-[#303F83]">
              Tips Hari Ini
            </span>
          </div>
          <p className="text-xs text-[#303F83]/90 font-medium leading-relaxed">
            Bahasa isyarat kaya akan ekspresi wajah. Jangan lupa tersenyum ya! 😊
          </p>
          <div className="mt-3 flex justify-end">
            <SunyiMascot expression="winking" size={60} />
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-[11px] font-semibold text-slate-400">
            SUNYI v1.0 • Tugas Akhir TKJ
          </p>
        </div>
      </div>
    </aside>
  );
}

