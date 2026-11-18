/**
 * sibiData.js
 * Struktur data modul pembelajaran SIBI (Sistem Isyarat Bahasa Indonesia).
 * Terpisah 100% dari BISINDO dan mengikuti standar baku sistem isyarat resmi.
 * Menunggu referensi materi valid dari pengguna.
 */

export const SIBI_CATEGORIES = [
  { id: 'abjad', name: 'Abjad Jari SIBI (A-Z)' },
  { id: 'imbuhan', name: 'Awalan & Akhiran (Morfem)' },
  { id: 'kosakata', name: 'Kosakata Baku SIBI' },
];

export const SIBI_MODULES = [
  // ABJAD JARI SIBI (1 Tangan / Standar Kamus SIBI)
  {
    id: 'sibi-abjad-a',
    category: 'abjad',
    kosakata: 'Abjad SIBI A',
    arti: 'Abjad jari satu tangan untuk huruf A',
    contohPenggunaan: 'Ejaan nama baku dalam SIBI.',
    mediaType: null,
    mediaUrl: null,
    isAvailable: false,
  },
  {
    id: 'sibi-abjad-b',
    category: 'abjad',
    kosakata: 'Abjad SIBI B',
    arti: 'Abjad jari satu tangan untuk huruf B',
    contohPenggunaan: 'Ejaan nama baku dalam SIBI.',
    mediaType: null,
    mediaUrl: null,
    isAvailable: false,
  },
  {
    id: 'sibi-abjad-c',
    category: 'abjad',
    kosakata: 'Abjad SIBI C',
    arti: 'Abjad jari satu tangan untuk huruf C',
    contohPenggunaan: 'Ejaan nama baku dalam SIBI.',
    mediaType: null,
    mediaUrl: null,
    isAvailable: false,
  },

  // IMBUHAN (Khas SIBI)
  {
    id: 'sibi-imbuhan-me',
    category: 'imbuhan',
    kosakata: 'Awalan "Me-"',
    arti: 'Awalan pembentuk kata kerja aktif transitif',
    contohPenggunaan: 'Me + tulis = Menulis',
    mediaType: null,
    mediaUrl: null,
    isAvailable: false,
  },
  {
    id: 'sibi-imbuhan-di',
    category: 'imbuhan',
    kosakata: 'Awalan "Di-"',
    arti: 'Awalan pembentuk kata kerja pasif',
    contohPenggunaan: 'Di + baca = Dibaca',
    mediaType: null,
    mediaUrl: null,
    isAvailable: false,
  },

  // KOSAKATA BAKU
  {
    id: 'sibi-kata-sekolah',
    category: 'kosakata',
    kosakata: 'Sekolah',
    arti: 'Lembaga pendidikan formal',
    contohPenggunaan: 'Saya bersekolah di SMK jurusan TKJ.',
    mediaType: null,
    mediaUrl: null,
    isAvailable: false,
  },
  {
    id: 'sibi-kata-belajar',
    category: 'kosakata',
    kosakata: 'Belajar',
    arti: 'Berusaha memperoleh kepandaian atau ilmu',
    contohPenggunaan: 'Kami belajar bahasa isyarat bersama.',
    mediaType: null,
    mediaUrl: null,
    isAvailable: false,
  },
];

