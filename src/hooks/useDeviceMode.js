import { useState, useEffect } from 'react';

/**
 * useDeviceMode - Automatically detects whether the user is on mobile (portrait)
 * or laptop/desktop (landscape wide).
 */
export function useDeviceMode() {
  const checkIsDesktop = () => {
    if (typeof window !== 'undefined') {
      // Landscape or width >= 1024px is Desktop Laptop mode
      return window.innerWidth >= 1024;
    }
    return false;
  };

  const [isDesktop, setIsDesktop] = useState(checkIsDesktop);
  // 'auto' | 'phone' | 'desktop'
  const [overrideMode, setOverrideMode] = useState('auto');

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(checkIsDesktop());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentMode = overrideMode === 'auto' ? (isDesktop ? 'desktop' : 'phone') : overrideMode;

  return {
    isDesktop,
    currentMode,
    overrideMode,
    setOverrideMode,
  };
}
