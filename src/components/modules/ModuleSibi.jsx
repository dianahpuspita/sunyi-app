import React, { useState } from 'react';
import { SIBI_CATEGORIES, SIBI_MODULES } from '../../data/sibiData';
import { ArrowLeft, Search, Clock, BookOpen, Video, FileText } from 'lucide-react';

export default function ModuleSibi({ onBack }) {
  const [activeCategory, setActiveCategory] = useState('abjad');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = SIBI_MODULES.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    const matchesSearch =
      item.kosakata.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.arti.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 text-left flex flex-col min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <button
          onClick={onBack}
          className="btn-bouncy flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bubble text-xs font-bold text-[#24336B] dark:text-[#FFE58A] shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </button>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4777D1]/15 border border-[#4777D1]/30 text-[#303F83] dark:text-[#4777D1] text-xs font-bubble font-bold">
          <FileText className="w-3.5 h-3.5" />
          <span>Sistem Isyarat Bahasa Indonesia (Baku Kemendikdasmen)</span>
        </div>
      </div>

      {/* Hero Banner Modul */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#4777D1]/20 via-[#B9A7F5]/25 to-[#FFC99F]/25 border-2 border-white dark:border-slate-700 shadow-md mb-6">
        <h1 className="font-bubble text-2xl sm:text-3xl font-black text-[#24336B] dark:text-[#FFE58A]">
          📖 Modul Sistem Isyarat Bahasa Indonesia (SIBI)
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl font-semibold">
          Sistem isyarat baku yang mengadopsi tata bahasa lisan Indonesia (termasuk imbuhan awalan/akhiran). Terpisah dari BISINDO dan menunggu materi resmi.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Cari materi SIBI..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bubble text-[#24336B] dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#4777D1]"
          />
        </div>

        {/* Categories Chips */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {SIBI_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bubble font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#24336B] text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[#4777D1]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Module Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group cursor-pointer p-5 rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 hover:border-[#4777D1] hover:shadow-lg transition-all flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bubble text-xl font-black text-[#24336B] dark:text-[#FFE58A] group-hover:text-[#4777D1] transition-colors">
                  {item.kosakata}
                </h3>

                {item.isAvailable ? (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bubble font-bold flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    <span>Tersedia</span>
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 text-amber-700 dark:text-amber-300 text-[10px] font-bubble font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Materi Segera Hadir</span>
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-3">
                {item.arti}
              </p>
            </div>

            <div className="mt-2 p-3 rounded-2xl bg-[#F0F4FC] dark:bg-slate-900/40 border border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-bubble font-bold text-[#4777D1]">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Pelajari Tata Bahasa</span>
              </span>
              <span className="text-[11px] text-slate-400 font-normal">
                {item.isAvailable ? 'Buka Materi >' : 'Menunggu Referensi >'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="p-8 text-center text-slate-400 font-bubble text-sm">
          Tidak ada materi SIBI yang sesuai dengan pencarianmu.
        </div>
      )}

      {/* Modal Detail Item */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-800 p-6 border-4 border-white dark:border-slate-700 shadow-2xl text-left">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3 mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Detail Materi SIBI
                </span>
                <h3 className="font-bubble text-2xl font-black text-[#24336B] dark:text-[#FFE58A]">
                  {selectedItem.kosakata}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="w-full aspect-16/9 rounded-2xl bg-slate-100 dark:bg-slate-900 flex flex-col items-center justify-center p-4 text-center border border-slate-200 dark:border-slate-700 mb-4">
              <Clock className="w-10 h-10 text-amber-500 mb-2 animate-bounce" />
              <p className="font-bubble text-sm font-bold text-slate-600 dark:text-slate-300">
                Materi Segera Hadir
              </p>
              <p className="text-[11px] text-slate-400 max-w-xs mt-1">
                Menunggu sumber referensi resmi SIBI dari pengguna.
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <strong className="text-slate-500 block">Arti / Makna:</strong>
                <p className="font-semibold text-slate-700 dark:text-slate-200">{selectedItem.arti}</p>
              </div>
              <div>
                <strong className="text-slate-500 block">Contoh Penggunaan:</strong>
                <p className="font-semibold text-slate-700 dark:text-slate-200">{selectedItem.contohPenggunaan}</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedItem(null)}
              className="btn-bouncy w-full mt-5 py-2.5 rounded-full bg-[#24336B] text-white font-bubble font-bold text-xs shadow-xs"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

