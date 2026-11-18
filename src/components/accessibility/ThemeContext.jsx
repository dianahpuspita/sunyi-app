import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Font scale: 'normal' | 'large' | 'xlarge'
  const [fontScale, setFontScale] = useState(() => {
    return localStorage.getItem('sunyi_font_scale') || 'normal';
  });

  // High contrast mode: boolean
  const [isHighContrast, setIsHighContrast] = useState(() => {
    return localStorage.getItem('sunyi_high_contrast') === 'true';
  });

  // Dark mode: boolean (saved to localStorage)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('sunyi_dark_mode') === 'true';
  });

  // Update Font Scale class
  useEffect(() => {
    localStorage.setItem('sunyi_font_scale', fontScale);
    document.documentElement.classList.remove('font-scale-normal', 'font-scale-large', 'font-scale-xlarge');
    document.documentElement.classList.add(`font-scale-${fontScale}`);
  }, [fontScale]);

  // Update High Contrast class
  useEffect(() => {
    localStorage.setItem('sunyi_high_contrast', String(isHighContrast));
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  // Update Dark Mode class (adds both .dark and .dark-theme)
  useEffect(() => {
    localStorage.setItem('sunyi_dark_mode', String(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  const cycleFontScale = () => {
    if (fontScale === 'normal') setFontScale('large');
    else if (fontScale === 'large') setFontScale('xlarge');
    else setFontScale('normal');
  };

  const toggleHighContrast = () => {
    setIsHighContrast((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        fontScale,
        cycleFontScale,
        isHighContrast,
        toggleHighContrast,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
