/**
 * bisindoData.js
 * Database Materi Pembelajaran Resmi BISINDO
 * Berdasarkan referensi resmi dan 12 Video YouTube dari pengguna:
 * 1. Abjad BISINDO
 * 2. Kata Dasar
 * 3. Kata Sapaan
 * 4. Nama Keluarga
 * 5. Nama-Nama Hari
 * 6. Kata Tanya
 * 7. Kalimat Sehari-hari (Bagian 1)
 * 8. Kalimat Sehari-hari (Bagian 2)
 * 9. Warna
 * 10. Ekspresi & Perasaan
 * 11. Kata Kerja
 * 12. Kalimat Rencana Pertemuan
 */

export const BISINDO_CATEGORIES = [
  { id: 'abjad', name: '1. Abjad BISINDO (A-Z)' },
  { id: 'dasar', name: '2. Kata Dasar' },
  { id: 'sapaan', name: '3. Kata Sapaan' },
  { id: 'keluarga', name: '4. Nama Keluarga' },
  { id: 'hari', name: '5. Nama-Nama Hari' },
  { id: 'tanya', name: '6. Kata Tanya' },
  { id: 'sehari1', name: '7. Kalimat Sehari-Hari I' },
  { id: 'sehari2', name: '8. Kalimat Sehari-Hari II' },
  { id: 'warna', name: '9. Isyarat Warna' },
  { id: 'ekspresi', name: '10. Ekspresi & Perasaan' },
  { id: 'kerja', name: '11. Kata Kerja' },
  { id: 'rencana', name: '12. Rencana Pertemuan' },
];

export const BISINDO_YOUTUBE_RESOURCES = [
  {
    categoryId: 'abjad',
    title: 'Belajar Abjad Jari BISINDO (A-Z)',
    youtubeUrl: 'https://youtu.be/PHpLx3OfMwE',
    embedUrl: 'https://www.youtube.com/embed/PHpLx3OfMwE',
    deskripsi: 'Panduan lengkap abjad jari BISINDO resmi dari huruf A sampai Z dengan gerakan 2 tangan yang jelas.',
    chartImage: '/materi/bisindo/abjad-bisindo-chart.jpg',
  },
  {
    categoryId: 'dasar',
    title: 'Kosakata Dasar BISINDO',
    youtubeUrl: 'https://youtu.be/arAzoJ5aFZ4',
    embedUrl: 'https://www.youtube.com/embed/arAzoJ5aFZ4',
    deskripsi: 'Kumpulan kosakata dasar yang paling sering digunakan dalam komunikasi sehari-hari.',
  },
  {
    categoryId: 'sapaan',
    title: 'Kata Sapaan & Sopan Santun',
    youtubeUrl: 'https://youtu.be/u_Vb5cMlc8A',
    embedUrl: 'https://www.youtube.com/embed/u_Vb5cMlc8A',
    deskripsi: 'Sapaan ramah: Halo, Selamat Pagi, Terima Kasih, Sama-Sama, Maaf, dan Tolong.',
  },
  {
    categoryId: 'keluarga',
    title: 'Nama-Nama Anggota Keluarga',
    youtubeUrl: 'https://youtu.be/eY7-QC3ik9o',
    embedUrl: 'https://www.youtube.com/embed/eY7-QC3ik9o',
    deskripsi: 'Isyarat sebutan keluarga: Ayah, Ibu, Kakak, Adik, Kakek, Nenek, dan Saudara.',
  },
  {
    categoryId: 'hari',
    title: 'Nama-Nama Hari dalam Sepekan',
    youtubeUrl: 'https://youtu.be/IIfLZ86xOzY',
    embedUrl: 'https://www.youtube.com/embed/IIfLZ86xOzY',
    deskripsi: 'Pengucapan isyarat hari: Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, dan Minggu.',
  },
  {
    categoryId: 'tanya',
    title: 'Kata Tanya dalam BISINDO',
    youtubeUrl: 'https://youtu.be/A5qcyQrDRPA',
    embedUrl: 'https://www.youtube.com/embed/A5qcyQrDRPA',
    deskripsi: 'Kata tanya esensial: Apa, Siapa, Kapan, Di Mana, Kenapa, dan Bagaimana.',
  },
  {
    categoryId: 'sehari1',
    title: 'Kalimat Sehari-Hari (Bagian 1)',
    youtubeUrl: 'https://youtu.be/NaafQwd0XEY',
    embedUrl: 'https://www.youtube.com/embed/NaafQwd0XEY',
    deskripsi: 'Contoh percakapan dan perangkaian kalimat praktis sehari-hari bagian pertama.',
  },
  {
    categoryId: 'sehari2',
    title: 'Kalimat Sehari-Hari (Bagian 2)',
    youtubeUrl: 'https://youtu.be/pgyXPdeucQc',
    embedUrl: 'https://www.youtube.com/embed/pgyXPdeucQc',
    deskripsi: 'Lanjutan contoh kalimat percakapan praktis sehari-hari bagian kedua.',
  },
  {
    categoryId: 'warna',
    title: 'Bahasa Isyarat Warna',
    youtubeUrl: 'https://youtu.be/wMNkPviqnHc',
    embedUrl: 'https://www.youtube.com/embed/wMNkPviqnHc',
    deskripsi: 'Mengenal nama-nama warna: Merah, Biru, Kuning, Hijau, Putih, Hitam, dan Cokelat.',
  },
  {
    categoryId: 'ekspresi',
    title: 'Ekspresi dan Perasaan',
    youtubeUrl: 'https://youtu.be/2BM68r3Ncpw',
    embedUrl: 'https://www.youtube.com/embed/2BM68r3Ncpw',
    deskripsi: 'Mengungkapkan emosi dan perasaan: Senang, Sedih, Marah, Lelah, Takut, dan Cinta.',
  },
  {
    categoryId: 'kerja',
    title: 'Kata Kerja Esensial',
    youtubeUrl: 'https://youtu.be/zruER1jpTr4',
    embedUrl: 'https://www.youtube.com/embed/zruER1jpTr4',
    deskripsi: 'Aktivitas kerja: Belajar, Bekerja, Berjalan, Membaca, Menulis, dan Membantu.',
  },
  {
    categoryId: 'rencana',
    title: 'Kalimat Rencana Pertemuan',
    youtubeUrl: 'https://youtu.be/estJnrPqU2U',
    embedUrl: 'https://www.youtube.com/embed/estJnrPqU2U',
    deskripsi: 'Menyusun janji dan rencana pertemuan: Mau bertemu jam berapa, hari apa, di mana.',
  },
];

