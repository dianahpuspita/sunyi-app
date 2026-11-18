import React from 'react';
import { useTheme } from './ThemeContext';
import { Type, Eye, Moon, Sun, HelpCircle } from 'lucide-react';

export default function AccessibilityBar({ onReplayOnboarding }) {
  const { fontScale, cycleFontScale, isHighContrast, toggleHighContrast, isDarkMode, toggleDarkMode } = useTheme();

  const fontScaleLabel = {
    normal: 'A',
    large: 'A+',
    xlarge: 'A++',
  }[fontScale];

  return (
    <nav
      aria-label="Pengaturan Aksesibilitas Cepat"
      className="inline-flex items-center gap-1.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-[#B9A7F5]/40 dark:border-slate-700 rounded-full px-2.5 py-1.5 shadow-sm"
    >
      {/* Font Resizer */}
      <button
        onClick={cycleFontScale}
        className="btn-bouncy flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-[#FFE58A] text-[#303F83] hover:bg-[#fedd6b] transition-colors focus:ring-2 focus:ring-[#4777D1]"
        title={`Ukuran Teks: ${fontScale}. Klik untuk perbesar.`}
        aria-label={`Ubah ukuran teks, saat ini: ${fontScale}`}
      >
        <Type className="w-3.5 h-3.5" />
        <span className="font-bubble">{fontScaleLabel}</span>
      </button>

      {/* High Contrast */}
      <button
        onClick={toggleHighContrast}
        className={`btn-bouncy p-1.5 rounded-full text-xs transition-colors focus:ring-2 focus:ring-[#4777D1] ${
          isHighContrast
            ? 'bg-[#303F83] text-white ring-2 ring-yellow-400'
            : 'bg-[#FFF8ED] dark:bg-slate-700 text-[#303F83] dark:text-slate-200 hover:bg-[#FFE58A]'
        }`}
        title={isHighContrast ? 'Matikan Kontras Tinggi' : 'Aktifkan Kontras Tinggi'}
        aria-label={isHighContrast ? 'Matikan Kontras Tinggi' : 'Aktifkan Kontras Tinggi'}
      >
        <Eye className="w-4 h-4" />
      </button>

      {/* Dark Mode */}
      <button
        onClick={toggleDarkMode}
        className="btn-bouncy p-1.5 rounded-full text-xs bg-[#FFF8ED] dark:bg-slate-700 text-[#303F83] dark:text-yellow-400 hover:bg-[#FFE58A] transition-colors focus:ring-2 focus:ring-[#4777D1]"
        title={isDarkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
        aria-label={isDarkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
      >
        {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>

      {/* Replay Onboarding */}
      {onReplayOnboarding && (
        <button
          onClick={onReplayOnboarding}
          className="btn-bouncy p-1.5 rounded-full text-xs bg-[#B9A7F5]/30 text-[#303F83] dark:text-[#FFE58A] hover:bg-[#B9A7F5]/60 transition-colors focus:ring-2 focus:ring-[#4777D1]"
          title="Buka Ulang Panduan & Pengenalan"
          aria-label="Buka Ulang Panduan & Pengenalan"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      )}
    </nav>
  );
}
