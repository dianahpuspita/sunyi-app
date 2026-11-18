import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  RefreshCw,
  AlertCircle,
  Volume2,
  Trash2,
  Sparkles,
  Copy,
  Check,
  ImageIcon,
  X,
  Sliders,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react';

// Panduan Gerakan untuk setiap huruf (1 tangan & 2 tangan)
const ALPHABET_GUIDE = {
  A: {
    name: 'Huruf A',
    oneHand: 'Kepal tangan erat, posisikan jempol tegak di samping jari telunjuk.',
    twoHand: 'Satukan kedua telunjuk di atas dan kedua jempol di bawah membentuk segitiga A.',
    hint: 'Segitiga 2 tangan atau kepalan jempol tegak 1 tangan.',
  },
  B: {
    name: 'Huruf B',
    oneHand: 'Tegakkan 4 jari rapat ke atas, lipat ibu jari ke depan telapak tangan.',
    twoHand: 'Kedua tangan melengkung saling bersentuhan membentuk dua lengkungan perut huruf B.',
    hint: '4 jari rapat tegak (1 tangan) ATAU 2 tangan melengkung.',
  },
  C: {
    name: 'Huruf C',
    oneHand: 'Lengkungkan ibu jari dan jari-jari lainnya membentuk huruf kurva C.',
    twoHand: 'Kedua tangan melengkung bersamaan.',
    hint: 'Bentuk setengah lingkaran C dengan ibu jari dan jari.',
  },
  D: {
    name: 'Huruf D',
    oneHand: 'Telunjuk tegak lurus ke atas, jari tengah & jempol melingkar di bawahnya.',
    twoHand: 'Satu telunjuk tegak (tiang), tangan lain melengkung C menempel di tiang.',
    hint: 'Telunjuk tegak dengan lingkaran di sampingnya.',
  },
  E: {
    name: 'Huruf E',
    oneHand: 'Tiga jari (telunjuk, tengah, manis) mendatar horizontal menyerupai huruf E.',
    twoHand: 'Tiga jari mendatar pada satu tangan.',
    hint: 'Tiga jari mendatar atau cakar melengkung ke telapak.',
  },
  F: {
    name: 'Huruf F',
    oneHand: 'Satukan ujung telunjuk dan jempol (lingkaran OK), 3 jari lain tegak ke atas.',
    twoHand: 'Dua jari mendatar disilang oleh telunjuk tangan lainnya dari atas.',
    hint: 'Tanda OK (1 tangan) atau telunjuk menyilang 2 jari (2 tangan).',
  },
  G: {
    name: 'Huruf G',
    oneHand: 'Ibu jari dan telunjuk menunjuk mendatar ke samping sejajar.',
    twoHand: 'Dua kepalan bertumpuk sejajar.',
    hint: 'Telunjuk dan jempol mendatar sejajar.',
  },
  H: {
    name: 'Huruf H',
    oneHand: 'Telunjuk dan jari tengah mendatar rapat bersamaan.',
    twoHand: 'Kedua jari telunjuk tegak berdampingan seperti tiang jembatan H.',
    hint: 'Dua telunjuk tegak berdampingan (2 tangan) atau 2 jari mendatar.',
  },
  I: {
    name: 'Huruf I',
    oneHand: 'Hanya jari kelingking yang berdiri tegak lurus ke atas, jari lain menutup.',
    twoHand: 'Kelingking tegak lurus.',
    hint: 'Kelingking berdiri sendiri ke atas.',
  },
  J: {
    name: 'Huruf J',
    oneHand: 'Kelingking tegak lalu digerakkan melengkung seperti kail huruf J.',
    twoHand: 'Kelingking ditelusuri pada telapak tangan.',
    hint: 'Kelingking membentuk lekukan huruf J.',
  },
  K: {
    name: 'Huruf K',
    oneHand: 'Telunjuk tegak lurus, jari tengah miring ke depan, jempol di antaranya.',
    twoHand: 'Satu telunjuk tegak (tiang), tangan lain membentuk cabang menempel.',
    hint: 'Bentuk cabang huruf K.',
  },
  L: {
    name: 'Huruf L',
    oneHand: 'Ibu jari dan jari telunjuk terbuka tegak lurus 90° membentuk huruf L.',
    twoHand: 'Bentuk sudut siku L.',
    hint: 'Ibu jari dan telunjuk membentuk sudut siku 90 derajat.',
  },
  M: {
    name: 'Huruf M',
    oneHand: 'Tiga jari (telunjuk, tengah, manis) menutup di atas ibu jari.',
    twoHand: 'Tiga jari tangan kanan bertumpu di telapak tangan kiri (3 kaki M).',
    hint: 'Tiga jari bertumpu di telapak kiri membentuk kaki M.',
  },
  N: {
    name: 'Huruf N',
    oneHand: 'Dua jari (telunjuk dan tengah) menutup di atas ibu jari.',
    twoHand: 'Dua jari tangan kanan bertumpu di telapak tangan kiri (2 kaki N).',
    hint: 'Dua jari bertumpu di telapak kiri membentuk kaki N.',
  },
  O: {
    name: 'Huruf O',
    oneHand: 'Ujung semua jari dan ibu jari melingkar saling bersentuhan membentuk O.',
    twoHand: 'Lingkaran O dengan satu tangan.',
    hint: 'Ujung jari dan ibu jari melingkar bulat huruf O.',
  },
  P: {
    name: 'Huruf P',
    oneHand: 'Bentuk huruf K yang diarahkan condong ke bawah.',
    twoHand: 'Satu telunjuk tegak, tangan lain membuat lingkaran di pucuk tiang.',
    hint: 'Telunjuk tegak dengan bulatan di pucuk atasnya.',
  },
  Q: {
    name: 'Huruf Q',
    oneHand: 'Ibu jari dan telunjuk mengarah ke bawah.',
    twoHand: 'Lingkaran di telapak tangan.',
    hint: 'Ibu jari dan telunjuk mengarah ke bawah.',
  },
  R: {
    name: 'Huruf R',
    oneHand: 'Jari telunjuk dan jari tengah berdiri tegak saling bersilangan (menyilang).',
    twoHand: 'Jari telunjuk dan tengah bersilangan erat.',
    hint: 'Silangkan jari telunjuk dan jari tengah ke atas.',
  },
  S: {
    name: 'Huruf S',
    oneHand: 'Kepalan tangan dengan ibu jari melintang rapat di depan keempat jari.',
    twoHand: 'Dua kepalan tangan saling mengunci atau kelingking saling mengait.',
    hint: 'Kepalkan tangan dengan jempol melintang di depan jari.',
  },
  T: {
    name: 'Huruf T',
    oneHand: 'Ibu jari diselipkan di antara jari telunjuk dan jari tengah mengepal.',
    twoHand: 'Satu telunjuk tegak, telunjuk tangan lain mendatar di atasnya seperti atap T.',
    hint: 'Telunjuk mendatar di atas telunjuk tegak (literal huruf T).',
  },
  U: {
    name: 'Huruf U',
    oneHand: 'Jari telunjuk dan jari tengah tegak lurus dan RAPAT bersamaan.',
    twoHand: 'Dua jari tegak rapat.',
    hint: 'Dua jari berdiri tegak rapat (Huruf U).',
  },
  V: {
    name: 'Huruf V',
    oneHand: 'Jari telunjuk dan jari tengah tegak lurus dan DIBUKA MELEBAR (bentuk V).',
    twoHand: 'Dua jari terangkat membentuk huruf V.',
    hint: 'Tanda damai / huruf V (dua jari melebar).',
  },
  W: {
    name: 'Huruf W',
    oneHand: 'Tiga jari (telunjuk, tengah, manis) terangkat tegak dan melebar (huruf W).',
    twoHand: 'Kedua tangan membentuk V saling bersisian membentuk W.',
    hint: 'Tiga jari terangkat melebar menyerupai W.',
  },
  X: {
    name: 'Huruf X',
    oneHand: 'Jari telunjuk ditekuk melengkung seperti kail.',
    twoHand: 'Kedua jari telunjuk saling menyilang membentuk tanda silang X.',
    hint: 'Kedua jari telunjuk bersilang membentuk huruf X.',
  },
  Y: {
    name: 'Huruf Y',
    oneHand: 'Ibu jari dan kelingking terbuka melebar (simbol Shaka/pesawat).',
    twoHand: 'Satu tangan tiang, tangan lain membuat V di atasnya.',
    hint: 'Ibu jari dan kelingking terbuka (Shaka).',
  },
  Z: {
    name: 'Huruf Z',
    oneHand: 'Jari telunjuk mengacung dan menarik garis huruf Z di udara.',
    twoHand: 'Telunjuk menggambar huruf Z di udara.',
    hint: 'Telunjuk mengacung di depan dada.',
  },
};

