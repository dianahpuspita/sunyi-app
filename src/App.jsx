import React, { useState } from 'react';
import { ThemeProvider } from './components/accessibility/ThemeContext';
import { useDeviceMode } from './hooks/useDeviceMode';
import AccessibilityBar from './components/accessibility/AccessibilityBar';
import OnboardingContainer from './components/onboarding/OnboardingContainer';
import DashboardPhoneView from './components/dashboard/DashboardPhoneView';
import DashboardDesktopLandscape from './components/dashboard/DashboardDesktopLandscape';
import CelebrationView from './components/dashboard/CelebrationView';
import CameraSignTracking from './components/camera/CameraSignTracking';
import ModuleBisindo from './components/modules/ModuleBisindo';
import ModuleSibi from './components/modules/ModuleSibi';
import ScreenWelcome from './components/onboarding/ScreenWelcome';
import FeatureModal from './components/dashboard/FeatureModal';
import { MAIN_MENUS } from './data/menuData';
import { Smartphone, Monitor, Camera } from 'lucide-react';

function AppContent() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(() => {
    return localStorage.getItem('sunyi_onboarding_completed') === 'true';
  });

  const { isDesktop, currentMode, setOverrideMode } = useDeviceMode();
  // 'dashboard' | 'camera' | 'bisindo' | 'sibi' | 'welcome' | 'celebration'
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [modalFeature, setModalFeature] = useState(null);
  const [activeNavTab, setActiveNavTab] = useState('beranda');

  const handleFinishOnboarding = () => {
    localStorage.setItem('sunyi_onboarding_completed', 'true');
    setHasCompletedOnboarding(true);
    setActiveScreen('dashboard');
  };

  const handleReplayOnboarding = () => {
    setHasCompletedOnboarding(false);
    setActiveScreen('welcome');
  };

  const handleSelectMenu = (menuId) => {
    if (menuId === 'kamera') {
      setActiveScreen('camera');
      return;
    }
    if (menuId === 'bisindo') {
      setActiveScreen('bisindo');
      return;
    }
    if (menuId === 'sibi') {
      setActiveScreen('sibi');
      return;
    }
    const feature = MAIN_MENUS.find((m) => m.id === menuId);
    if (feature) {
      setModalFeature(feature);
    }
  };

  const handleOpenNotifications = () => {
    setModalFeature({
      title: 'Pemberitahuan & Kabar',
      subtitle: 'Informasi SUNYI v2.0',
      statusBadge: 'Terkini',
      description: 'Kamera Tracking Penerjemah Isyarat Real-Time dan Modul Resmi BISINDO & SIBI aktif!',
      isReady: true,
    });
  };

  // If user is on Phone or forced Phone Mode and hasn't finished onboarding:
  if (!hasCompletedOnboarding && currentMode === 'phone') {
    return <OnboardingContainer onFinish={handleFinishOnboarding} />;
  }

  // Active Screen: Kamera Tracking Penerjemah Isyarat
  if (activeScreen === 'camera') {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-[#EEF2FC] via-[#FAF5FF] to-[#FFF8F0] dark:bg-[#121626] text-[#24336B] transition-colors">
        <CameraSignTracking onBack={() => setActiveScreen('dashboard')} />
      </div>
    );
  }

  // Active Screen: Modul BISINDO
  if (activeScreen === 'bisindo') {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-[#EEF2FC] via-[#FAF5FF] to-[#FFF8F0] dark:bg-[#121626] text-[#24336B] transition-colors">
        <ModuleBisindo onBack={() => setActiveScreen('dashboard')} />
      </div>
    );
  }

  // Active Screen: Modul SIBI
  if (activeScreen === 'sibi') {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-[#EEF2FC] via-[#FAF5FF] to-[#FFF8F0] dark:bg-[#121626] text-[#24336B] transition-colors">
        <ModuleSibi onBack={() => setActiveScreen('dashboard')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col transition-colors duration-200">
      {/* LAPTOP / DESKTOP LANDSCAPE VIEW */}
      {currentMode === 'desktop' ? (
        <div className="w-full min-h-screen flex flex-col">
          {/* Top Quick Bar for Laptop */}
          <div className="w-full bg-white/95 dark:bg-[#1A2342]/95 border-b border-slate-200 dark:border-slate-800 px-6 py-2 flex items-center justify-between text-xs z-30 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="font-bubble text-sm font-black text-[#24336B] dark:text-[#FFE58A]">
                SUNYI
              </span>
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                Mode Laptop Landscape
              </span>
            </div>

            {/* Mode Switcher Toggle on Laptop & Camera Shortcut */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveScreen('camera')}
                className="btn-bouncy flex items-center gap-1.5 px-3 py-1 rounded-full font-bubble font-bold bg-[#FFE58A] text-[#24336B] shadow-2xs hover:bg-[#fedb68]"
              >
                <Camera className="w-3.5 h-3.5 text-[#3E69C9]" />
                <span>Buka Kamera Isyarat</span>
              </button>

              <div className="inline-flex p-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setOverrideMode('desktop')}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full font-bubble font-bold bg-[#24336B] text-white shadow-xs"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Laptop (Landscape)</span>
                </button>
                <button
                  onClick={() => setOverrideMode('phone')}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full font-bubble font-bold text-slate-500 hover:text-[#24336B] dark:text-slate-300 transition-colors"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>HP (Portrait)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Full-width Landscape Dashboard */}
          <DashboardDesktopLandscape
            onSelectMenu={handleSelectMenu}
            onOpenNotifications={handleOpenNotifications}
            onOpenCelebration={() => setActiveScreen('celebration')}
            onReplayOnboarding={handleReplayOnboarding}
            activeNavTab={activeNavTab}
            onSelectNavTab={setActiveNavTab}
          />
        </div>
      ) : (
        /* PHONE PORTRAIT VIEW (Exact Mockup Phone) */
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-2 sm:p-5">
          {/* Top Floating bar if opened on wider screen in phone preview */}
          {isDesktop && (
            <div className="w-full max-w-sm flex justify-between items-center px-2 py-1.5 mb-2">
              <button
                onClick={() => setOverrideMode('desktop')}
                className="btn-bouncy flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bubble font-bold bg-[#24336B] text-white shadow-xs"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Beralih ke Mode Laptop</span>
              </button>

              <AccessibilityBar onReplayOnboarding={handleReplayOnboarding} />
            </div>
          )}

          {/* Phone Frame Container */}
          <div className="w-full max-w-sm rounded-[38px] bg-white dark:bg-[#1A213D] shadow-2xl border-4 border-white/90 dark:border-slate-700 overflow-hidden relative">
            {activeScreen === 'celebration' ? (
              <CelebrationView onBack={() => setActiveScreen('dashboard')} />
            ) : activeScreen === 'welcome' ? (
              <ScreenWelcome
                onNext={() => setActiveScreen('dashboard')}
                onDotClick={() => setActiveScreen('dashboard')}
                activeStep={0}
              />
            ) : (
              <DashboardPhoneView
                onSelectMenu={handleSelectMenu}
                onOpenNotifications={handleOpenNotifications}
                onOpenCelebration={() => setActiveScreen('celebration')}
                activeNavTab={activeNavTab}
                onSelectNavTab={setActiveNavTab}
              />
            )}
          </div>
        </div>
      )}

      {/* Feature Detail Modal */}
      <FeatureModal
        feature={modalFeature}
        onClose={() => setModalFeature(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
