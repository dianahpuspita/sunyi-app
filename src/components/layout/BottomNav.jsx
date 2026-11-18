import React from 'react';
import { Home, BookOpen, Bell, User } from 'lucide-react';

export default function BottomNav({ activeTab, onSelectTab }) {
  const tabs = [
    { id: 'beranda', label: 'Beranda', icon: Home },
    { id: 'belajar', label: 'Belajar', icon: BookOpen },
    { id: 'notifikasi', label: 'Notifikasi', icon: Bell },
    { id: 'pengaturan', label: 'Profil', icon: User },
  ];

  return (
    <nav
      aria-label="Navigasi Bawah Ponsel"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFF8ED]/95 dark:bg-[#1A213D]/95 backdrop-blur-md border-t border-[#B9A7F5]/30 dark:border-slate-800 pb-safe transition-colors"
    >
      <div className="max-w-md mx-auto flex items-center justify-around px-3 py-2">
        {tabs.map((tab) => {
          const IconComp = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              aria-label={`Menu ${tab.label}`}
              className={`btn-bouncy flex flex-col items-center justify-center min-w-[64px] py-1 px-2 rounded-2xl transition-all ${
                isActive
                  ? 'text-[#303F83] dark:text-[#FFE58A] font-black'
                  : 'text-[#4777D1]/70 dark:text-slate-400 hover:text-[#303F83] font-semibold'
              }`}
            >
              <div
                className={`p-1.5 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? 'bg-[#FFE58A] dark:bg-slate-700 text-[#303F83] dark:text-[#FFE58A] shadow-xs scale-105'
                    : 'bg-transparent'
                }`}
              >
                <IconComp className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bubble mt-0.5 tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
