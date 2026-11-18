import React from 'react';
import SunyiMascot from '../mascot/SunyiMascot';
import { MessageSquare, GraduationCap, Heart, ShieldAlert } from 'lucide-react';

export default function ScreenGoals() {
  const goals = [
    {
      icon: MessageSquare,
      title: 'Makin Mandiri Tiap Hari',
      badge: 'Kemandirian',
      badgeBg: 'bg-[#FFE58A] text-[#303F83]',
      desc: 'Bisa ngobrol dua arah dengan siapa saja menggunakan teks besar, suara digital, atau getaran.',
    },
    {
      icon: GraduationCap,
      title: 'Belajar Isyarat Jadi Seru',
      badge: 'Edukasi',
      badgeBg: 'bg-[#B9A7F5]/40 text-[#303F83] dark:text-[#FFE58A]',
      desc: 'Kamus video yang bisa diputar lambat (slow-mo) dan latihan interaktif yang menyenangkan.',
    },
    {
      icon: Heart,
      title: 'Menghubungkan Semua Orang',
      badge: 'Inklusif',
      badgeBg: 'bg-[#FF8278]/25 text-[#FF8278]',
      desc: 'Membuka jembatan pertemanan yang hangat dan setara antara teman Tuli dan masyarakat dengar.',
    },
    {
      icon: ShieldAlert,
      title: 'Aman Saat Butuh Bantuan',
      badge: 'Keamanan',
      badgeBg: 'bg-[#FFC99F]/40 text-[#303F83] dark:text-[#FFE58A]',
      desc: 'Tombol SOS visual dan kode getar morse darurat saat suara tak dapat tersampaikan.',
    },
  ];

  return (
    <div className="flex flex-col text-left px-2 py-3 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <SunyiMascot expression="love" size={70} className="shrink-0" />
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FF8278]/20 text-[#FF8278]">
            Tujuan & Manfaat
          </span>
          <h2 className="font-bubble text-2xl font-black text-[#303F83] dark:text-[#FFE58A] leading-tight">
            Apa yang Ingin Dicapai?
          </h2>
          <p className="text-xs font-semibold text-[#4777D1] dark:text-[#B9A7F5]">
            Membuka akses untuk dunia yang lebih ramah
          </p>
        </div>
      </div>

      {/* Cards List */}
      <div className="space-y-2.5">
        {goals.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="p-3.5 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-xs flex items-start gap-3"
            >
              <div className="p-2.5 rounded-2xl bg-[#FFF8ED] dark:bg-slate-700 text-[#4777D1] dark:text-[#FFE58A] shrink-0">
                <IconComp className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <h3 className="text-xs sm:text-sm font-bubble font-bold text-[#303F83] dark:text-[#FFE58A] truncate">
                    {item.title}
                  </h3>
                  <span className={`text-[10px] font-bubble font-bold px-2.5 py-0.5 rounded-full shrink-0 ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-[#303F83]/80 dark:text-slate-300 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
