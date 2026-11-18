import React from 'react';
import { Wifi, Battery } from 'lucide-react';

export default function PhoneStatusBar({ time = '9:41' }) {
  return (
    <div
      className="w-full flex items-center justify-between px-6 pt-3 pb-2 text-[#303F83] dark:text-slate-300 text-xs font-bold select-none z-20"
      aria-hidden="true"
    >
      <span className="tracking-tight font-sans">{time}</span>
      <div className="flex items-center gap-1.5 opacity-85">
        {/* Cellular bars */}
        <div className="flex items-end gap-0.5 h-3">
          <span className="w-0.5 h-1 bg-current rounded-xs" />
          <span className="w-0.5 h-1.5 bg-current rounded-xs" />
          <span className="w-0.5 h-2 bg-current rounded-xs" />
          <span className="w-0.5 h-2.5 bg-current rounded-xs" />
        </div>
        <Wifi className="w-3.5 h-3.5" />
        <Battery className="w-4 h-4 fill-current" />
      </div>
    </div>
  );
}

