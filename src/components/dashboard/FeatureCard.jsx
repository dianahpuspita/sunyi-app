import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Target,
  MessageSquareText,
  AlertTriangle,
  Settings,
  ArrowRight,
} from 'lucide-react';

const ICON_MAP = {
  GraduationCap,
  BookOpen,
  Target,
  MessageSquareText,
  AlertTriangle,
  Settings,
};

export default function FeatureCard({ item, onClick }) {
  const IconComp = ICON_MAP[item.icon] || MessageSquareText;
  const isStage1Active = item.isReady;

  return (
    <button
      onClick={() => onClick(item)}
      className={`btn-bouncy w-full text-left p-4 sm:p-5 rounded-3xl ${item.bgTint} border shadow-xs hover:shadow-md transition-all flex flex-col justify-between min-h-[145px] sm:min-h-[160px] group`}
    >
      <div className="flex items-start justify-between w-full">
        {/* Icon Pill */}
        <div className={`p-3 rounded-2xl ${item.iconBg} shadow-xs transition-transform group-hover:scale-110`}>
          <IconComp className="w-6 h-6" />
        </div>

        {/* Status Badge */}
        <span
          className={`text-[10px] font-bubble font-bold px-2.5 py-1 rounded-full ${
            isStage1Active
              ? 'bg-[#303F83] text-white shadow-2xs'
              : 'bg-white/80 dark:bg-slate-800 text-[#303F83] dark:text-[#FFE58A] border border-black/5'
          }`}
        >
          {isStage1Active ? 'Siap Dicoba' : item.statusBadge.split('—')[0]}
        </span>
      </div>

      {/* Title & Subtitle */}
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bubble text-base sm:text-lg font-black text-[#303F83] dark:text-[#FFE58A] leading-tight">
            {item.title}
          </h3>
          <ArrowRight className="w-4 h-4 text-[#4777D1] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
        <p className="text-xs font-semibold text-[#303F83]/70 dark:text-slate-300 line-clamp-1 mt-0.5">
          {item.subtitle}
        </p>
      </div>
    </button>
  );
}