export default function CameraSignTracking({ onBack }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const cameraRef = useRef(null);
  const handsRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [cameraError, setCameraError] = useState(null);
  const [handsCount, setHandsCount] = useState(0);

  // Mode: 'abjad' (default: strictly A-Z), 'sapaan' (words), 'all' (mixed)
  const [trackingMode, setTrackingMode] = useState('abjad');
  const [selectedLetter, setSelectedLetter] = useState('B'); // Default selected to guide letter B
  const [matchedSelected, setMatchedSelected] = useState(false);

  // Translation States
  const [detectedSign, setDetectedSign] = useState(null);
  const [assembledSentence, setAssembledSentence] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showChartModal, setShowChartModal] = useState(false);

  // Stability counter
  const stableCounterRef = useRef(0);
  const lastCandidateRef = useRef('');

  // -------------------------------------------------------------
  // Geometry & Biometric Normalization Helpers
  // -------------------------------------------------------------
  const dist = (p1, p2) => Math.hypot(p1.x - p2.x, p1.y - p2.y);

  // Biometric hand scale: Distance between wrist (0) and middle knuckle (9)
  const getHandScale = (h) => Math.max(0.08, dist(h[0], h[9]));

  // Is finger extended away from wrist compared to PIP and MCP?
  const isExt = (h, tip, pip, mcp) => {
    const dTip = dist(h[tip], h[0]);
    const dPip = dist(h[pip], h[0]);
    const dMcp = dist(h[mcp], h[0]);
    return dTip > dPip * 1.05 && dTip > dMcp * 1.12;
  };

  // Is thumb extended away from palm?
  const isThumbExt = (h) => {
    const dTip = dist(h[4], h[17]);
    const dKnuckle = dist(h[2], h[17]);
    return dTip > dKnuckle * 1.15;
  };

  /**
   * Master Classifier supporting both 2-Hand BISINDO and 1-Hand Fingerspelling
   */
  const classifyGesture = (multiLandmarks, mode) => {
    if (!multiLandmarks || multiLandmarks.length === 0) return null;

    const numHands = multiLandmarks.length;
    const h1 = multiLandmarks[0];
    const h2 = numHands > 1 ? multiLandmarks[1] : null;

    const s1 = getHandScale(h1);
    const s2 = h2 ? getHandScale(h2) : s1;
    const sAvg = (s1 + s2) / 2;

    // ============================================================
    // A. DUAL-HAND BISINDO RECOGNITION (When 2 hands visible)
    // ============================================================
    if (h2) {
      const distIndexTips = dist(h1[8], h2[8]);
      const distThumbTips = dist(h1[4], h2[4]);
      const distWrists = dist(h1[0], h2[0]);

      // Symmetric check helpers: test both (A, B) and (B, A)
      const testPair = (fn) => fn(h1, h2, sAvg) || fn(h2, h1, sAvg);

      // --- HURUF A (Segitiga 2 Tangan) ---
      // Ujung telunjuk bertemu di atas, kedua jempol bertemu di bawah
      if (distIndexTips < 1.15 * sAvg && distThumbTips < 1.35 * sAvg) {
        const topY = (h1[8].y + h2[8].y) / 2;
        const botY = (h1[4].y + h2[4].y) / 2;
        if (topY < botY && distWrists > 0.6 * sAvg) {
          return {
            text: 'A',
            desc: 'Kedua telunjuk bertemu di atas, kedua jempol di bawah membentuk segitiga A',
          };
        }
      }

      // --- HURUF X (2 Telunjuk Silang) ---
      const crossMatch = testPair((a, b, s) => {
        return (
          (dist(a[7], b[7]) < 0.9 * s || dist(a[8], b[6]) < 0.95 * s) &&
          dist(a[8], b[8]) < 1.3 * s
        );
      });
      if (crossMatch) {
        return {
          text: 'X',
          desc: 'Kedua jari telunjuk saling bersilang membentuk huruf X',
        };
      }

      // --- HURUF T (Atap & Tiang) ---
      const tMatch = testPair((top, bot, s) => {
        const isHorizontal = Math.abs(top[8].x - top[5].x) > Math.abs(top[8].y - top[5].y) * 0.9;
        const isVertical = Math.abs(bot[8].y - bot[5].y) > Math.abs(bot[8].x - bot[5].x) * 0.8;
        return (
          dist(bot[8], top[7]) < 1.15 * s &&
          bot[8].y > top[8].y &&
          (isHorizontal || isVertical)
        );
      });
      if (tMatch) {
        return {
          text: 'T',
          desc: 'Telunjuk mendatar di atas, telunjuk tegak di tengah bawah membentuk T',
        };
      }

      // --- HURUF H (Dua Tiang Berdampingan) ---
      if (
        isExt(h1, 8, 6, 5) &&
        isExt(h2, 8, 6, 5) &&
        distIndexTips < 1.1 * sAvg &&
        distWrists < 2.2 * sAvg
      ) {
        return {
          text: 'H',
          desc: 'Kedua jari telunjuk tegak berdampingan membentuk dua tiang jembatan H',
        };
      }

      // --- HURUF B (2 Tangan Melengkung Bersentuhan) ---
      if (
        distIndexTips < 1.35 * sAvg &&
        (distThumbTips < 1.45 * sAvg || dist(h1[12], h2[12]) < 1.45 * sAvg) &&
        distWrists > 0.7 * sAvg
      ) {
        return {
          text: 'B',
          desc: 'Kedua tangan melengkung bersentuhan membentuk dua lengkungan huruf B',
        };
      }

      // --- HURUF K (Tiang & Cabang Sudut) ---
      const kMatch = testPair((stem, branch, s) => {
        return (
          isExt(stem, 8, 6, 5) &&
          (dist(branch[8], stem[6]) < 1.1 * s || dist(branch[4], stem[6]) < 1.1 * s)
        );
      });
      if (kMatch) {
        return {
          text: 'K',
          desc: 'Satu telunjuk sebagai tiang tegak, tangan lain membentuk cabang menempel (Huruf K)',
        };
      }

      // --- HURUF D (Tiang & Lengkungan C) ---
      const dMatch = testPair((stem, arc, s) => {
        return (
          isExt(stem, 8, 6, 5) &&
          dist(stem[8], arc[8]) < 1.1 * s &&
          (dist(stem[0], arc[4]) < 1.4 * s || dist(stem[5], arc[4]) < 1.3 * s)
        );
      });
      if (dMatch) {
        return {
          text: 'D',
          desc: 'Satu telunjuk tegak dipadukan lengkungan tangan lainnya membentuk huruf D',
        };
      }

      // --- HURUF M & N (Kaki di Telapak) ---
      const mnMatch = testPair((palm, leg, s) => {
        const toPalm = dist(leg[8], palm[9]);
        if (toPalm < 1.25 * s) {
          const legMid = isExt(leg, 12, 10, 9);
          const legRing = isExt(leg, 16, 14, 13);
          if (legMid && legRing) {
            return { text: 'M', desc: 'Tiga jari bertumpu di telapak kiri membentuk 3 kaki M' };
          }
          if (legMid && !legRing) {
            return { text: 'N', desc: 'Dua jari bertumpu di telapak kiri membentuk 2 kaki N' };
          }
        }
        return null;
      });
      if (mnMatch) return mnMatch;

      // --- HURUF P (Tiang & Bulatan Pucuk) ---
      const pMatch = testPair((stem, loop, s) => {
        return (
          isExt(stem, 8, 6, 5) &&
          dist(loop[8], stem[8]) < 0.9 * s &&
          dist(loop[4], stem[8]) < 1.0 * s
        );
      });
      if (pMatch) {
        return {
          text: 'P',
          desc: 'Telunjuk tegak, tangan lain membuat bulatan di pucuk tiang (Huruf P)',
        };
      }

      // --- SAPAAN / KATA HANYA DI EVALUASI JIKA MODE MENGIZINKAN ---
      if (mode !== 'abjad') {
        // TOLONG (Menangkup)
        if (distWrists < 1.4 * sAvg && distIndexTips < 1.0 * sAvg && isExt(h1, 8, 6, 5) && isExt(h2, 8, 6, 5)) {
          return { text: 'TOLONG', desc: 'Kedua tangan menangkup di depan dada (Tolong)' };
        }
        // SAMA-SAMA (Dua telapak terbuka simetris)
        if (distWrists > 1.2 * sAvg && distWrists < 3.2 * sAvg) {
          const h1Open = isExt(h1, 8, 6, 5) && isExt(h1, 12, 10, 9) && isExt(h1, 16, 14, 13);
          const h2Open = isExt(h2, 8, 6, 5) && isExt(h2, 12, 10, 9) && isExt(h2, 16, 14, 13);
          if (h1Open && h2Open) {
            return { text: 'SAMA-SAMA', desc: 'Kedua telapak terbuka simetris (Sama-sama)' };
          }
        }
      }
    }

    // ============================================================
    // B. SINGLE-HAND RECOGNITION (Universal BISINDO & Fingerspelling)
    // Evaluates Hand 1 (or best isolated hand)
    // ============================================================
    const h = h1;
    const s = s1;

    const indexE = isExt(h, 8, 6, 5);
    const middleE = isExt(h, 12, 10, 9);
    const ringE = isExt(h, 16, 14, 13);
    const pinkyE = isExt(h, 20, 18, 17);
    const thumbE = isThumbExt(h);

    // --- HURUF B (1 Tangan: 4 Jari Rapat Tegak, Jempol Lipat) ---
    // Ini adalah isyarat huruf B standar yang paling sering digunakan!
    if (indexE && middleE && ringE && pinkyE) {
      const dIndexMid = dist(h[8], h[12]);
      const dMidRing = dist(h[12], h[16]);
      // Jari-jari rapat ke atas
      if (dIndexMid < 0.65 * s && dMidRing < 0.65 * s) {
        // Jika jempol melipat di depan telapak atau tidak terbuka lebar
        if (!thumbE || dist(h[4], h[9]) < 0.85 * s) {
          return {
            text: 'B',
            desc: 'Empat jari tegak rapat ke atas dengan ibu jari terlipat di depan telapak (Huruf B)',
          };
        }
      }
    }

    // --- HURUF A (1 Tangan: Kepalan dengan Jempol Tegak di Samping) ---
    if (!indexE && !middleE && !ringE && !pinkyE) {
      if (h[4].y < h[5].y || dist(h[4], h[5]) < 0.6 * s) {
        return {
          text: 'A',
          desc: 'Tangan mengepal rapat dengan ibu jari tegak di samping telunjuk (Huruf A)',
        };
      }
    }

    // --- HURUF L (Jempol & Telunjuk 90 Derajat) ---
    if (thumbE && indexE && !middleE && !ringE && !pinkyE) {
      if (dist(h[4], h[8]) > 1.0 * s) {
        return {
          text: 'L',
          desc: 'Ibu jari dan telunjuk terbuka 90 derajat membentuk sudut siku L',
        };
      }
    }

    // --- HURUF V (Dua Jari Terbuka Melebar) ---
    if (indexE && middleE && !ringE && !pinkyE) {
      if (dist(h[8], h[12]) >= 0.52 * s) {
        return {
          text: 'V',
          desc: 'Jari telunjuk dan jari tengah terangkat terbuka melebar (Huruf V)',
        };
      }
    }

    // --- HURUF U (Dua Jari Tegak Rapat) ---
    if (indexE && middleE && !ringE && !pinkyE) {
      if (dist(h[8], h[12]) < 0.52 * s) {
        return {
          text: 'U',
          desc: 'Jari telunjuk dan jari tengah terangkat tegak lurus dan rapat (Huruf U)',
        };
      }
    }

    // --- HURUF R (Telunjuk dan Tengah Bersilangan) ---
    if (indexE && middleE && !ringE && !pinkyE) {
      if (dist(h[8], h[12]) < 0.38 * s) {
        return {
          text: 'R',
          desc: 'Jari telunjuk dan jari tengah terangkat dan bersilangan (Huruf R)',
        };
      }
    }

    // --- HURUF I (Hanya Kelingking Terangkat) ---
    if (!thumbE && !indexE && !middleE && !ringE && pinkyE) {
      return {
        text: 'I',
        desc: 'Hanya jari kelingking terangkat tegak lurus ke atas (Huruf I)',
      };
    }

    // --- HURUF Y (Shaka / Jempol & Kelingking Terbuka) ---
    if (thumbE && !indexE && !middleE && !ringE && pinkyE) {
      return {
        text: 'Y',
        desc: 'Ibu jari dan kelingking terbuka melebar (Huruf Y)',
      };
    }

    // --- HURUF C (Lengkungan Setengah Lingkaran) ---
    if (!middleE && !ringE && !pinkyE) {
      const dThumbIndex = dist(h[4], h[8]);
      if (dThumbIndex > 0.7 * s && dThumbIndex < 1.7 * s && h[8].y < h[4].y) {
        return {
          text: 'C',
          desc: 'Ibu jari dan jari-jari melengkung membentuk setengah lingkaran C',
        };
      }
    }

    // --- HURUF O (Jempol dan Telunjuk Melingkar Rapat) ---
    if (!middleE && !ringE && !pinkyE) {
      const dThumbIndex = dist(h[4], h[8]);
      if (dThumbIndex < 0.48 * s) {
        return {
          text: 'O',
          desc: 'Ujung ibu jari dan telunjuk bersentuhan membentuk lingkaran O',
        };
      }
    }

    // --- HURUF D (1 Tangan: Telunjuk Tegak, Jari Lain Melingkar ke Jempol) ---
    if (indexE && !middleE && !ringE && !pinkyE) {
      if (dist(h[4], h[12]) < 0.65 * s) {
        return {
          text: 'D',
          desc: 'Jari telunjuk tegak lurus, jari tengah dan jempol melingkar di bawahnya (Huruf D)',
        };
      }
    }

    // --- HURUF F (1 Tangan: OK Sign) ---
    if (!indexE && middleE && ringE && pinkyE) {
      if (dist(h[4], h[8]) < 0.5 * s) {
        return {
          text: 'F',
          desc: 'Ibu jari dan telunjuk melingkar bersentuhan, 3 jari lain tegak lurus (Huruf F)',
        };
      }
    }

    // --- HURUF W (3 Jari Terangkat Melebar) ---
    if (indexE && middleE && ringE && !pinkyE && !thumbE) {
      return {
        text: 'W',
        desc: 'Tiga jari (telunjuk, tengah, manis) terangkat tegak melebar (Huruf W)',
      };
    }

    // --- HURUF E (3 Jari Mendatar) ---
    if (indexE && middleE && ringE && !pinkyE) {
      const isHorizontal = Math.abs(h[8].x - h[0].x) > Math.abs(h[8].y - h[0].y) * 0.8;
      if (isHorizontal) {
        return {
          text: 'E',
          desc: 'Tiga jari mendatar horizontal menyerupai huruf E',
        };
      }
    }

    // ============================================================
    // C. PHRASES & COMMON WORDS (Only when mode !== 'abjad')
    // ============================================================
    if (mode !== 'abjad') {
      // BAGUS / OKE (Jempol Acung)
      if (thumbE && !indexE && !middleE && !ringE && !pinkyE && h[4].y < h[3].y) {
        return { text: 'BAGUS / OKE', desc: 'Ibu jari teracung ke atas (Bagus / Jempol)' };
      }
      // HALO (Telapak Terbuka Lebar)
      if (thumbE && indexE && middleE && ringE && pinkyE && dist(h[4], h[8]) > 1.2 * s) {
        return { text: 'HALO', desc: 'Telapak tangan terbuka menyapa (Halo)' };
      }
      // I LOVE YOU (ILY)
      if (thumbE && indexE && !middleE && !ringE && pinkyE) {
        return { text: 'I LOVE YOU (ILY)', desc: 'Ibu jari, telunjuk, dan kelingking terbuka (Simbol Kasih Sayang)' };
      }
    }

    return null;
  };

  // -------------------------------------------------------------
  // Camera & MediaPipe Setup with Reliable Polling
  // -------------------------------------------------------------
  useEffect(() => {
    let isMounted = true;

    async function initCamera() {
      try {
        setIsLoading(true);
        setCameraError(null);

        // Wait up to 6 seconds for MediaPipe scripts to load from CDN
        let waitCount = 0;
        while ((!window.Hands || !window.Camera) && waitCount < 30) {
          await new Promise((r) => setTimeout(r, 200));
          waitCount++;
        }

        if (!window.Hands || !window.Camera) {
          throw new Error('Pustaka MediaPipe sedang memuat. Silakan periksa koneksi internet atau muat ulang halaman.');
        }

        const hands = new window.Hands({
          locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
        });

        hands.setOptions({
          maxNumHands: 2,
          modelComplexity: 1,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });

        hands.onResults((results) => {
          if (!isMounted) return;

          const canvas = canvasRef.current;
          const video = videoRef.current;
          if (!canvas || !video) return;

          const ctx = canvas.getContext('2d');
          canvas.width = video.videoWidth || 640;
          canvas.height = video.videoHeight || 480;

          ctx.save();
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const landmarks = results.multiHandLandmarks || [];
          setHandsCount(landmarks.length);

          if (landmarks.length > 0) {
            // Draw skeleton lines and joints with distinct high-contrast colors
            for (let i = 0; i < landmarks.length; i++) {
              const pts = landmarks[i];
              if (window.drawConnectors) {
                window.drawConnectors(ctx, pts, window.HAND_CONNECTIONS, {
                  color: i === 0 ? '#3E69C9' : '#8B5CF6',
                  lineWidth: 4,
                });
              }
              if (window.drawLandmarks) {
                window.drawLandmarks(ctx, pts, {
                  color: '#FFE58A',
                  lineWidth: 2,
                  radius: 4,
                });
              }
            }

            // Run classifier using active mode
            const match = classifyGesture(landmarks, trackingMode);
            if (match) {
              setDetectedSign(match);

              // Check if matching current selected letter
              if (match.text === selectedLetter) {
                setMatchedSelected(true);
              } else {
                setMatchedSelected(false);
              }

              // Stabilize candidate before appending to sentence
              if (match.text === lastCandidateRef.current) {
                stableCounterRef.current += 1;
                // Held for ~6 frames (~300ms)
                if (stableCounterRef.current === 6) {
                  setAssembledSentence((prev) => {
                    if (prev.endsWith(match.text)) return prev;
                    return prev ? `${prev} ${match.text}` : match.text;
                  });
                }
              } else {
                lastCandidateRef.current = match.text;
                stableCounterRef.current = 1;
              }
            } else {
              setDetectedSign(null);
              setMatchedSelected(false);
            }
          } else {
            setDetectedSign(null);
            setMatchedSelected(false);
          }

          ctx.restore();
        });

        handsRef.current = hands;

        if (videoRef.current) {
          const camera = new window.Camera(videoRef.current, {
            onFrame: async () => {
              if (videoRef.current && handsRef.current) {
                await handsRef.current.send({ image: videoRef.current });
              }
            },
            width: 640,
            height: 480,
          });

          await camera.start();
          cameraRef.current = camera;
          if (isMounted) setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setCameraError(err.message || 'Kamera terkendala.');
          setIsLoading(false);
        }
      }
    }

    initCamera();

    return () => {
      isMounted = false;
      if (cameraRef.current) try { cameraRef.current.stop(); } catch (e) {}
      if (handsRef.current) try { handsRef.current.close(); } catch (e) {}
    };
  }, [trackingMode, selectedLetter]);

  const speakSentence = (text) => {
    if (!text || typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95;
    setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = () => {
    if (!assembledSentence) return;
    navigator.clipboard.writeText(assembledSentence);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentGuide = ALPHABET_GUIDE[selectedLetter] || ALPHABET_GUIDE['B'];

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 text-left flex flex-col min-h-screen">
      {/* 1. Header & Quick Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
        <button
          onClick={onBack}
          className="btn-bouncy flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bubble text-xs font-bold text-[#24336B] dark:text-[#FFE58A] shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          {/* Tracking Mode Switcher */}
          <div className="flex items-center p-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bubble font-bold">
            <button
              onClick={() => setTrackingMode('abjad')}
              className={`px-3 py-1 rounded-full transition-all ${
                trackingMode === 'abjad'
                  ? 'bg-[#3E69C9] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-[#3E69C9]'
              }`}
            >
              🔤 Fokus Abjad (A-Z)
            </button>
            <button
              onClick={() => setTrackingMode('sapaan')}
              className={`px-3 py-1 rounded-full transition-all ${
                trackingMode === 'sapaan'
                  ? 'bg-[#3E69C9] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-[#3E69C9]'
              }`}
            >
              💬 Sapaan & Kata
            </button>
            <button
              onClick={() => setTrackingMode('all')}
              className={`px-3 py-1 rounded-full transition-all ${
                trackingMode === 'all'
                  ? 'bg-[#3E69C9] text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-[#3E69C9]'
              }`}
            >
              🌟 Semua
            </button>
          </div>

          {/* Button to Open Reference Chart Modal */}
          <button
            onClick={() => setShowChartModal(true)}
            className="btn-bouncy flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFE58A] hover:bg-[#fedb68] text-[#24336B] text-xs font-bubble font-bold shadow-xs transition-colors"
          >
            <ImageIcon className="w-3.5 h-3.5 text-[#3E69C9]" />
            <span>Lihat Poster BISINDO</span>
          </button>
        </div>
      </div>

      {/* 2. Interactive Letter Practice Target Bar (A - Z) */}
      <div className="mb-3 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bubble font-bold text-slate-500 dark:text-slate-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#3E69C9]" />
            <span>Pilih Huruf yang Ingin Dipraktikkan:</span>
          </span>
          <span className="text-[11px] font-semibold text-slate-400">
            Klik huruf untuk melihat panduan posisi jari
          </span>
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          {Object.keys(ALPHABET_GUIDE).map((letter) => {
            const isSelected = selectedLetter === letter;
            const isDetected = detectedSign && detectedSign.text === letter;
            return (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`min-w-[34px] h-[34px] rounded-xl flex items-center justify-center font-bubble font-black text-xs transition-all ${
                  isDetected
                    ? 'bg-emerald-500 text-white scale-110 shadow-md ring-2 ring-emerald-300'
                    : isSelected
                    ? 'bg-[#24336B] text-[#FFE58A] scale-105 shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-[#FFE58A] hover:text-[#24336B]'
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Live Guide Card for Selected Letter */}
        <div className="mt-2.5 p-3 rounded-xl bg-[#F0F4FC] dark:bg-slate-900/60 border border-[#B8A5F4]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-[#24336B] text-[#FFE58A] font-bubble font-black text-xs">
                {currentGuide.name}
              </span>
              <span className="text-xs font-bold text-[#24336B] dark:text-slate-200">
                {currentGuide.hint}
              </span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300">
              👉 <strong>1 Tangan:</strong> {currentGuide.oneHand}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              👉 <strong>2 Tangan:</strong> {currentGuide.twoHand}
            </p>
          </div>

          {matchedSelected && (
            <div className="self-start sm:self-center px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-bubble font-black flex items-center gap-1.5 shadow-md animate-bounce">
              <CheckCircle2 className="w-4 h-4" />
              <span>COCOK DENGAN HURUF {selectedLetter}!</span>
            </div>
          )}
        </div>
      </div>

      {/* 3. Camera Viewfinder with Real-Time HUD */}
      <div className="relative rounded-3xl bg-slate-900 overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700 aspect-4/3 sm:aspect-16/9 flex items-center justify-center">
        <video
          ref={videoRef}
          playsInline
          muted
          className="w-full h-full object-cover transform -scale-x-100"
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover transform -scale-x-100 pointer-events-none"
        />

        {isLoading && (
          <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-xs flex flex-col items-center justify-center text-white p-4">
            <RefreshCw className="w-8 h-8 animate-spin text-[#FFE58A] mb-3" />
            <h3 className="font-bubble text-base font-bold">Menyiapkan Kamera Isyarat...</h3>
            <p className="text-xs text-slate-300 mt-1">Memuat pelacakan tangan MediaPipe...</p>
          </div>
        )}

        {cameraError && (
          <div className="absolute inset-0 bg-slate-900/95 flex flex-col items-center justify-center text-white p-6 text-center">
            <AlertCircle className="w-10 h-10 text-[#FF7A6E] mb-2" />
            <h3 className="font-bubble text-base font-bold text-[#FF7A6E]">Kamera Terkendala</h3>
            <p className="text-xs text-slate-300 max-w-sm mt-1">{cameraError}</p>
          </div>
        )}

        {/* HUD Top Bar: Hand Detection & Live Sign */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
          <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bubble font-bold flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                handsCount === 2
                  ? 'bg-emerald-400 ring-4 ring-emerald-400/30'
                  : handsCount === 1
                  ? 'bg-amber-400 ring-4 ring-amber-400/30'
                  : 'bg-rose-400 animate-pulse'
              }`}
            />
            <span>
              {handsCount === 2
                ? '🙌 2 Tangan Terlacak'
                : handsCount === 1
                ? '✋ 1 Tangan Terlacak'
                : 'Arahkan tangan ke kamera'}
            </span>
          </div>

          {detectedSign && (
            <div className="px-4 py-1.5 rounded-full bg-[#FFE58A] text-[#24336B] text-sm font-bubble font-black shadow-lg flex items-center gap-1.5 ring-2 ring-white">
              <Sparkles className="w-4 h-4 text-[#FF7A6E]" />
              <span>{detectedSign.text}</span>
            </div>
          )}
        </div>

        {/* HUD Bottom Guide: Real-time pose hint */}
        <div className="absolute bottom-3 left-4 right-4 pointer-events-none flex justify-center">
          <div className="px-4 py-1 rounded-full bg-black/50 backdrop-blur-md text-white/90 text-xs font-medium">
            {detectedSign ? (
              <span className="font-bubble font-bold text-[#FFE58A]">
                Terdeteksi: {detectedSign.desc}
              </span>
            ) : (
              <span>Posisikan tangan dengan jelas menghadap kamera</span>
            )}
          </div>
        </div>
      </div>

      {/* 4. Translation Panel & Smart Sentence Assembler */}
      <div className="mt-4 p-5 rounded-3xl bg-white dark:bg-slate-800 border-2 border-[#B8A5F4]/40 shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bubble font-bold uppercase tracking-wider text-slate-400">
            Isyarat yang Sedang Terdeteksi
          </span>
          {detectedSign && (
            <button
              onClick={() => {
                setAssembledSentence((prev) => (prev ? `${prev} ${detectedSign.text}` : detectedSign.text));
                speakSentence(detectedSign.text);
              }}
              className="text-xs font-bubble font-bold px-3 py-1 rounded-full bg-[#FFE58A] hover:bg-[#fedb68] text-[#24336B] shadow-2xs"
            >
              + Masukkan ke Kalimat
            </button>
          )}
        </div>

        {/* Current Live Detected Word */}
        <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-700">
          <div>
            <h2 className="font-bubble text-2xl sm:text-3xl font-black text-[#24336B] dark:text-[#FFE58A] leading-none">
              {detectedSign ? detectedSign.text : 'Menunggu gerakan tangan...'}
            </h2>
            <p className="text-xs font-semibold text-slate-500 mt-1">
              {detectedSign
                ? detectedSign.desc
                : `Sedang fokus mendeteksi ${trackingMode === 'abjad' ? 'Abjad BISINDO A-Z' : 'Isyarat BISINDO'}. Coba huruf B atau A!`}
            </p>
          </div>

          {detectedSign && (
            <button
              onClick={() => speakSentence(detectedSign.text)}
              className="btn-bouncy p-3 rounded-2xl bg-[#FFE58A] text-[#24336B] hover:bg-[#fedb68] shadow-xs"
              title="Bunyikan Suara"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Assembled Sentence Box */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs font-bubble font-bold text-slate-400 mb-1.5">
            <span>Kalimat yang Terangkai Otomatis:</span>
            <div className="flex items-center gap-2">
              {assembledSentence && (
                <>
                  <button
                    onClick={() => speakSentence(assembledSentence)}
                    className="text-[#3E69C9] hover:underline flex items-center gap-1 font-bold text-xs"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Bunyikan</span>
                  </button>
                  <button
                    onClick={handleCopy}
                    className="text-emerald-700 hover:underline flex items-center gap-1 ml-2 font-bold text-xs"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Tersalin' : 'Salin'}</span>
                  </button>
                  <button
                    onClick={() => setAssembledSentence('')}
                    className="text-[#FF7A6E] hover:underline flex items-center gap-1 ml-2 font-bold text-xs"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Hapus</span>
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F0F4FC] dark:bg-slate-900/60 min-h-[52px] text-base font-bubble font-black text-[#24336B] dark:text-slate-100 flex items-center">
            {assembledSentence || (
              <span className="text-slate-400 font-normal text-xs">
                Tahan posisi isyarat selama ~0.3 detik untuk memasukkannya otomatis ke kalimat...
              </span>
            )}
          </div>
        </div>

        {/* Quick Simulation Bar */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-400">
              ⚡ Tombol Uji Coba Cepat (Klik untuk merangkai langsung):
            </span>
            <button
              onClick={() => setShowChartModal(true)}
              className="text-[11px] font-bold text-[#3E69C9] hover:underline"
            >
              Lihat Poster Asli &gt;
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['A', 'B', 'C', 'D', 'E', 'L', 'T', 'V', 'X', 'HALO', 'TERIMA KASIH', 'SAMA-SAMA', 'TOLONG', 'BAGUS'].map((word) => (
              <button
                key={word}
                onClick={() => {
                  setDetectedSign({
                    text: word,
                    desc: `Simulasi isyarat ${word}`,
                  });
                  setAssembledSentence((prev) => (prev ? `${prev} ${word}` : word));
                  speakSentence(word);
                }}
                className="btn-bouncy px-3 py-1 rounded-xl bg-slate-100 hover:bg-[#FFE58A] dark:bg-slate-700 text-[#24336B] dark:text-slate-200 text-xs font-bubble font-bold transition-colors"
              >
                +{word}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Reference Chart Popup Modal */}
      {showChartModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-3xl p-5 border-4 border-white dark:border-slate-700 shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3 mb-3">
              <div>
                <h3 className="font-bubble text-xl font-black text-[#24336B] dark:text-[#FFE58A]">
                  Poster Abjad BISINDO Asli
                </h3>
                <p className="text-xs text-slate-500 font-semibold">
                  Foto poster referensi resmi BISINDO yang kamu berikan.
                </p>
              </div>
              <button
                onClick={() => setShowChartModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-2 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center">
              <img
                src="/materi/bisindo/abjad-bisindo-chart.jpg"
                alt="Abjad BISINDO Resmi"
                className="max-w-full h-auto rounded-xl object-contain shadow-sm"
              />
            </div>

            <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs font-bubble">
              <span className="text-slate-500 font-semibold">
                💡 <strong>Tips:</strong> Klik huruf apa saja di bar atas kamera untuk melihat panduan per hurufnya!
              </span>
              <button
                onClick={() => setShowChartModal(false)}
                className="btn-bouncy px-5 py-2 rounded-full bg-[#24336B] text-white font-bold text-xs"
              >
                Tutup & Praktikkan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
