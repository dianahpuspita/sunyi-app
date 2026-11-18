import React, { useState } from 'react';
import ScreenWelcome from './ScreenWelcome';
import ScreenAbout from './ScreenAbout';
import ScreenGuide from './ScreenGuide';
import AccessibilityBar from '../accessibility/AccessibilityBar';

export default function OnboardingContainer({ onFinish }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onFinish();
    }
  };

  const handleDotClick = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-3 sm:p-6 bg-gradient-to-br from-[#EEF2FC] via-[#FAF5FF] to-[#FFF8F0] text-[#24336B] transition-colors duration-200">
      {/* Top Floating Control Bar */}
      <div className="w-full max-w-sm flex items-center justify-between px-2 py-2 mb-2">
        <AccessibilityBar />
        <button
          onClick={onFinish}
          className="text-xs font-bubble font-bold text-[#4777D1] hover:text-[#24336B] px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-xs hover:bg-white transition-colors"
        >
          Lewati ke Beranda &rarr;
        </button>
      </div>

      {/* Pure White Phone Frame Container with Drop Shadow */}
      <div className="w-full max-w-sm rounded-[36px] bg-white shadow-2xl border-4 border-white/80 overflow-hidden relative">
        {currentStep === 0 && (
          <ScreenWelcome
            onNext={handleNext}
            onDotClick={handleDotClick}
            activeStep={0}
          />
        )}
        {currentStep === 1 && (
          <ScreenAbout
            onNext={handleNext}
            onDotClick={handleDotClick}
            activeStep={1}
          />
        )}
        {currentStep === 2 && (
          <ScreenGuide
            onComplete={onFinish}
            onDotClick={handleDotClick}
            activeStep={2}
          />
        )}
      </div>
    </div>
  );
}
