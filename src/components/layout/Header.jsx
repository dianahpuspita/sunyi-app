import React from 'react';
import logoNewImg from '../../assets/logo-new.jpg';
import AccessibilityBar from '../accessibility/AccessibilityBar';
import { Bell, Sparkles } from 'lucide-react';

export default function Header({ onReplayOnboarding, onOpenNotifications }) {
  return (
    <header className="sticky top-0 z-30 w-full bg-[#FFF8ED]/95 dark:bg-[#1A213D]/95 backdrop-blur-md border-b border-[#B9A7F5]/30 dark:border-slate-800 px-4 py-3 transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* User Greeting with Avatar (as in mockup) */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-11 h-11 rounded-full bg-linear-to-tr from-[#B9A7F5] to-[#FFE58A] p-0.5 shadow-xs">
              <div className="w-full h-full rounded-full bg-[#FFF8ED] dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                <span className="text-xl" role="img" aria-label="Avatar Pengguna">
                  👦
                </span>
              </div>
            </div>
            {/* Small active online badge */}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#8EDCC1] border-2 border-white dark:border-slate-900 rounded-full" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="font-bubble text-base sm:text-lg font-black text-[#303F83] dark:text-[#FFE58A] leading-tight">
                Halo, Teman!
              </h2>
              <span className="hidden sm:inline-flex text-[10px] font-bubble font-bold px-2 py-0.2 rounded-full bg-[#FFE58A] text-[#303F83]">
                Level 1
              </span>
            </div>
            <p className="text-xs font-semibold text-[#4777D1] dark:text-[#B9A7F5] leading-none mt-0.5">
              Senang bertemu lagi! ✨
            </p>
          </div>
        </div>

        {/* Right Tools: Notification Bell & Accessibility Toolbar */}
        <div className="flex items-center gap-2">
          {/* Notification Button */}
          <button
            onClick={onOpenNotifications}
            className="btn-bouncy relative p-2 rounded-full bg-white dark:bg-slate-800 border border-[#B9A7F5]/40 text-[#303F83] dark:text-[#FFE58A] hover:bg-[#FFE58A]/30 transition-colors shadow-2xs"
            aria-label="Notifikasi dan Kabar Terbaru"
            title="Kabar Terbaru"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#FF8278] ring-2 ring-white dark:ring-slate-900" />
          </button>

          {/* Quick Accessibility Bar */}
          <AccessibilityBar onReplayOnboarding={onReplayOnboarding} />
        </div>
      </div>
    </header>
  );
}