export const BISINDO_MODULES = [
  {
    id: 'abjad-chart',
    category: 'abjad',
    kosakata: 'Panduan Poster Abjad A-Z BISINDO',
    arti: 'Grafis visual resmi pembentukan abjad A sampai Z menggunakan tangan',
    contohPenggunaan: 'Digunakan sebagai acuan gerakan telunjuk, jempol, dan dua tangan.',
    mediaType: 'image',
    mediaUrl: '/materi/bisindo/abjad-bisindo-chart.jpg',
    isAvailable: true,
  },
  {
    id: 'bisindo-abjad-a',
    category: 'abjad',
    kosakata: 'Huruf A',
    arti: 'Kedua tangan membentuk segitiga: telunjuk bertemu di atas, jempol bertemu di bawah',
    contohPenggunaan: 'Ejaan huruf A dalam BISINDO.',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/PHpLx3OfMwE',
    isAvailable: true,
  },
  {
    id: 'bisindo-abjad-b',
    category: 'abjad',
    kosakata: 'Huruf B',
    arti: 'Kedua tangan melengkung bersentuhan membentuk dua lengkungan huruf B',
    contohPenggunaan: 'Ejaan huruf B dalam BISINDO.',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/PHpLx3OfMwE',
    isAvailable: true,
  },
  {
    id: 'bisindo-abjad-c',
    category: 'abjad',
    kosakata: 'Huruf C',
    arti: 'Satu tangan melengkung setengah lingkaran membentuk huruf C',
    contohPenggunaan: 'Ejaan huruf C dalam BISINDO.',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/PHpLx3OfMwE',
    isAvailable: true,
  },
  {
    id: 'bisindo-abjad-d',
    category: 'abjad',
    kosakata: 'Huruf D',
    arti: 'Telunjuk tegak kanan dipadukan lengkungan tangan kiri membentuk huruf D',
    contohPenggunaan: 'Ejaan huruf D dalam BISINDO.',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/PHpLx3OfMwE',
    isAvailable: true,
  },
  {
    id: 'bisindo-abjad-l',
    category: 'abjad',
    kosakata: 'Huruf L',
    arti: 'Ibu jari dan telunjuk terbuka 90 derajat membentuk sudut siku L',
    contohPenggunaan: 'Ejaan huruf L dalam BISINDO.',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/PHpLx3OfMwE',
    isAvailable: true,
  },
  {
    id: 'bisindo-abjad-t',
    category: 'abjad',
    kosakata: 'Huruf T',
    arti: 'Telunjuk kiri mendatar di atas, telunjuk kanan tegak di tengah bawah',
    contohPenggunaan: 'Ejaan huruf T dalam BISINDO.',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/PHpLx3OfMwE',
    isAvailable: true,
  },
  {
    id: 'bisindo-abjad-v',
    category: 'abjad',
    kosakata: 'Huruf V',
    arti: 'Jari telunjuk dan jari tengah terangkat terbuka melebar',
    contohPenggunaan: 'Ejaan huruf V dalam BISINDO.',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/PHpLx3OfMwE',
    isAvailable: true,
  },
  {
    id: 'bisindo-abjad-x',
    category: 'abjad',
    kosakata: 'Huruf X',
    arti: 'Kedua jari telunjuk saling bersilang membentuk tanda silang X',
    contohPenggunaan: 'Ejaan huruf X dalam BISINDO.',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/PHpLx3OfMwE',
    isAvailable: true,
  },
  {
    id: 'bisindo-sapaan-halo',
    category: 'sapaan',
    kosakata: 'Halo / Hai',
    arti: 'Telapak tangan terbuka melambai menyapa',
    contohPenggunaan: 'Halo, selamat pagi teman-teman!',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/u_Vb5cMlc8A',
    isAvailable: true,
  },
  {
    id: 'bisindo-sapaan-terimakasih',
    category: 'sapaan',
    kosakata: 'Terima Kasih',
    arti: 'Ujung jari menyentuh dagu/dada lalu diarahkan ke depan',
    contohPenggunaan: 'Terima kasih atas bantuanmu.',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/u_Vb5cMlc8A',
    isAvailable: true,
  },
  {
    id: 'bisindo-sapaan-sama-sama',
    category: 'sapaan',
    kosakata: 'Sama-Sama',
    arti: 'Kedua telapak tangan terbuka simetris di depan dada',
    contohPenggunaan: 'Sama-sama, senang bisa membantu.',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/u_Vb5cMlc8A',
    isAvailable: true,
  },
  {
    id: 'bisindo-sapaan-tolong',
    category: 'sapaan',
    kosakata: 'Tolong',
    arti: 'Kedua tangan menangkup di depan dada memohon bantuan',
    contohPenggunaan: 'Tolong bantu saya.',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/embed/u_Vb5cMlc8A',
    isAvailable: true,
  },
];
